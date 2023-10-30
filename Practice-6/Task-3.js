function timer(seconds) {
    const interval = setInterval(() => {
        seconds--;
        console.log(`Timer: ${seconds}`);
        if (seconds <= 0) {
            clearInterval(interval);
        }
    }, 1000);

    return () => clearInterval(interval);
}

timer(5);
setTimeout(timer(5), 5000); // зупиняє таймер через 5 секунд
