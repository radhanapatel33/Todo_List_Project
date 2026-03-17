//create a todo list.

function addTask() {                       
      let input = document.getElementById("taskInput");
      let taskName = input.value.trim();

      if (taskName === "") {
        alert("Please enter a task!");
        return;
      }

      if (!confirm("Do you want to add this task?")) {
        return;
      }

      let taskDiv = document.createElement("div");
      taskDiv.className = "task";

      // left side - task name
      let span = document.createElement("span");
      span.textContent = taskName;

      // right side - buttons
      let btnDiv = document.createElement("div");
      btnDiv.className = "buttons";

      let editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "editBtn";
      editBtn.onclick = function () {
        let newName = prompt("Enter new task name:", span.textContent);
        if (newName !== null && newName.trim() !== "") {
          span.textContent = newName.trim();
        }
      };

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "deleteBtn";
      deleteBtn.onclick = function () {
        if (confirm("Do you really want to delete this task?")) {
          taskDiv.remove();
        }
      };

      btnDiv.appendChild(editBtn);
      btnDiv.appendChild(deleteBtn);

      taskDiv.appendChild(span);
      taskDiv.appendChild(btnDiv);

      document.getElementById("taskList").appendChild(taskDiv);

      input.value = "";
    }