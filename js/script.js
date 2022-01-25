var allitems = document.querySelectorAll('.list li')
// console.log(allitems);
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart");
var totalPrice = 0;
var text = document.getElementById("text")

allitems.forEach(function(item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute('price'))
        // content.innerHTML = item.textContent
        content.innerHTML += item.textContent + " ";
        if(content.innerHTML != ''){
            btn.style.display = "block"
        }
    }
})
btn .onclick = function(){
    console.log(totalPrice)
}