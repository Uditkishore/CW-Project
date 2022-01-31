

// Linking pages 

document.querySelector("#passivaji")
function mysivaji() {
  window.location.href = "page1(passport).html"
}

document.querySelector("#blogsuraj")
function mysuraj() {
  window.location.href = "blogsuraj.html"
}
document.querySelector("#walson")
function mywalson() {
  window.location.href = "sortingwalson.html"
}




// Targeting Loging Button

document.getElementById("loginButton").addEventListener("click", function () {
  document.querySelector(".loginContainer").style.display = "flex";
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".loginContainer").style.display = "none";
});



// Targeting Signup Submit Button

document.querySelector("#signupBtn").addEventListener("click", function () {
  window.location.href = "signup_page_udit.html";
})


// Targeting logup Submit Button

document.querySelector("#loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var loginInput = document.querySelector("#email").value;
  var loginPassword = document.querySelector("#password").value;

  // Getting Data From SignUP Page & Operations

  let data = JSON.parse(localStorage.getItem("Database"));

function login(){
    let x = false;
    data.map((el)=>{
       if(el.mail == loginInput && el.passcode == loginPassword){
          x = true;
       }
    })
  return x;
}

if(login() == true){

    alert("Login Success");
           document.querySelector(".loginContainer").style.display = "none";
          document.querySelector("#loginButton").textContent = "My Account ▼";
          document.querySelector("#loginButton").style.backgroundColor = "white";
          document.querySelector("#loginButton").style.color = "black";
}else{
    alert("Username & Password Incorrect ")
}

});

// Best Offer Image Section

var BestOfferDataArr = [];

var BestOfferfDataObj = {
  image1: "https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-medium",
  image2: "https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-medium",
  image3: "https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/15offid.png?tr=tr:n-medium",
  image4: "https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/10offid.png?tr=tr:n-medium"
}
BestOfferDataArr.push(BestOfferfDataObj);
BestOfferDataArr.map(function (elem) {
  var div1 = document.createElement("div");
  var img1 = document.createElement("img");
  img1.setAttribute("src", elem.image1);
  div1.append(img1);
  var div2 = document.createElement("div");
  var img2 = document.createElement("img");
  img2.setAttribute("src", elem.image2);
  div2.append(img2)
  var div3 = document.createElement("div");
  var img3 = document.createElement("img");
  img3.setAttribute("src", elem.image3);
  div3.append(img3)
  var div4 = document.createElement("div");
  var img4 = document.createElement("img");
  img4.setAttribute("src", elem.image4);
  div4.append(img4)
  var container = document.querySelector("#BestOfferImage");
  container.append(div1, div2, div3, div4);
});