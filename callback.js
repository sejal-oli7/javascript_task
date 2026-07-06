// Callback function
function printDateTime(name) {
    console.log(name + " - " + new Date());
}

// Function to perform the operation
function operation(interval, exitTime, callback, name) {

    let startTime = Date.now();
    let printTime = startTime;

    while (true) {

        let currentTime = Date.now();

        if (currentTime - printTime >= interval) {

            callback(name);   // Pass the name to the callback

            printTime = currentTime;
        }

        if (currentTime - startTime >= exitTime) {
            console.log("Program Stopped");
            break;
        }
    }
}

// Function Call
operation(2000, 10000, printDateTime, "Sejal Oli");

