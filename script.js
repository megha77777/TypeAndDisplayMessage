const text = document.querySelector(".box")
const submitBtn = document.querySelector(".button")
const messageContent= document.querySelector(".message-content")
const feedback = document.querySelector(".feedback");


submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(text.value===""){
        feedback.classList.add("show")
    }
    else{
        feedback.classList.remove("show");
        messageContent.textContent = text.value;
        text.value="";
    }
})