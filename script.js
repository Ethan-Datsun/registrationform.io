

function resetFields(){
    document.getElementById('signup-form-id').reset()
}

function validate(){

    let error = false
    
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let passwordInput = document.getElementById('password-input').value
    let confirmPassword = document.getElementById('confirm-password').value
    let tnC = document.getElementById('t-and-c').checked

    if(firstName.length >= 3){
        document.getElementById('first-name-invalid').style.display = "none"
    }  else {
        error = true
        document.getElementById('first-name-invalid').style.display = "block"
    }

    
    if(lastName.length >= 3){
        document.getElementById('last-name-invalid').style.display = "none"
    }  else {
        error = true
        document.getElementById('last-name-invalid').style.display = "block"
    }

    if (
        email.includes("@") && 
        email.includes(".") && 
        email.indexOf("@") > 0 &&
        email.substr(email.lastIndexOf('.') + 1).length >= 2
    ) {
        document.getElementById("email-invalid").style.display = "none";
    } else {
        error = true
        document.getElementById("email-invalid").style.display = "block";
    }

    if(passwordInput.length > 6 &&
        (passwordInput.includes('$') ||  passwordInput.includes('#') ||  passwordInput.includes('@') ) &&
        (passwordInput.includes('0') ||  passwordInput.includes('1') ||  passwordInput.includes('2') || passwordInput.includes('3')  | passwordInput.includes('4') )

    ){
        document.getElementById('invalid-password').style.display = "none"
    } else{
        document.getElementById('invalid-password').style.display = "block"
        error = true
    }

    if(confirmPassword != passwordInput){  
        error = true  
        document.getElementById('confirm-password-invalid').style.display = "block";}
    else 
        document.getElementById('confirm-password-invalid').style.display = "none";

    
        if(tnC){
            document.getElementById('tNC-invalid').style.display = 'none'
        } else{
            error=true
            document.getElementById('tNC-invalid').style.display = 'block'
        }

    // console.log(firstName,lastName,email,passwordInput,confirmPassword,tnC)
        
            if(error == false){
                alert('Your details have been saved successfully!')
                resetFields()
            }

}