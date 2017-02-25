module.exports = {
    print: function () {
        console.log("Isn't this just the coolest thing.");
    },
    log: function (message) {
        console.log("Consoller log: ", message);
    },
    error: function (message) {
        console.log(`Consoller error: *** ${message.toUpperCase()} ***`);
    }
}