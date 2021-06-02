let butn = document.querySelector("button");
let arr =["red", "yellow", "blue", "black"];
let intro= document.getElementById("intro");

butn.addEventListener("click",()=>{
    let random=arr[Math.floor(Math.random()*arr.length)];
switch(random){
case "red":
 
      document.body.style.backgroundColor="red"; 
intro.innerText="This color is red"

   
    break;

    case "yellow" :

        document.body.style.backgroundColor="yellow";
        intro.innerText="This color is yellow"
        intro.style.color="black";
            break;
            case "black" :

        document.body.style.backgroundColor="black";
        intro.innerText="This color is black"
       intro.style.color="white";
           
            break;
            case"blue" :
          
            document.body.style.backgroundColor="blue";
            intro.innerText="This color is blue"
               
                break;
                default :

                document.body.style.backgroundColor="white";
                intro.innerText="This color is white"
                   
                    break;
}
})
