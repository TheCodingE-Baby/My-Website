// Function to display a greeting based on the time of day
function displayGreeting(hours) {
    
    if (hours < 12) {
        return 'Good Morning';
    } else if (hours < 18) {
       return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}

// Function to display the current time
const button= document.getElementById('show-clock');
    
  
    button.addEventListener('click', () => {
        const now = new Date();
        const hours = now.getHours();
        const time = now.toLocaleTimeString();
        const greeting = displayGreeting(hours);

        alert(`${greeting}, The current time is ${time}`);
     });

