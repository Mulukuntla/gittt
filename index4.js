
function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/62f976690ee743a4bf2435978c7fd2fc/appointmentData",
        userDetails
      )
      .then((response) => {
        displayUserOnScreen(response.data)
        console.log(response.data)
      })
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  function displayUserOnScreen(userDetails) {
    if(userDetails.username.length===0 || userDetails.email.length===0 || userDetails.phone.length===0){
        deleteUser(userDetails._id)
        alert("enter all fields")
        return
    }
    
    const parentNode = document.getElementById("listOfUsers");
    const userItemHtml = `
    <li id="${userDetails._id}">
      ${userDetails.username} - ${userDetails.email} - ${userDetails.phone}
      <button onclick=deleteUser('${userDetails._id}')>Delete</button>
      <button onclick=editUser('${userDetails._id}','${userDetails.username}','${userDetails.email}','${userDetails.phone}')>Edit</button>
    </li>
  `
  parentNode.innerHTML += userItemHtml
  }
  function fetchAndDisplayUsers() {
    axios.get("https://crudcrud.com/api/62f976690ee743a4bf2435978c7fd2fc/appointmentData")
      .then((response) => {
        response.data.forEach(user => displayUserOnScreen(user));
      })
      .catch((error) => console.error("Error fetching users:", error));
  }
  document.addEventListener('DOMContentLoaded', function() {
    
    fetchAndDisplayUsers();
  });
  function deleteUser(userId) {
    axios.delete(`https://crudcrud.com/api/62f976690ee743a4bf2435978c7fd2fc/appointmentData/${userId}`)
    .then(response => {
      removeUserFromScreen(userId);
      
    })
    .catch(error => console.error('Error deleting user:', error));
  }
  
  // Function to remove a user from the screen
  function removeUserFromScreen(userId) {
    const parentNode = document.getElementById("listOfUsers");
    const childNodeToBeDeleted = document.getElementById(userId);
    if (childNodeToBeDeleted) {
      parentNode.removeChild(childNodeToBeDeleted);
    }
  }
  function editUser(userId,username,email,phone) {
    document.getElementById("username").value=username
    document.getElementById("email").value=email
    document.getElementById("phone").value=phone
    deleteUser(userId)
  
  }

  
  