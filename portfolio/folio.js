document.addEventListener("DOMContentLoaded",function(){
    const nameele=document.getElementById("typed-name");
    const name="Hi, I'm Suhas!";
    let index=0;
    function type(){
        if(index<name.length){
            nameele.textContent+=name.charAt(index);
            nameele.style.color="red";
            index++;
            setTimeout(type, 100);
        }else{
            setTimeout(()=>{
                nameele.textContent="";
                index=0;
                type();
            },1000);
        }
    }
    type();
})




