/* Review 1-2: original practice for Units 3–4. */
Object.assign(BANK,{
 ability2:{title:'Ability Time Machine',tag:'Past or future ability?',description:'Travel through time with could and will be able to.',color:'teal',type:'choice',questions:[
 ['Mia is ten now. At five, she knew how to swim. Choose her past-ability sentence.',['When I was five, I could swim.','When I was five, I will be able to swim.','When I was five, I could to swim.'],'When I was five, I could swim.','Could + base verb describes general ability in the past. No to is needed.','Past ability'],
 ['At four, Leo did not know how to ride a bicycle.',['He couldn’t ride a bicycle at four.','He couldn’t rode a bicycle at four.','He won’t be able to ride a bicycle at four.'],'He couldn’t ride a bicycle at four.','Couldn’t + base verb describes a past lack of ability.','Past ability'],
 ['Ask Ruby about her ability when she was six.',['Could you draw when you were six?','Did you could draw when you were six?','Could you drew when you were six?'],'Could you draw when you were six?','Put could before the subject. Use the base verb draw. Do not add did.','Past ability questions'],
 ['“Could they play the piano when they were young?” Choose a matching positive short answer.',['Yes, they could.','Yes, they did.','Yes, they were.'],'Yes, they could.','Match the helper verb: Could…? Yes, they could.','Past ability questions'],
 ['The question is about a skill you expect to have next year. Use future ability.',['I will be able to speak more English next year.','I will can speak more English next year.','I will able to speak more English next year.'],'I will be able to speak more English next year.','The full future-ability form is will + be able to + base verb.','Future ability'],
 ['A robot cannot climb stairs now. Its designer says a new part will make this possible tomorrow.',['Tomorrow, it will be able to climb stairs.','Tomorrow, it could climbed stairs.','Tomorrow, it will can climb stairs.'],'Tomorrow, it will be able to climb stairs.','Use will be able to for a future ability.','Future ability'],
 ['A gate will stay locked tomorrow, so we will not have the ability to enter. Choose the full future-ability form.',['We won’t be able to enter tomorrow.','We won’t can enter tomorrow.','We won’t able to enter tomorrow.'],'We won’t be able to enter tomorrow.','Negative: will not / won’t + be able to + base verb.','Future ability'],
 ['Choose the correct future-ability question.',['Will he be able to join us?','Will he can join us?','Does he will be able to join us?'],'Will he be able to join us?','Will + subject + be able to + base verb?','Future ability questions'],
 ['“Will you be able to finish tomorrow?” Choose the negative short answer.',['No, I won’t.','No, I couldn’t.','No, I don’t.'],'No, I won’t.','The question uses will, so the short answer uses will / won’t.','Future ability questions'],
 ['Which word completes “She could ___ pictures when she was little”?',['draw','draws','drawing'],'draw','After could, use the base verb for every subject.','Modal verb form'],
 ['A museum story says an imaginary family could cook over a fire long ago. What does “could cook” mean here?',['They had that ability in the past.','They will have that ability next year.','They were not allowed to cook.'],'They had that ability in the past.','In this past-time story, could describes ability. Read the time context.','Past ability'],
 ['Which pair keeps the time and meaning clear?',['At six, I could swim. Next year, I will be able to dive.','At six, I will can swim. Next year, I could to dive.','At six, I could swam. Next year, I will able to dive.'],'At six, I could swim. Next year, I will be able to dive.','Could + base verb for past ability; will be able to + base verb for future ability.','Past and future ability']
 ]},
 clues2:{title:'Mystery Object Lab',tag:'How sure is the speaker?',description:'Use clues to choose must, has to, might or can’t.',color:'purple',type:'choice',questions:[
 ['The speaker is sure the object is a key. Choose a strong deduction.',['It must be a key.','It might be a key.','It can’t be a key.'],'It must be a key.','Must + base verb expresses a strong deduction from clues. Here the speaker is sure.','Strong deduction'],
 ['The speaker thinks the object is possibly a toy, but is not sure.',['It might be a toy.','It must be a toy.','It can’t be a toy.'],'It might be a toy.','Might expresses a possibility, not certainty.','Possibility'],
 ['The object is a plastic model. The speaker is sure it is not a real ancient coin.',['It can’t be a real ancient coin.','It must be a real ancient coin.','It might be a real ancient coin.'],'It can’t be a real ancient coin.','Can’t be expresses a strong negative deduction: the speaker is sure this is not true.','Negative deduction'],
 ['Choose another strong-deduction sentence with the same meaning as “It must be a ring.”',['It has to be a ring.','It might be a ring.','It couldn’t make a ring.'],'It has to be a ring.','For this meaning, has to be and must be both express a strong positive deduction.','Strong deduction'],
 ['Choose the correct strong-deduction form with a plural subject.',['These have to be the missing keys.','These has to be the missing keys.','These have be the missing keys.'],'These have to be the missing keys.','Use have to with plural subjects. Use has to with he / she / it or one thing.','Has to / have to'],
 ['Choose the correctly formed possibility.',['The box might contain a toy.','The box might contains a toy.','The box might to contain a toy.'],'The box might contain a toy.','Might is followed by the base verb. Do not add -s or to.','Modal verb form'],
 ['The speaker says, “I am not completely sure.” Which opening matches that level of certainty?',['It might be…','It must be…','It has to be…'],'It might be…','Not completely sure means a possibility. Use might.','Possibility'],
 ['Every object in this sealed box is a wooden toy. A new object is taken from this box. The speaker is sure it is a wooden toy.',['It must be a wooden toy.','It might not be a wooden toy.','It can’t be a wooden toy.'],'It must be a wooden toy.','The stated clues support a strong positive deduction.','Strong deduction'],
 ['All the tickets for this room are blue. This ticket is red. The speaker is sure it is not one of this room’s tickets.',['It can’t be a ticket for this room.','It must be a ticket for this room.','It has to be a ticket for this room.'],'It can’t be a ticket for this room.','Use can’t be when the clues rule out the idea.','Negative deduction'],
 ['Which sentence uses can’t for a deduction about identity, rather than inability to do an action?',['That can’t be my bag; my bag is green.','I can’t swim.','She can’t lift the box.'],'That can’t be my bag; my bag is green.','Can’t be + identity can express a deduction. Can’t swim describes ability. Context changes the meaning.','Certainty and ability'],
 ['Choose the correct strong-deduction sentence.',['That must be the answer.','That must to be the answer.','That must is the answer.'],'That must be the answer.','Must + base verb. The base form of is is be.','Modal verb form'],
 ['A friend says, “It must be gold.” Which reply correctly explains the friend’s confidence?',['My friend is making a strong deduction.','My friend is saying it is only one small possibility.','My friend is describing a skill in the past.'],'My friend is making a strong deduction.','Here must means the speaker is sure, based on clues. It does not describe a past ability.','Strong deduction']
 ]},
 builder2:{title:'Time & Clue Studio',tag:'Tap the words',description:'Build ability questions and clue-based statements.',color:'yellow',type:'build',questions:[
 ['Ask about past ability. Start with Could.','Could you swim when you were five?','Could + subject + base verb; the past-time phrase follows here.','Past ability questions'],
 ['Make a negative past-ability sentence. Start with She.','She could not ride a bicycle.','Subject + could not + base verb.','Past ability'],
 ['Make a future-ability statement. Start with I.',['I will be able to dive next year.','Next year I will be able to dive.'],'Keep will + be able to + base verb together.','Future ability'],
 ['Ask about future ability. Start with Will.','Will they be able to help tomorrow?','Will + subject + be able to + base verb?','Future ability questions'],
 ['Make a negative future-ability statement. Start with We.','We will not be able to enter.','Will not + be able to + base verb.','Future ability'],
 ['Make a strong deduction. Start with This.','This must be a dinosaur bone.','Must + base verb; be links to the noun phrase.','Strong deduction'],
 ['Use has to for a strong deduction. Start with It.','It has to be a key.','It is singular, so use has to be.','Has to / have to'],
 ['Make a possibility statement. Start with The.','The object might be a toy.','Might + be + noun phrase.','Possibility'],
 ['Make a strong negative deduction. Start with That.','That cannot be a real coin.','Cannot / can’t + be expresses a strong negative deduction here.','Negative deduction'],
 ['Use have to with a plural subject. Start with These.','These have to be the missing keys.','These is plural, so use have to, not has to.','Has to / have to']
 ]},
 repair2:{title:'Museum Comic Repair',tag:'Repair the whole sentence',description:'Keep the meaning and fix the verb group.',color:'coral',type:'repair',questions:[
 ['She could to swim when she was six.',['She could swim when she was six.'],'After could, use the base verb without to.','Past ability'],
 ['He couldn’t rode a bicycle.',['He couldn’t ride a bicycle.','He could not ride a bicycle.'],'After couldn’t, use ride, not rode.','Past ability'],
 ['Did you could draw when you were five?',['Could you draw when you were five?'],'Could is already the helper verb. Do not add did.','Past ability questions'],
 ['I will can speak more English next year.',['I will be able to speak more English next year.'],'Use will be able to, not will can.','Future ability'],
 ['She won’t able to come tomorrow.',['She won’t be able to come tomorrow.','She will not be able to come tomorrow.'],'Keep be in won’t be able to.','Future ability'],
 ['Will they be able to helped us?',['Will they be able to help us?'],'After be able to, use the base verb help.','Future ability questions'],
 ['It must to be an old ring.',['It must be an old ring.'],'Must + base verb. Do not add to.','Strong deduction'],
 ['These has to be the missing keys.',['These have to be the missing keys.'],'A plural subject takes have to.','Has to / have to'],
 ['This might is a toy.',['This might be a toy.'],'Might is followed by the base form be.','Possibility'],
 ['That can’t be is my bag.',['That can’t be my bag.','That cannot be my bag.'],'Keep can’t + be. Do not add is.','Negative deduction']
 ]},
 reporter2:{title:'Museum Reporter',tag:'Use the named form',description:'Report past skills, future abilities and deductions.',color:'green',type:'write',questions:[
 ['Past ability: At six, I knew how to swim. At six, I ___ swim. Use could.',['could'],'Could + base verb describes a general past ability.','Past ability'],
 ['Past lack of ability: At four, she did not know how to ride. She ___ ride at four. Use could not.',['could not','couldn’t'],'Could not / couldn’t + base verb.','Past ability'],
 ['Past-ability question: ___ you draw when you were five? Write the missing helper verb.',['Could'],'Could comes before the subject in this question.','Past ability questions'],
 ['Future ability: After more practice, he ___ play this song next month. Use will be able to.',['will be able to'],'Will be able to + base verb expresses future ability.','Future ability'],
 ['Future lack of ability: The locked gate will stop us tomorrow. We ___ enter tomorrow. Use will not be able to.',['will not be able to','won’t be able to'],'Negative future ability: won’t be able to + base verb.','Future ability'],
 ['Future ability: Write the whole question. (you / help us tomorrow) Start with Will.',['Will you be able to help us tomorrow?'],'Will + you + be able to + help?','Future ability questions'],
 ['Strong deduction: I am sure it is a ring. It ___ be a ring. Use must or has to.',['must','has to'],'Both must be and has to be express a strong deduction here.','Strong deduction'],
 ['Possibility: I am not sure, but it ___ be a toy. Use might.',['might'],'Might shows a possibility rather than certainty.','Possibility'],
 ['Strong negative deduction: I am sure this is not my bag. This ___ be my bag. Use cannot.',['cannot','can’t'],'Can’t be / cannot be expresses a strong negative deduction.','Negative deduction'],
 ['Strong deduction with a plural subject: I am sure these are our keys. These ___ be our keys. Use have to.',['have to'],'These is plural, so use have to rather than has to.','Has to / have to']
 ]}
});
const PERSONAL2=[
 {title:'A skill when you were younger',prompt:'Write something you could do when you were younger. Include your age.',frame:'When I was …, I could …',checks:['Could + base verb, without to','A clear past-time phrase'],model:'When I was six, I could ride a bicycle.'},
 {title:'Something you couldn’t do',prompt:'Write a skill you did not have when you were younger.',frame:'When I was …, I couldn’t …',checks:['Couldn’t + base verb','Keep the main verb in the base form'],model:'When I was four, I couldn’t swim.'},
 {title:'A future ability',prompt:'Imagine a skill you expect to have after more practice.',frame:'After more practice, I will be able to …',checks:['Will + be able to + base verb','A future ability, rather than a past skill'],model:'After more practice, I will be able to play this song.'},
 {title:'A strong deduction',prompt:'Look at an object. Say what you are sure it is, and give a clue.',frame:'It must be / has to be … because …',checks:['Must be OR has to be + noun phrase','A reason that supports your deduction'],model:'It must be my notebook because my name is on the cover.'},
 {title:'A possibility',prompt:'Imagine a closed mystery box. Say what might be inside. Make it clear you are not sure.',frame:'It might be …, but …',checks:['Might + base verb be','A possibility, not a certainty'],model:'It might be a toy, but I am not sure.'},
 {title:'Rule out an idea',prompt:'Use a clue to explain why an object cannot be something.',frame:'It can’t be … because …',checks:['Can’t be for a strong negative deduction','A clear clue or reason'],model:'It can’t be my bag because my bag is green.'}
];
