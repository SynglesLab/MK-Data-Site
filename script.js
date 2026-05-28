document.getElementById("dataForm").addEventListener("submit", function(e) {

e.preventDefault();

let network = document.getElementById("network").value;
let bundle = document.getElementById("bundle").value;
let phone = document.getElementById("phone").value;
let reference = document.getElementById("reference").value;

let message =
"🔥 NEW ORDER 🔥\n\n" +
"Network: " + network + "\n" +
"Bundle: " + bundle + "\n" +
"Phone: " + phone + "\n" +
"Reference: " + reference;

fetch("https://api.telegram.org/bot8556688543:AAGYOwyjJGED3PK9ab0quItrbS62opHX7qc/sendMessage", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
chat_id: "7428399196",
text: message
})

})

.then(function(response){
return response.json();
})

.then(function(data){

document.getElementById("status").innerHTML =
"✅ Thank you! Your order has been received.";

alert("Order Sent Successfully!");

document.getElementById("dataForm").reset();

console.log(data);

})

.catch(function(error){

document.getElementById("status").innerHTML =
"❌ Error sending order.";

console.log(error);

});

});