
const copyEmailButton = document.getElementById('copy_email_button');

copyEmailButton.addEventListener('click',() =>{
    navigator.clipboard.writeText('parnianheydari83@gmail.com')
    alert('Email copied successfully!')
})
   


