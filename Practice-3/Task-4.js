console.log("Task №4");
const dog = {
    sound: "bark",
    greet: () => {
        setTimeout(() => {
            console.log(this.sound);
        }, 0);
    },
};

// Call the function
dog.greet();