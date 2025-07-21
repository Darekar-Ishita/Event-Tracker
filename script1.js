
// Poll options
const options = ["Creative Writing", "Robo War", "Gaming Tournament", "Poster Presentation"];
const votes = [30, 10, 40, 20];
let hasVoted = false;

// Called when a user clicks an option
function vote(index) {
  if (hasVoted) {
    alert("You have already voted!");
    return;
  }

  votes[index]++;
  hasVoted = true;
  showResults();
}

// Updates the poll results display
function showResults() {
  const totalVotes = votes.reduce((a, b) => a + b, 0);
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  options.forEach((option, i) => {
    const percentage = totalVotes > 0 ? ((votes[i] / totalVotes) * 100).toFixed(1) : 0;

    const resultItem = document.createElement("div");
    resultItem.style.marginBottom = "16px";

    const label = document.createElement("strong");
    label.textContent = option;
    label.style.color = "white";

    const bar = document.createElement("div");
    bar.className = "result-bar";
    bar.style.width = `${percentage}%`;
    bar.style.height = "20px";
    bar.style.backgroundColor = "#4caf50";
    bar.style.borderRadius = "5px";
    bar.style.marginTop = "5px";

    const percentageText = document.createElement("span");
    percentageText.className = "percentage";
    percentageText.style.color = "white";
    percentageText.textContent = `${percentage}% (${votes[i]} vote${votes[i] !== 1 ? 's' : ''})`;

    resultItem.appendChild(label);
    resultItem.appendChild(bar);
    resultItem.appendChild(percentageText);

    resultsDiv.appendChild(resultItem);
  });
}