export const startCountdown = (endDate, setTimeData, refs) => {
    const {
        daysRef, hoursRef, minutesRef, secondsRef,
        dayDotRef, hourDotRef, minDotRef, secDotRef
    } = refs;

    const x = setInterval(() => {
        const now = Date.now();
        const endTime = new Date(endDate).getTime();
        const distance = endTime - now;

        if (distance < 0) {
            clearInterval(x);
            setTimeData({
                days: "0",
                hours: "00",
                minutes: "00",
                seconds: "00"
            });

            daysRef.current.style.strokeDashoffset = 440;
            hoursRef.current.style.strokeDashoffset = 440;
            minutesRef.current.style.strokeDashoffset = 440;
            secondsRef.current.style.strokeDashoffset = 440;

            dayDotRef.current.style.transform = hourDotRef.current.style.transform =
                minDotRef.current.style.transform = secDotRef.current.style.transform = `rotateZ(0deg)`;
        } else {
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeData({
                days: `${d}`,
                hours: `${h < 10 ? '0' + h : h}`,
                minutes: `${m < 10 ? '0' + m : m}`,
                seconds: `${s < 10 ? '0' + s : s}`
            });

            daysRef.current.style.strokeDashoffset = 440 - (440 * d) / 365;
            hoursRef.current.style.strokeDashoffset = 440 - (440 * h) / 24;
            minutesRef.current.style.strokeDashoffset = 440 - (440 * m) / 60;
            secondsRef.current.style.strokeDashoffset = 440 - (440 * s) / 60;

            dayDotRef.current.style.transform = `rotateZ(${d * 0.986}deg)`;
            hourDotRef.current.style.transform = `rotateZ(${h * 15}deg)`;
            minDotRef.current.style.transform = `rotateZ(${m * 6}deg)`;
            secDotRef.current.style.transform = `rotateZ(${s * 6}deg)`;
        }
    }, 1000);
};
