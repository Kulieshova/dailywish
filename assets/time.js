var day_i;
const prediciton = ["Кицю, от тепер ти і став  ̶с̶т̶а̶р̶и̶м̶ дорослим! :) За ці 18 років ти багато чого вже зробив та досяг (більше, ніж більшість людей зроблять за все своє життя), але я знаю, що ти навіть не думаєш здаватись.  Це правильно. Я не моду уявити що було б зі мною, якби я тебе не зустріла більше ніж два роки тому у Києві. І хоч у нас бувають дуже складні періоди, я неймовірно вдячна тобі за все, що ти для мене зробив і провожуєш робити. Я тебе неймовріно ціную, кохаю та поважаю. Сподіваюсь, що цей невеличкий подарунок зможе хоч трішки підняти тобі настрій! У мене ще є дущо для тебе, але це я зможу віддати лише тоді, коли зустріну тебе у реальному житті :) А поки, хочу побажати тобі натхнення, наснаги, здоров’я, любові, радощі та усього-усього найкращого! Я тебе кохаю. З твоїм днем, Васюню<3", 
"Я тебе безмежно кохаю, пам'ятаю це. Посміхайся. Радій. Смійся. Танцюй. Співай. Кохай. Насолоджуйся життям.", 
"Пам'ятай, що у тебе все вийде. Ти переможець! Гарного дня!", 
"До зустрічі, коханий, я писатиму, і ти мені пиши.❤️ ", 
"Уже мрію про наш багатомільйонний будинок і тваринок, яких ми будемо мати. Any ideas?:)",
"I wish you a great day fullfield with awesome news, happiness, and excitement!:)",
"I love you, have a cupcake:)",
"Maybe a walk outside could be nice? Here are some song recommendations for your walk: B.o.B. - so good",
"I hope you have a nice a day and you smile a lot!!!",
"Go little rockstar!",
"What was the best thing that happend to you today?",
"You go big London boy!",
"Уже не можу дочекатись наших каддлз",
"Let's create the best life for us",
"Гарного дня, кицю. Я тебе кохаю<3",
"Нехай сьогоднішній день буде неймовірно позитивний, легкий, продуктивний та замурчательний.",
"Майже два роки разом. ВАУ!",
"Happy anniversary, my love! Хоча у нас були труднощі останнім часом, я неймовірно рада, що ми змогли їх подолати та йти далі. Я тебе нейморвіно кохаю, Васюню, і я бажаю усього найкращого. Уже не можу дочекатись, коли ми будемо жити разом у великому будинку десь у Каліфорнії та насолоджуватись одним одним.",
"Уже через кілька років ми будемо одружені, жити у найафігєнніщому будинку з песиком та котеням",
"Кошеня, я тобою пишаюсь!",
"У тебе все вийде, коханий",
"You can do anything, my little star"
];

var today = new Date();

var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

function getNumberOfDays(end) {
    const date1 = new Date('1/14/2022');
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

day_i = getNumberOfDays(date);


document.getElementById('wish').innerHTML = prediciton[day_i];
