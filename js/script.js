// function to validate the job application form
function checkForm() {

  // resets all errors to default conditions
   document.getElementById("errorName").innerHTML = "";
   document.getElementById("errorEmail").innerHTML = "";
   document.getElementById("errorInfo").innerHTML = "";
   document.getElementById("errorNumber").innerHTML = "";

   


  theForm = document.forms["myForm"];
  
  // retreives name from the Form
  myname = theForm.elements["name"];
  // retreives email from the Form
  myemail = theForm.elements["email"];
    // retreives message from the Form
  myinfo = theForm.elements["info"];

    // retreives number from the Form
  mynumber = theForm.elements["info"];


  
  // check if the name is entered
  if (myname.value == "") {
     document.getElementById("errorName").innerHTML = "*Please enter your name!";
  } // end of if
  
  // check if the email is entered
  if (myemail.value == "") {
     document.getElementById("errorEmail").innerHTML = "*Please enter your email!";
  } // end of if
    
    // check if the message is entered
  if (myinfo.value == "") {
     document.getElementById("errorInfo").innerHTML = "*Please enter your Message!";
  } // end of if
  
      // check if the message is entered
  if (myinfo.value == "") {
     document.getElementById("errorNumber").innerHTML = "*Please enter your Number!";
  } // end of if


  
  






} // end of function