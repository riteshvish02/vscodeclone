function edit(){
document.querySelector("#bottom").addEventListener("click",function(dets){
    if(dets.target.id === "edit"){
    document.querySelector("#overlay").style.display = "initial";
     document.querySelector("#changeinp").value = dets.target.dataset.val;
     document.querySelector("#changeform").setAttribute("action",`/change/${dets.target.dataset.val}`)
    }
    
   
})

}

edit();

function handleform(){
    document.querySelectorAll("#newform").forEach(function(elem){
  elem.style.display = "none";
    })
}

var index = 0;

document.querySelector("#fileicon").addEventListener("click",function(){
    var form = document.querySelector(".fileform")
    handleform();
    if(index === 0){
        form.style.display = "initial";
        index = 1;
    }else{
        form.style.display = "none";
        index = 0;
    }
})



var val = 0;

document.querySelector("#foldericon").addEventListener("click",function(){
    var forem = document.querySelector(".folderform")
    handleform();
    if(val === 0){
        forem.style.display = "initial";
        val = 1;
    }else{
        forem.style.display = "none";
        val = 0;
    }
})




