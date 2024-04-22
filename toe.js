let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('.but');
let msg=document.querySelector('.msgc');
let newgame=document.querySelector('.but');
console.log(newgame);
let turn0=true// player X,player 0

const winpatterns=[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
];

boxes.forEach((box)=>{
        box.addEventListener('click',()=>{
             if(turn0){
                //turn 0
                box.innerText="O";
                turn0= false;
             }
             else{
                //turn x
                box.innerText='X';
                turn0=true;
             }
             box.disable=true;

             checkwinner();

        })
});
 
function checkwinner(){
    for(let pattern of winpatterns){//use to match the winning patterns
        let pat1=boxes[pattern[0]].innerText ; 
        let pat2= boxes[pattern[1]].innerText;
        let pat3= boxes[pattern[2]].innerText;

        if(pat1 !='' && pat2 !='' && pat3 !=''){
    
            if(pat1 === pat2 && pat2=== pat3){
                winner(pat1);
            }
        }      
    }
 
}
function winner(win){// use to declare the winner
    msg.innerText=`${win} is the winner of the match`;
     msg.classList.remove('msgc');
     newgame.classList.remove('msgc');
     disableboxes();
}

const disableboxes=()=>{//uses to disable the boxes

    for(let boxss of boxes){
        boxss.disabled=true;
    }
}

reset.addEventListener('click',()=>{
    enableboxes();
})

const enableboxes=()=>{
 turn0=true
    for(let boxss of boxes){
        boxss.disabled=false;
        boxss.innerText='';
    }
    msg.classList.add('msgc');

}
