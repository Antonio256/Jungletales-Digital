const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
})

logo.addEventListener('click', () => {
    // alert('it works');
    window.location.href = "index.html";
})

//Validating the form

const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('text');
const msg = document.querySelector('.msg');
const success = document.querySelector('.success');


// Implement form
// form.addEventListener('submit', onSubmit);

// function onSubmit(e){
    
//     e.preventDefault();
//     // console.log(nameInput.value);

//     if(nameInput.value === "" || emailInput.value === "" || messageInput.value === ""){
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all Fields';

//         setTimeout( () => {
//             msg.remove()
//         }, 3000);

//     }else{
//         msg.classList.add('success');
//         msg.innerHTML = 'Thank You. We will review the submission soon.';

//         setTimeout( () => {
//             msg.remove()
//         }, 3000);

//         // Clear the fields
//         nameInput.value = "";
//         emailInput.value = "";
//         messageInput.value = "";
//     }
  
// } 
