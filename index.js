document.querySelectorAll('.fruit').forEach(li => {
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    li.appendChild(editBtn);
  });
  
  // Implement the code as in video but with one extra 'Edit' button in 'li'
  
  
  
  document.querySelector('.fruits').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      event.target.parentElement.remove(); // Remove the list item
    }
  });
  
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const fruitInput = document.getElementById('fruit-to-add');
    const fruitName = fruitInput.value.trim();
    
    if (fruitName) {
      const ul = document.querySelector('.fruits');
      const li = document.createElement('li');
      li.className = 'fruit';
      li.innerHTML = `
        ${fruitName}
        <button class="delete-btn">x</button>
        <button class="edit-btn">Edit</button>
      `;
      ul.appendChild(li);
      fruitInput.value = ''; // Clear the input field
    }
  });