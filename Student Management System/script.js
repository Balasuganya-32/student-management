function addStudent() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  if (name === "" || email === "" || phone === "" || course === "") {
    alert("Please fill all fields");
    return;
  }

  const table = document.getElementById("studentTable");
  const row = table.insertRow();

  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${course}</td>
    <td>
      <button class="action-btn delete-btn" onclick="deleteRow(this)">
        Delete
      </button>
    </td>
  `;

  document.getElementById("studentForm").reset();
}

function deleteRow(button) {
  button.parentElement.parentElement.remove();
}