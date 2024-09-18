
function updateDisplay(){
    document.getElementById('count').textContent = count;

}
function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/83c7885685af42da892b59cb4eac45c0/appointmentData",
        userDetails
      )
      .then((response) => {
        displayUserOnScreen(response.data)
        console.log(response.data)
        count++
        updateDisplay()
        

      })
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
  }
  
  function displayUserOnScreen(userDetails) {
    if(userDetails.username.length===0 || userDetails.phone.length===0 || userDetails.address.length===0){
        deleteUser(userDetails._id)
        alert("enter all fields")
        return
    }
    
    const parentNode = document.getElementById("listOfUsers");
    const userItemHtml = `
    <li id="${userDetails._id}">
      ${userDetails.username} - ${userDetails.phone} - ${userDetails.address}
      <button onclick=deleteUser('${userDetails._id}')>Delete</button>
      <button onclick=editUser('${userDetails._id}','${userDetails.username}','${userDetails.phone}','${userDetails.address}')>Edit</button>
    </li>
  `
  parentNode.innerHTML += userItemHtml
  }
  function fetchAndDisplayUsers() {
    axios.get("https://crudcrud.com/api/83c7885685af42da892b59cb4eac45c0/appointmentData")
      .then((response) => {
        count=0
        response.data.forEach(user => {
            count++
            displayUserOnScreen(user)

            

        })
           
       
        updateDisplay()
      })
      .catch((error) => console.error("Error fetching users:", error));
  }
  document.addEventListener('DOMContentLoaded', function() {
    
    fetchAndDisplayUsers();
  });
  function deleteUser(userId) {
    axios.delete(`https://crudcrud.com/api/83c7885685af42da892b59cb4eac45c0/appointmentData/${userId}`)
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
      count--
      updateDisplay()
    }
  }
  function editUser(userId,username,phone,address) {
    document.getElementById("username").value=username
    document.getElementById("phone").value=phone
    document.getElementById("address").value=address
    deleteUser(userId)
    count--
    updateDisplay()
  
  }

  
  