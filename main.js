const request = require('request-promise');
const colors = require('colors');
const readline = require('readline-promise').default
const getRaffles = require('./checkout/get_raffle/get_raffles');
const getRaffleDetails = require('./checkout/get_raffle/get_details');
const getToken = require('./checkout/enter/get_js_token');
const enterRaffle = require('./checkout/enter/enter');

const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

(async () => {
    global.counter = 0;
    global.amountOfRaffles = await rlp.questionAsync('How many raffle entries would you like to enter?\n'.cyan);

    console.log('Getting raffles...'.yellow);
    let raffleArr = await getRaffles();

    console.log('All active raffles:'.blue);
    raffleArr.forEach(element => {
        console.log(`${element.index + 1} - ${element.name}`.green);
    });

    let raffleIndex = await rlp.questionAsync('Please choose a raffle to enter.\n');
    let raffleToEnter = raffleArr.find((item) => item.index == parseInt(raffleIndex - 1));

    console.log(`Entering ${raffleToEnter.name}`.yellow);

    let raffleDetails = await getRaffleDetails(raffleToEnter.url);

    console.log('All sizes:'.blue);

    raffleDetails.sizes.forEach(element => console.log(`${element.index} - ` + element.value.green));

    let raffleSizeIndex = await rlp.questionAsync('Please choose a size.\n');
    console.log(`Entering with size ${raffleDetails.sizes[raffleSizeIndex - 1].value}`.yellow);

    console.log('Getting token...');
    let JStoken = await getToken(raffleDetails.nonce);
    console.log(`JS key: ${JStoken}`.cyan);

    for (var i = 0; i < parseInt(global.amountOfRaffles); i++){
        let enter = enterRaffle(raffleDetails.sizes[raffleSizeIndex - 1].value, raffleDetails, JStoken)
    };
})();