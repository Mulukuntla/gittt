function handleFormSubmit(event){
  event.preventDefault();
  console.log('Hi');
  
 
  let namee=event.target.username.value;
  let emaill=event.target.email.value;
  let phonee=event.target.phone.value;
  localStorage.setItem('Username',namee)
  localStorage.setItem('Email',emaill)
  localStorage.setItem('Phone',phonee)
  
  
  let obj= {
    'username':namee,
    'email':emaill,
    'phone':phonee,
  }
  
  console.log(namee);
  console.log(emaill);
  console.log(phonee);
  console.log(obj);
  localStorage.setItem(obj.email,JSON.stringify(obj));
  
  const parent=document.getElementById('listOfItems');
  const child=document.createElement('li');
  child.textContent=`${obj.username} - ${obj.email} - ${obj.phone}`
  const deleteButton=document.createElement('button');
  const deleteText=document.createTextNode('delete');
  deleteButton.appendChild(deleteText)
  deleteButton.type='button'
  deleteButton.value='Delete'
  child.appendChild(deleteButton)
  parent.appendChild(child)
  deleteButton.onclick=()=>{
    localStorage.removeItem(obj.email);
    parent.removeChild(child)  
  }
  const editButton=document.createElement('button');
  const editText=document.createTextNode('edit');
  editButton.appendChild(editText)
  editButton.type='button'
  editButton.value='edit'
  child.appendChild(editButton)
  editButton.onclick=()=>{
    localStorage.removeItem(obj.email);
    parent.removeChild(child)  
    document.getElementById('username').value=obj.username
    document.getElementById('email').value=obj.email
    document.getElementById('phone').value=obj.phone
  }
  
  
  
  
  
}

module.exports=handleFormSubmit; 
