const form = document.querySelector('form');
  
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.name = 'description';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Enter fruit description';
const button = document.querySelector('#Add');
form.insertBefore(descriptionInput, button);

// Show the fruit description in italics on the next line
const li=document.querySelector('li')
const arr=new Array("King of fruits","tropical","orange","King of fruits")
let count=0
document.querySelectorAll('.fruit').forEach(li => {
  const fruit=document.createElement('p')
  const fruitDes=document.createTextNode(arr[count])
  count=count+1
  fruit.className='fruitDescription'
  
  fruit.appendChild(fruitDes)
  fruit.style.fontStyle='italic'
  
  li.appendChild(fruit)
  
});


// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById('filter');
filter.addEventListener('keyup', function(event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.querySelectorAll('.fruit');

  fruitItems.forEach(fruitItem => {
    const fruitName = fruitItem.firstChild.textContent.toLowerCase(); // Get the text content of the fruit name
    const fruitDescription = fruitItem.querySelector('.fruitDescription') 
                              ? fruitItem.querySelector('.fruitDescription').textContent.toLowerCase() 
                              : ''; // Get the text content of the fruit description, if it exists

    if (fruitName.includes(textEntered) || fruitDescription.includes(textEntered)) {
      fruitItem.style.display = 'flex'; // Show the fruit item if it matches the filter text
    } else {
      fruitItem.style.display = 'none'; // Hide the fruit item if it doesn't match the filter text
    }
  });
});