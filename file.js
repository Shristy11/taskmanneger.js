const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_element = document.querySelector("#tasks");
  const sidebar_list = document.querySelector("#task_heading");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("content");

    task_element.appendChild(task_content_element);

    const task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.value = task;
    task_input_element.setAttribute("readonly", "readonly");

    const sidebar_element = document.createElement("input");
    sidebar_element.classList.add("text");
    sidebar_element.type = "text";
    sidebar_element.value = task;
    sidebar_element.setAttribute("readonly", "readonly");

    sidebar_list.appendChild(sidebar_element);

    task_content_element.appendChild(task_input_element);

    const task_actions_element = document.createElement("div");
    task_actions_element.classList.add("actions");

    const task_edit_element = document.createElement("button");
    task_edit_element.classList.add("edit");
    task_edit_element.innerText = "Edit";

    const task_delete_element = document.createElement("button");
    task_delete_element.classList.add("delete");
    task_delete_element.innerText = "Delete";

    task_actions_element.appendChild(task_edit_element);
    task_actions_element.appendChild(task_delete_element);

    task_element.appendChild(task_actions_element);

    list_element.appendChild(task_element);

    input.value = "";

    task_edit_element.addEventListener("click", (e) => {
      if (task_edit_element.innerText.toLowerCase() == "edit") {
        task_edit_element.innerText = "Save";
        task_input_element.removeAttribute("readonly");
        task_input_element.focus();
      } else {
        task_edit_element.innerText = "Edit";
        task_input_element.setAttribute("readonly", "readonly");
        sidebar_element.value = task_input_element.value; // Save edited task in sidebar
      }

    });

    task_delete_element.addEventListener("click", (e) => {
      list_element.removeChild(task_element);
      sidebar_list.removeChild(sidebar_element);
    });
  });
  window.addEventListener("load", () => {
  const openModalBtn = document.getElementById("open-modal-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modal = document.getElementById("task-modal");
  const formModal = document.getElementById("new-task-form-modal");
  const inputModal = document.getElementById("new-task-input-modal");
  const list_element = document.getElementById("tasks");
  const sidebar_list = document.getElementById("task_heading");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    inputModal.value = ""; // Reset the input when closing the modal
  }

  // Event listeners for opening and closing the modal
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

  // Event listener for form submission in the modal
  formModal.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = inputModal.value;

    if (task.trim() !== "") {
      const task_element = document.createElement("div");
      task_element.classList.add("task");

      const task_content_element = document.createElement("div");
      task_content_element.classList.add("content");

      task_element.appendChild(task_content_element);

      const task_input_element = document.createElement("input");
      task_input_element.classList.add("text");
      task_input_element.type = "text";
      task_input_element.value = task;
      task_input_element.setAttribute("readonly", "readonly");

      const sidebar_element = document.createElement("input");
      sidebar_element.classList.add("text");
      sidebar_element.type = "text";
      sidebar_element.value = task;
      sidebar_element.setAttribute("readonly", "readonly");

      sidebar_list.appendChild(sidebar_element);

      task_content_element.appendChild(task_input_element);

      const task_actions_element = document.createElement("div");
      task_actions_element.classList.add("actions");

      const task_edit_element = document.createElement("button");
      task_edit_element.classList.add("edit");
      task_edit_element.innerText = "Edit";

      const task_delete_element = document.createElement("button");
      task_delete_element.classList.add("delete");
      task_delete_element.innerText = "Delete";

      task_actions_element.appendChild(task_edit_element);
      task_actions_element.appendChild(task_delete_element);

      task_element.appendChild(task_actions_element);

      list_element.appendChild(task_element);

      closeModal(); // Close the modal after adding a new task
    }
  });
});
