function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Double the time (2x faster)
    hours = ((hours * 2)+1)% 24;
    minutes = (minutes * 2) % 60;
    seconds = (seconds * 2) % 60;

    // Format time
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Display time
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update every 500ms (half second) to make it run 2x faster
setInterval(updateClock, 500);
updateClock(); // Initial call
