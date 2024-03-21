const input = document.getElementById("input");
const output = document.getElementById("output");

const FIRST_VISIT_KEY = "firstVisit";

if (!localStorage.getItem(FIRST_VISIT_KEY)) {
  document.querySelector(".welcome-message").classList.add("show-welcome-message");
  localStorage.setItem(FIRST_VISIT_KEY, true);
}


function updatePrompt() {
  const currentValue = input.value || "";
  input.placeholder = `Enter command... (${currentValue})`;
}

function processCommand(command) {
  switch (command) {
    case "clear":
      output.innerHTML = "";
      break;
    case "help":
      help();
      break;
    case "greet":
      greetUser();
      break;
    case "whoami":
      whoami();
      break;
    case "cv":
      cv();
      break;
    case "work":
      work();
      break;
      case "currentproject":
        currentproject();
        break;
    default:
      output.innerHTML += `echo: Unknown command\n`;
  }
}
function help() {
  output.innerHTML += `clear - clears the terminal window\n`;
  output.innerHTML += `whoami - details about me :)\n`;
  output.innerHTML += `work - information about my work history\n`;
  output.innerHTML += `cv - pdf download for my cv\n`;
}
function greetUser() {
  output.innerHTML += `Hello, welcome to the interactive shell! type "help" to see a list of commands!\n`;
}

function currentproject() {
  output.innerHTML += `Hello, welcome to the interactive shell! type "help" to see a list of commands!\n`;
}
function whoami() {
  output.innerHTML += `hi, my name is tom and i am a 25 year old software developer living in trondheim\n`;
}

function work() {
  output.innerHTML += `i am currently employed as a system engineer and use the following technologies:\n`;
  output.innerHTML += `scripting languages - batch / python / js / ahk\n`;
  output.innerHTML += `database - mongodb / sql\n`;
  output.innerHTML += `containers - docker / kubernetes\n`;
  output.innerHTML += `unix based devices\n`;
  output.innerHTML += `powerbi\n`;
}

function cv() {
  const output = document.getElementById('output');
  output.innerHTML = '<a href="files/twbcv.pdf" target="_blank">Download File</a>';
}

function handleInput(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const command = input.value.trim();
    if (!command) return;

    output.innerHTML += `> ${command}\n`;
    processCommand(command);

    // Add this line to update the prompt before clearing the input value
    updatePrompt();

    input.value = "";
  } else if (event.key !== "Tab") {
    updatePrompt();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("keydown", handleInput);
  input.addEventListener("focusout", updatePrompt);
});