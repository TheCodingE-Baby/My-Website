function greetingFromClock() {
    if (hours < 12)  return "🌅 Good Morning";
    else if (hours < 18) return "🌞 Good Afternoon";
    else return "🌆 Good Evening";
}

function digitalClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const greeting = greetingFromClock(hours);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('greeting').textContent = greeting;
}

document.addEventListener('DOMContentLoaded', () => {
    digitalClock();
    setInterval(digitalClock, 1000);

    const btn = document.getElementById('show-clock-btn');
    const container = document.getElementById('clock-container');
btn.addEventListener('click', () => {
    const greetingContainer = document.getElementById('greeting-container');
    if (greetingContainer.style.display === 'none' || !greetingContainer.style.display) {
        greetingContainer.style.display = 'block';
        greetingContainer.style.animation = 'fadeIn 0.6s ease-out';

    } else {
        greetingContainer.style.display = 'none';
    }
});
});