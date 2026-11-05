const BANK={
 detective:{title:'Time Detective',tag:'Read the situation',description:'Follow the story. Choose what fits.',color:'teal',type:'choice',questions:[
 ['The zoo opens at nine every day. Which sentence describes a routine?',['The zoo opens at nine.','The zoo is opening now.','The zoo opened yesterday.'],'The zoo opens at nine.','Every day tells us this is a routine. Use the simple present.','Simple present'],
 ['Look! Mia is beside the penguin pool right now. What is happening?',['She feeds them every day.','She is feeding them.','She fed them yesterday.'],'She is feeding them.','Right now describes an action in progress: is + feeding.','Present continuous'],
 ['The team finished a park clean-up yesterday. Choose the report.',['They have cleaned the park yesterday.','They cleaned the park yesterday.','They clean the park yesterday.'],'They cleaned the park yesterday.','Yesterday is a finished past time. Use the simple past.','Simple past'],
 ['Sam is talking about his life so far. No finished time is given.',['I have seen a giraffe in the wild.','I seen a giraffe in the wild.','I am see a giraffe in the wild.'],'I have seen a giraffe in the wild.','Life experience up to now: have + past participle (seen).','Present perfect'],
 ['Nora started painting at two. It is four now and she is still painting. Emphasise the activity and how long.',['She painted at two yesterday.','She has been painting for two hours.','She paints for two hours yesterday.'],'She has been painting for two hours.','An activity started earlier and is still continuing: has been + -ing.','Present perfect continuous'],
 ['Ava joined the club in 2022. She is still a member.',['She has been a member since 2022.','She is being a member since 2022.','She was a member since 2022.'],'She has been a member since 2022.','Be a member is a state continuing until now. Use has been, not has been being.','Present perfect'],
 ['Leo usually takes the bus, but today his dad is driving him. Choose today’s action.',['His dad drives him every day.','His dad is driving him today.','His dad drove him last week.'],'His dad is driving him today.','The situation is happening today. The simple present sentence would describe a routine.','Present continuous'],
 ['The keeper finished feeding the lions at eight this morning. It is now afternoon. Ask about that finished event.',['Did she feed the lions at eight?','Has she feed the lions at eight?','Does she fed the lions at eight?'],'Did she feed the lions at eight?','A finished event at a stated past time: did + subject + base verb.','Simple past'],
 ['The bin is empty now. Ben has just emptied it. What does his sentence focus on?',['A result we can see now','A routine every week','A plan for tomorrow'],'A result we can see now','The present perfect can connect a past action to its result now.','Present perfect'],
 ['We started waiting at ten. We are still waiting now. Which question asks about the length of the activity?',['How long have you been waiting?','When did you waited?','Do you waiting every day?'],'How long have you been waiting?','How long + have + subject + been + -ing asks about an activity continuing until now.','Present perfect continuous'],
 ['Choose a fact about pandas.',['Pandas eat bamboo.','Pandas are eat bamboo.','Pandas eats bamboo.'],'Pandas eat bamboo.','Facts use the simple present. A plural subject takes eat, not eats.','Simple present'],
 ['Which answer correctly matches “Has Ruby visited the zoo?”',['Yes, she did.','Yes, she has.','Yes, she is.'],'Yes, she has.','Use the same auxiliary as the question: has.','Present perfect']
 ]},
 perfect:{title:'Perfect Match',tag:'Result or activity?',description:'Spot the focus: what is done, or what has been going on?',color:'purple',type:'choice',questions:[
 ['The target is ten posters. All ten are finished. Focus on the completed total.',['We have made ten posters.','We have been make ten posters.','We has made ten posters.'],'We have made ten posters.','For a completed number or result, use have + past participle.','Present perfect'],
 ['The posters are not finished. Focus on the activity continuing for an hour.',['We have been making posters for an hour.','We have making posters for an hour.','We are been making posters for an hour.'],'We have been making posters for an hour.','The process is continuing: have been making.','Present perfect continuous'],
 ['Choose the correct sentence about an experience.',['Has he ever rode a horse?','Has he ever ridden a horse?','Has he ever riding a horse?'],'Has he ever ridden a horse?','Ride → rode → ridden. After has, use the past participle.','Present perfect'],
 ['Choose the correct question about an activity continuing until now.',['Have they been working with animals?','Have they working with animals?','Do they have been working with animals?'],'Have they been working with animals?','Question order: Have + they + been + working?','Present perfect continuous'],
 ['Which sentence correctly says that a task is not done yet?',['I haven’t finish my report yet.','I haven’t finished my report yet.','I didn’t finished my report yet.'],'I haven’t finished my report yet.','Negative present perfect: haven’t + past participle.','Present perfect'],
 ['Choose the negative form of “She has been helping us.”',['She hasn’t been helping us.','She doesn’t been helping us.','She hasn’t helping us.'],'She hasn’t been helping us.','Keep been + helping. Change has to has not / hasn’t.','Present perfect continuous'],
 ['An activity started at 7:00. Choose the time phrase.',['for 7:00','since 7:00','since three hours'],'since 7:00','Since introduces the starting point. For introduces a duration.','For / since'],
 ['The activity has continued for a duration of three weeks. Choose the phrase.',['since three weeks','for three weeks','for last Monday'],'for three weeks','Three weeks is a period of time, so use for.','For / since'],
 ['Kai started knowing Lily years ago and still knows her.',['He has known Lily for years.','He has been knowing Lily for years.','He has know Lily for years.'],'He has known Lily for years.','Know is normally a state verb. Use has known, not has been knowing.','Present perfect'],
 ['Ask a keeper about life experience up to now.',['Have you ever worked with penguins?','Did you ever worked with penguins?','Have you ever working with penguins?'],'Have you ever worked with penguins?','Have + subject + past participle asks about experience.','Present perfect'],
 ['“Have you been cleaning the cages?” Choose the short answer.',['Yes, I have.','Yes, I am.','Yes, I been.'],'Yes, I have.','The auxiliary is have, even though the full verb form includes been cleaning.','Present perfect continuous'],
 ['Two sentences: “I have worked here for years.” “I have been working here for years.” Which explanation is best?',['Only the second can be correct.','Both can be correct; the second emphasises the activity.','The first always means the job is finished.'],'Both can be correct; the second emphasises the activity.','Some verbs allow both forms. Present perfect does not always mean finished.','Meaning / contrast']
 ]},
 builder:{title:'Sentence Studio',tag:'Tap the words',description:'Build questions, negatives and statements.',color:'yellow',type:'build',questions:[
 ['Ask about life experience.','Have you ever seen a panda?','Have / subject / ever / past participle','Present perfect'],
 ['Make a negative statement.','She has not fed the penguins yet.','She takes has. The past participle of feed is fed.','Present perfect'],
 ['Ask about an activity continuing until now.','How long have you been working here?','How long + have + subject + been + -ing','Present perfect continuous'],
 ['Say when the ongoing activity began.','They have been cleaning since nine.','Since + starting point','Present perfect continuous'],
 ['Make a negative routine.','He does not work on Sundays.','Does not is followed by the base verb.','Simple present'],
 ['Ask what is happening now.','Are they planting trees now?','Are + subject + -ing','Present continuous'],
 ['Ask about a finished past action.','Did she take photos yesterday?','Did + subject + base verb','Simple past'],
 ['Describe a completed total up to now.','We have collected twenty bottles.','Have + past participle focuses on the total collected.','Present perfect'],
 ['Make a negative ongoing activity.','He has not been helping today.','Has not + been + -ing','Present perfect continuous'],
 ['Describe a state continuing until now.','I have been a member for two years.','Have been + noun phrase. This is present perfect, not continuous.','Present perfect']
 ]},
 repair:{title:'Comic Repair',tag:'Fix the speech',description:'One grammar glitch in each speech bubble. Type the corrected sentence.',color:'coral',type:'repair',questions:[
 ['She have fed the lions.',['She has fed the lions.'],'She takes has.','Present perfect'],
 ['I have saw a tiger.',['I have seen a tiger.'],'See → saw → seen. Use the past participle after have.','Present perfect'],
 ['They have been work here for a year.',['They have been working here for a year.'],'After have been, use the -ing form for this activity.','Present perfect continuous'],
 ['We have cleaned the park yesterday.',['We cleaned the park yesterday.'],'Yesterday is a finished past time. Use the simple past.','Simple past'],
 ['He has been helping since three hours.',['He has been helping for three hours.'],'Three hours is a duration: for.','For / since'],
 ['She has been feeding them for Monday.',['She has been feeding them since Monday.'],'Monday is the starting point: since.','For / since'],
 ['Does she works at the zoo?',['Does she work at the zoo?'],'After does, use work, not works.','Simple present'],
 ['Did they went to the park?',['Did they go to the park?'],'After did, use the base form go.','Simple past'],
 ['Look! He is clean the cage.',['Look! He is cleaning the cage.'],'Is + -ing describes what is happening now.','Present continuous'],
 ['Have you been working? Yes, I am.',['Have you been working? Yes, I have.'],'Match the short answer to have.','Present perfect continuous']
 ]},
 reporter:{title:'Mission Reporter',tag:'Use your grammar',description:'Complete reports from the zoo and the park.',color:'green',type:'write',questions:[
 ['Routine: Every Saturday, Ruby ___ at the zoo. (work)',['works'],'Ruby is one person: add -s in the simple present.','Simple present'],
 ['Now: Look! The volunteers ___ trees. (plant)',['are planting'],'Plural subject + are + planting.','Present continuous'],
 ['Finished past: Yesterday, I ___ five photos. (take)',['took'],'Take → took. Yesterday requires the simple past.','Simple past'],
 ['Experience: I ___ a panda before. (see)',['have seen'],'Have + seen for an experience up to now.','Present perfect'],
 ['Result: The team ___ twenty bags of litter so far. (collect)',['has collected'],'The team is one group here. Has collected focuses on a completed total.','Present perfect'],
 ['Ongoing activity: We started at ten and are still busy. Focus on the process: We ___ the pool for two hours. (clean)',['have been cleaning'],'Have been + cleaning emphasises the continuing activity.','Present perfect continuous'],
 ['State: She ___ a club member since September. (be)',['has been'],'Has been a member is present perfect. No -ing verb is needed for this state.','Present perfect'],
 ['Ask about his usual routine now, using the simple present: ___ he work here every day?',['Does'],'Does + he + base verb asks about his current routine. “Will he work here every day?” is also grammatical, but it asks about the future, which is a different task.','Simple present'],
 ['Negative past: We ___ any balloons yesterday. (not sell)',['did not sell',"didn’t sell"], 'Did not is followed by the base form sell.','Simple past'],
 ['Activity continuing until now: How long ___ you ___ here? (wait) Write the whole question.',['How long have you been waiting here?'],'How long + have + you + been + waiting?','Present perfect continuous']
 ]}
};
const PERSONAL=[
 {title:'Your zoo experience',prompt:'Your team is helping a young giraffe. What relevant animal-care experience have you had?',frame:'I have / haven’t …',checks:['Have or haven’t + past participle','No finished time such as yesterday'],model:'I have helped feed giraffes before.'},
 {title:'The rescue continues',prompt:'What has your team been doing to help the giraffe? Say how long it has continued.',frame:'We have been … for / since …',checks:['Have been + -ing','For + duration OR since + starting point'],model:'We have been preparing food for the giraffe since this morning.'},
 {title:'Your teammate’s care routine',prompt:'What does your friend regularly do at the zoo? Connect the routine to caring for the animals.',frame:'My friend … every …',checks:['Simple present','He / she / one friend: remember -s'],model:'My friend checks the animals every morning.'},
 {title:'The rescue right now',prompt:'What is your team doing for the young giraffe right now?',frame:'We are …',checks:['Am / is / are + -ing','An action happening now'],model:'We are carrying fresh leaves to the young giraffe.'},
 {title:'Yesterday’s surprise',prompt:'What happened to start the giraffe rescue yesterday? Add an event your team can respond to.',frame:'Yesterday, …',checks:['Simple past form','A finished past time'],model:'Yesterday, we found a young giraffe beside a broken fence.'},
 {title:'Someone you can count on',prompt:'Introduce your teammate. How long have you known this person?',frame:'I have known … for / since …',checks:['Have + known','Use for / since correctly; no been knowing'],model:'I have known my zoo teammate for two years.'}
];
if(typeof module!=='undefined')module.exports={BANK,PERSONAL};
