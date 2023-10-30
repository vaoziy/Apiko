function clock() {
    const interval = setInterval(() => {
        const date = new Date();
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }, 1000);

    return () => clearInterval(interval);
}

clock();
setTimeout(clock(), 5000); // зупиняє таймер через 5 секунд
