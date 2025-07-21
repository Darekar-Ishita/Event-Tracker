let memberCount = 1;
const maxMembers = 4;

const addMemberBtn = document.getElementById("addMemberBtn");
const memberInputs = document.getElementById("memberInputs");
const form = document.getElementById("form");
const message = document.getElementById("message");

// Add Participant Input
addMemberBtn.addEventListener("click", () => {
  if (memberCount >= maxMembers) {
    alert("Maximum of 4 participants allowed!");
    return;
  }

  memberCount++;
  const input = document.createElement("input");
  input.type = "text";
  input.name = "member";
  input.placeholder = `Participant ${memberCount} Name`;
  input.required = true;
  memberInputs.appendChild(input);
});

// Form Submit Handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const members = Array.from(document.querySelectorAll('input[name="member"]'))
    .map(input => input.value.trim())
    .filter(name => name !== "");

  const competitions = Array.from(document.querySelectorAll('input[name="competition"]:checked'))
    .map(cb => cb.value);

  if (members.length === 0) {
    message.style.color = "red";
    message.textContent = "Please add at least one participant.";
    return;
  }

  if (competitions.length === 0) {
    message.style.color = "red";
    message.textContent = "Please select at least one competition.";
    return;
  }

  message.style.color = "#28a745";
  message.innerHTML = `
    ✅ Form submitted successfully!<br>
    Team registered with <strong>${members.length}</strong> member(s) for: <strong>${competitions.join(", ")}</strong>.
  `;

   //Optional: Reset form after submission
   form.reset();
   memberInputs.innerHTML = '<input type="text" name="member" placeholder="Participant 1 Name" required />';
   memberCount = 1;
});