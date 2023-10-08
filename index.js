var btn_add = document.querySelector("#add");
var content = document.querySelector("h5");

var flag = 0;

btn_add.addEventListener("click",function(){
    if(flag == 0){
        content.innerHTML = "Friends";
        content.style.color = "green";
        btn_add.innerHTML = "Remove";
        flag = 1;
    }
    else{
        content.innerHTML = "Stranger";
        content.style.color = "red";
        btn_add.innerHTML = "Add Friend";
        flag = 0;
    }
})

