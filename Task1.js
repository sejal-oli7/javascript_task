
main();

function main() {
    console.log("Conference Manager Started");
}



// TDZ
// try {
//     console.log(conferenceName);

//     let conferenceName = "Tech Conference";
// }
// catch (error) {
//     console.log(error.message);
// }


// array and objects 
const speakers = [
    {
        name: "Sejal Oli",
        fee: 1500
    },
    {
        name: "Asmi Pandey",
        fee: 1800
    },
    {
        name: "Aakriti Kandel ",
        fee: 1700
    },
    {
        name: "Prabhaw Soti ",
        fee: 1900
    },
];

console.table(speakers);


// spread  operator 
const vipSpeaker = {
    name: "Sejal Oli",
    fee: 5000
};

const allSpeakers = [...speakers, vipSpeaker];


console.table(allSpeakers);


// Rest Parameter
function calculateTotalFees(...fees) {

    let total = 0;

    for (let fee of fees) {
        total += fee;
    }

    return total;
}



// Get only fees
const fees = speakers.map(function (speaker) {
    return speaker.fee;
});


console.log(fees);

// Calculate total
const total = calculateTotalFees(...fees);

console.log("total:", total);

// Number Formatting
console.log("Formatted Total:", total.toFixed(5));


// #date 
 const today = new Date();

    const conferenceDate = new Date("2026-12-20");

    const difference = conferenceDate - today;

    const daysLeft = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    console.log("Days Until Conference:", daysLeft);


    
// array destructing

const [headliner1, headliner2] = allSpeakers;

console.log("\nTop Headliners");
console.log(headliner1.name);
console.log(headliner2.name);


// dry principle

function nameHelper(name){
    return name.toLowerCase();
}


// Debugging


debugger;

console.log("\nFinal Speaker Data");

console.table(allSpeakers);