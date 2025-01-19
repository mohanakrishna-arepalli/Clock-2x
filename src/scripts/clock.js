function updateClock() {
    const now = new Date();
    let realHours = now.getHours();
    let realMinutes = now.getMinutes();
    let realSeconds = now.getSeconds();
    
    // Calculate total time in seconds from midnight
    let totalRealSeconds = realHours * 3600 + realMinutes * 60 + realSeconds;

    // Double the time progression (2x speed)
    let doubleTimeInSeconds = (totalRealSeconds * 2) % (24 * 3600); // Wrap within 24 hours

    // Calculate hours, minutes, and seconds for 2x time
    let doubledHours = Math.floor(doubleTimeInSeconds / 3600);
    let doubledMinutes = Math.floor((doubleTimeInSeconds % 3600) / 60);
    let doubledSeconds = doubleTimeInSeconds % 60;

    // Format time with leading zeros
    let hours = doubledHours.toString().padStart(2, '0');
    let minutes = doubledMinutes.toString().padStart(2, '0');
    let seconds = doubledSeconds.toString().padStart(2, '0');

    // Display the time
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update every 500ms to simulate 2x faster time
setInterval(updateClock, 500);
updateClock(); // Initial call
