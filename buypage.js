
  var obuject=JSON.parse(localStorage.getItem("mylocal"))
console.log(obuject)
var chithra=document.getElementById("a1").childNodes[0]
document.getElementById("a1").childNodes[0].setAttribute("src",obuject.img)
document.getElementById("a1").childNodes[0].setAttribute("src",obuject.img)
chithra.setAttribute("class","chithra")
var vichithra=document.getElementById("a2")
var div1=document.createElement("div")
var div2=document.createElement("div")

var heading=document.createElement("h1")
heading.innerHTML=obuject.name
var price=document.createElement("p")
price.innerHTML=obuject.price +" Rs. aproximately"
var cusine=document.createElement("p")
cusine.innerHTML=obuject.type
var place=document.createElement("p")
place.innerHTML="Place:  "+obuject.place
var time=document.createElement("p")
var rating=document.createElement("p")
rating.innerHTML=obuject.rating
time.innerHTML="Available time is 12AM-12PM"
div2.append(price,cusine)
rating.marginLeft="30%"
div1.append(heading,rating)
vichithra.append(div1,div2,place,time)


var dat=document.getElementById("date")
for(i=1;i<32;i++)
{
 var list= document.createElement("li")
var button= document.createElement("button")
button.innerHTML=i
list.append(button)
dat.append(list)
}
vichithra.addEventListener("click",openpayment)
function openpayment(){
  window.location.href="payment.html"

}
