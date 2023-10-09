console.log("Task №3");
const cat = {
    sound: "meow",
    greet: function () {
        setTimeout(() => {
            console.log(this.sound);
        }, 0);
    },
};

cat.greet(); // meow
