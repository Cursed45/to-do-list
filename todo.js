const inputBox = document.getElementById("items");
const listContainer = document.getElementById("Tasklist");

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("Please write something");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // Use textContent to set text directly
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Event listener for toggling task completion and deleting task
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save tasks to localStorage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML); // Store tasks HTML
}

// Function to load tasks from localStorage
function showTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks; // Restore saved tasks
    }
}

showTasks(); // Call the function to load tasks when the page loads
