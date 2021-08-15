document.getElementById('login-submit').addEventListener('click',function(){

    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;

    // console.log(userEmail);


    
    // get user password
    const passField=document.getElementById('user-password');
    const userPass=passField.value;

    // console.log(userPass);

    // check email and password
    if(userEmail=="abc@gmail.com"&& userPass==12345){
        // console.log('valid user');
        window.location.href='banking.html';

    }
   
})




