/* Zoo Dash: deterministic model shared by the browser game and physics checks. */
(function(root){
 class ZooDashModel{
  constructor(width=960,height=500,rng=Math.random){this.width=width;this.height=height;this.ground=height*.82;this.rng=rng;this.elapsed=0;this.duration=60;this.lives=3;this.stars=0;this.distance=0;this.speed=285;this.player={x:Math.max(80,width*.15),y:this.ground,vy:0,jumps:0,invincible:0};this.obstacles=[];this.coins=[];this.effects=[];this.spawn=2.5;this.starSpawn=1.0;this.done=false;this.reason=null;this.events=[];this.stage=1;}
  jump(){if(this.done||this.player.jumps>=2)return false;this.player.vy=-690;this.player.jumps++;this.events.push('jump');return true;}
  step(dt){if(this.done)return;dt=Math.min(Math.max(dt,0),.05);this.events=[];this.elapsed+=dt;this.distance+=dt*this.speed;const nextLevel=this.level;if(nextLevel!==this.stage){this.stage=nextLevel;this.lives=Math.min(3,this.lives+1);this.events.push('level');}this.speed=[0,265,315,365][this.level]+Math.min(15,(this.elapsed%20)*.75);const p=this.player;p.invincible=Math.max(0,p.invincible-dt);p.vy+=1900*dt;p.y+=p.vy*dt;if(p.y>=this.ground){p.y=this.ground;p.vy=0;p.jumps=0;}
   this.spawn-=dt;if(this.spawn<=0){const level=this.level;this.obstacles.push({x:this.width+70,w:40+this.rng()*(level===3?25:14),h:[0,34,45,57][level]+this.rng()*[0,14,19,22][level]});if(level===3&&this.rng()>.7)this.obstacles.push({x:this.width+155,w:35,h:35});this.spawn=[0,2.0,1.65,1.35][level]+this.rng()*.6;}
   this.starSpawn-=dt;if(this.starSpawn<=0){const lift=this.rng()>[0,.65,.4,.25][this.level]?[0,85,115,145][this.level]:35;for(let i=0;i<3;i++)this.coins.push({x:this.width+65+i*48,y:this.ground-lift,r:16});this.starSpawn=2.3+this.rng()*1.0;}
   for(const o of this.obstacles){o.x-=this.speed*dt;if(p.invincible===0&&p.x+19<o.x+o.w&&p.x+61>o.x&&p.y-10>this.ground-o.h&&p.y-69<this.ground){this.lives--;p.invincible=1.5;this.events.push('hit');this.effects.push({x:p.x+40,y:p.y-40,t:.7,text:'OOPS!'});}}
   for(const c of this.coins){c.x-=this.speed*dt;if(!c.got&&Math.abs(c.x-(p.x+40))<38&&Math.abs(c.y-(p.y-60))<55){c.got=true;this.stars++;this.events.push('star');this.effects.push({x:c.x,y:c.y,t:.6,text:'+10'});}}
   this.obstacles=this.obstacles.filter(o=>o.x+o.w>-30);this.coins=this.coins.filter(c=>c.x>-30&&!c.got);for(const e of this.effects){e.t-=dt;e.y-=30*dt;}this.effects=this.effects.filter(e=>e.t>0);
   if(this.lives<=0){this.done=true;this.reason='lives';}else if(this.elapsed>=this.duration){this.elapsed=this.duration;this.done=true;this.reason='time';this.events.push('win');}}
  get level(){return Math.min(3,Math.floor(this.elapsed/20)+1);}
  get levelName(){return ['','Giraffe Gardens','Rocky Trail','Sunset Sprint'][this.level];}
  get score(){return this.stars*10+Math.floor(this.elapsed)*2+(this.level-1)*50;}
 }
 root.ZooDashModel=ZooDashModel;if(typeof module!=='undefined')module.exports={ZooDashModel};
})(typeof window!=='undefined'?window:globalThis);
