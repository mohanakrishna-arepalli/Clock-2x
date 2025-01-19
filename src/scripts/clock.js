function updateClock() {
    const now = new Date();
    let realHours = now.getHours();
    let realMinutes = now.getMinutes();
    let realSeconds = now.getSeconds();
    
    // Calculate the elapsed time from midnight in seconds
    let totalRealSeconds = realHours * 3600 + realMinutes * 60 + realSeconds;
    
    // Double the time (2x faster)
    let totalDoubleSeconds = (totalRealSeconds * 2) % (24 * 3600); // Modulo to wrap around 24 hours

    // Convert back to hours, minutes, and seconds
    let hours = Math.floor(totalDoubleSeconds / 3600);
    let minutes = Math.floor((totalDoubleSeconds % 3600) / 60);
    let seconds = totalDoubleSeconds % 60;

    // Format time
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Display time
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update every 500ms (half second) to reflect 2x speed progression
setInterval(updateClock, 500);
updateClock(); // Initial call
