btn = document.querySelector('#btn');

btn.addEventListener('click',function(e){
    e.preventDefault();
    va = document.getElementById("fullname").value;
    console.log(va);

    document.getElementById("fullname").value ="";
    console.log(va);



});
   
   



