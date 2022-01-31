var signupDataArr = JSON.parse(localStorage.getItem("Database")) || [] ;
document.querySelector("#form").addEventListener("submit", function(event){
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var mobile = document.querySelector("#mobile").value;
    var password = document.querySelector("#password").value;
    var name = document.querySelector("#name").value;
    
   var signupDataObj = {
       name: name,
       mail: email,
       phone:mobile,
       passcode: password

   }

const correct_Data = () =>{
    for(let key in signupDataObj){
        if(signupDataObj[key] == ""){
           return false;
            break;
        }
    }
}



if(correct_Data() == false){
    alert("Please fill All the Datails")
}
else{

    alert("Sing-up Successful")
      signupDataArr.push(signupDataObj);
     localStorage.setItem("Database",JSON.stringify(signupDataArr));
     window.location.href = "index.html"

}

 
   


    
   




    

  
 
})
