function getTask(taskNumber) {
  const task = {};

  task.title = prompt(`Enter title for Task ${taskNumber}:`);
  task.description = prompt(`Enter description for Task ${taskNumber}:`);

  while (true) {
    let  statusInput = prompt(`Enter status for Task ${taskNumber} (todo, doing, done):`);
    if (!statusInput) continue;

    const normalizedStatus = statusInput.toLowerCase();

    if (["todo", "doing", "done"].includes(normalizedStatus)) {
      task.status = normalizedStatus;
      break;
    } else {
      alert("❗ Invalid status. Please enter 'todo', 'doing', or 'done'.");
    }
  }

  return task;
}

