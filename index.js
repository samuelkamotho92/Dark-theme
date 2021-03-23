const tog = document.getElementById("toggle");
console.log(tog);
tog.addEventListener("change",(e)=>{
    document.body.classList.toggle("dark",e.target.checked);
    console.log(e);
});
