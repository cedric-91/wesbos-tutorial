// Select all the list on the page and convert to an array
const items = Array.from(document.querySelectorAll('[data-time]'));

// Filter for only the elements that contain the word 'flexbox'
const filtered = items
  .filter(item => item.textContent.includes('Flexbox'))
  // map down to a list of time strings
  .map(item => item.dataset.time) // data-time
  // map to an array of seconds
  .map(timecode => {
    const parts = timecode.split(':').map(part => parseFloat(part)); // Convert to a number
    return (parts[0] * 60) + parts[1];
  })
  // Reduce to get total
  .reduce((runningTotal, seconds) => runningTotal + seconds, 0);
