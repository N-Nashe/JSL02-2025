# JSL02 Project Brief: Task Input and Status Validation System

## Overview

This project involves implementing a JavaScript-based task entry system where users can input two tasks with complete details, ensuring data consistency and validation. The system will guide users through entering valid task titles, descriptions, and statuses, enforcing correct formatting while maintaining code clarity and maintainability.

## Key Objectives

- To ensure users have a valid, interactive and usable task entry system
- To ensure that the system works as described in the overview
- To ensure no console errors
- To ensure my code across all files makes sense and is detailed with comments to better guide users

### Logic & User Interaction

- Ensure the JavaScript file is correctly linked to the HTML document.
- Prompt the user to enter details (title, description, status) for two separate tasks and store them in variables.
- Convert all status inputs to lowercase automatically for consistency.
- Validate the status input to allow only "todo", "doing", or "done" and repeatedly prompt the user until a valid status is entered.
- Display the title and status of completed tasks (status: "done") in the console.
- If no tasks are marked as "done", show a motivational message in the console: "No tasks completed, let's get to work!".

## Code Quality & Maintainability

- Use descriptive variable names to enhance readability and maintainability.
- Include clear comments explaining complex logic and functionality for easier understanding.

## Expected Outcome

A functional task entry system that ensures accurate data collection, validation, and structured storage while maintaining clean and well-documented code for easy future modifications.

**Prompt Input Example**

- The program must prompt users for task 1 title, descrition and status inputs, it must do the same for task 2 information

  ![title prompt](./explainer-images/title%20prompt.png)

**Invalid status**

- If the user enters a status other than `todo`, `doing` or `done`, the program must alert the user of this and return to prompting them to enter a status.

  ![invalid status](./explainer-images/invalid%20status.png)

**Console log**

- When there is a completed task:

  ![invalid status](./explainer-images/completed%20task%20log.png)

- When there are no completed tasks:

  ![invalid status](./explainer-images/no%20completed%20tasks%20log.png)


**How to view the output**

- Right-click in the website and click inspect
- Afterwards go to console next to lighthouse where you can view your input and what you have entered
- Once satisfied click on the "x" in the right corner of the Dev tools and close the console to go back to the desktop view
