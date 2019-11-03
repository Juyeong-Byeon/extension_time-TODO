let todoSeq=0;
let todoID=0;

function onclickStart(){

    alert("선택된 항목의 타이머를 시작합니다.");

}
function onclickStop(){

    alert("선택된 항목의 타이머를 정지합니다.");

}
function onclickDelete(){

    alert("선택된 항목을 지웁니다.");

}



function endTimer(time){

    let timeString="";
    timeString=time+":00";

    return timeString;
}




document.addEventListener('DOMContentLoaded',
 function(){
    
    let btnStart=document.querySelector('#btnStart').addEventListener('click',onclickStart,false);
    let btnStop= document.querySelector('#btnStop').addEventListener('click',onclickStop,false);
    let btnDelete= document.querySelector('#btnDelete').addEventListener('click',onclickDelete,false);
    let todolist=document.querySelector('#todolist');
    let todoTime=document.querySelector('#todoTime');
    
    
    todoTime.addEventListener('input',
    function currentRange(){
        
        document.querySelector('#currentRange').innerHTML="<label id='currentRange' class='label' for='todoTime'>TIME: "+this.value+" MIN"+"</label>";
    
    }
    
    );
    
    
    let todoText=document.querySelector('#todoinput').addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13&&this.value) { // 13 is enter
            todoSeq+=1;
            todolist.innerHTML+="<tr id='todo"+(todoID++)+"'><td>"+todoSeq+"</td><td>"+this.value+"</td><td>"+endTimer(todoTime.value)+"</td><td><input type='checkbox' name='selected' value='true'></td></tr>";
            this.value="";

        }
        
    });
    

    
    
    

    














},false);


