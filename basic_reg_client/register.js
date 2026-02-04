console.log(axios);

document.addEventListener('DOMContentLoaded', function(){

    const registerForm = document.querySelector("#register-user");

    
    registerForm.addEventListener("submit", async function(event){
        event.preventDefault();

        let firstname = this.fname.value.trim();
        let lastname = this.lname.value.trim();
        let email = this.email.value.trim();
        let password = this.password.value.trim();


        if(firstname.length == 0 || lastname.length == 0 || email.length == 0 || password.length == 0){

            alert("All fields are required");

        }else{

            // send a request to the server
            let feedback = await axios.post("http://localhost:5353/register", {
                firstname: firstname, 
                lastname: lastname,
                password: password,
                email: email
            });

            console.log("Feedback --> ", feedback)


        }


    });


});