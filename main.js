// Function to prompt the user for task details and return a task object
function getTask(taskNumber) {
  const task = {};

  // Prompt for task title
  task.title = prompt(`Enter title for Task ${taskNumber}:`);
  // Prompt for task description
  task.description = prompt(`Enter description for Task ${taskNumber}:`);

  // Loop until a valid status is entered
  while (true) {
    let statusInput = prompt(`Enter status for Task ${taskNumber} (todo, doing, done):`);
    if (!statusInput) continue; // If input is empty, prompt again

    const normalizedStatus = statusInput.toLowerCase();

    // Check if the entered status is valid
    if (["todo", "doing", "done"].includes(normalizedStatus)) {
      task.status = normalizedStatus;
      break; // Exit loop if valid
    } else {
      alert("❗ Invalid status. Please enter 'todo', 'doing', or 'done'!.");
    }
  }

  return task; // Return the created task object
}

// Function to handle entry and display of two tasks
function handleTaskEntry() {
  const task1 = getTask(1); // Get first task from user
  const task2 = getTask(2); // Get second task from user
  const tasks = [task1, task2]; // Store tasks in an array

  console.log("Task Entries:");
  // Display all entered tasks
  tasks.forEach((task, index) => {
    console.log(
      `Task ${index + 1} → Title: ${task.title}, Description: ${task.description}, Status: ${task.status}`
    );
  });

  // Filter tasks that are completed (status is "done")
  const completedTasks = tasks.filter(task => task.status === "done");

  if (completedTasks.length > 0) {
    console.log("Completed Tasks:");
    // Display completed tasks
    completedTasks.forEach(task => {
      console.log(`Title: ${task.title}, status: ${task.status}`);
    });
  } else {
    // If no tasks are completed
    console.log("No tasks completed, let's get to work!");
  }
}

// Run handleTaskEntry when the window loads
window.onload = handleTaskEntry;
