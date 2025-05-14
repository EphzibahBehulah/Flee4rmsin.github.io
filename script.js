function logMood(mood) {
  const log = {
    mood: mood,
    time: new Date().toLocaleString()
  };

  let logs = JSON.parse(localStorage.getItem("moodLogs")) || [];
  logs.push(log);
  localStorage.setItem("moodLogs", JSON.stringify(logs));

  displayHistory();
}

function displayHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = "";

  let logs = JSON.parse(localStorage.getItem("moodLogs")) || [];
  logs.forEach(entry => {
    const p = document.createElement("p");
    p.textContent = `${entry.time}: ${entry.mood}`;
    historyDiv.appendChild(p);
  });
}

// Load on page load
displayHistory();