
let todoSeq=0;
let todoID=0;
let tempString='';
let tempContentString='';
let timers=[];


let Timer={

    time:0,
    id:'',
    onclickStart: function(){

        alert("선택된 항목의 타이머를 시작합니다.:"+this.id)

    },
    onclickStop: function(){

        alert("선택된 항목의 타이머를 정지합니다.:"+this.id)

    },
    updateTimer: function (){
    
    let timeString="";
    let seconds=this.time*60;
    seconds--;
    
    this.time-=1;
    
    timeString=Math.floor(seconds/60)+":"+seconds%60;

    return timeString;
    }

}



function onclickDelete(){//obj delete 구현 해주어야함. 
    alert("선택된 항목을 지웁니다.");
    let countDelete=0;
    for(let i =0;i<todoID;i++){
        tempString='#todoChecked'+i;
        if(document.querySelector(tempString)==undefined)continue;//지워졌을 경우 삭제
        if(document.querySelector(tempString).checked==true){//각tr의 체크 박스를 확인해서 체크되어있으면

            tempString='#todo'+i;
            document.querySelector(tempString).remove();//tr을 지운다.
            tempString='todo'+i;
            delete timers[i];
            countDelete++;
        }


    }

    let newtodoSeq=1;

    for(let i=1;i<=todoSeq;i++){
        tempString='#todoSeq'+i;
        if(!document.querySelector(tempString)){
            continue;
        }
        else{
            document.querySelector(tempString).textContent=(newtodoSeq);
            tempContentString='todoSeq'+newtodoSeq;
            document.querySelector(tempString).attributes.id=(tempContentString);
            newtodoSeq++;
        }

    }

    todoSeq=newtodoSeq-1;


    

}








document.addEventListener('DOMContentLoaded',
 function(){
    
    //let btnStart=document.querySelector('#btnStart').addEventListener('click',onclickStart,false);
   // let btnStop= document.querySelector('#btnStop').addEventListener('click',onclickStop,false);
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
            timers[todoID]=Object.create(Timer);
            timers[todoID].time=todoTime.value;
            timers[todoID].id=todoID;
            todolist.innerHTML+="<tr id='todo"+(todoID)+"'><td id='todoSeq"+todoSeq+"'>"+todoSeq+"</td><td>"+this.value+"</td><td>"+timers[todoID].updateTimer()+"</td><td><input id='todoChecked"+todoID+"' type='checkbox' name='selected' value='true'></td></tr>";
            todoID++;
            this.value="";
        }
        
    });
    

    
    
    

    














},false);


