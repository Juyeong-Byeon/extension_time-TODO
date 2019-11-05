
let todoSeq=0;
let todoID=0;
let tempString='';
let tempContentString='';

function onclickStart(){

<<<<<<< Updated upstream
    alert("선택된 항목의 타이머를 시작합니다.");
=======
let Timer={

    id:'',
    seconds:Number,
    timerID: Number,

    timerStart: function(){
        alert("선택된 항목의 타이머를 시작합니다.");
        //this.updateTimer();
        if(!this.timerID){
        this.timerStop();
        console.log([timers[todoID].updateTimer.bind(this)]);
        //this.timerID=setInterval(timers[todoID].updateTimer.bind(this),1000);
        }
    },
    timerStop: function(){
        clearInterval(this.timerID);
    },
    updateTimer: function (){
        console.log(this);  
        let temp='';
        let timeString=""
        if(this.seconds>=0){
        timeString=Math.floor(this.seconds/60)+":"+this.seconds%60;
        temp="#timerView"+this.id;
        document.querySelector(temp).textContent=timeString;
        if(this.seconds==0){

            document.querySelector(temp).style.backgroundColor='red';
            document.querySelector(temp).style.color='yellow';
            temp="#do"+this.id;
            temp=(document.querySelector(temp).textContent);
            alert("일정: "+temp+" 시간이 만료 되었습니다!");

        }
        else if(this.seconds<1*60){
            document.querySelector(temp).style.color='red';
        }else if(this.seconds<5*60){

            document.querySelector(temp).style.color='yellow';

        }
        this.seconds--;
        this.timerID=setInterval(timers[todoID].updateTimer.bind(this),1000);
        
    }
    }
   
>>>>>>> Stashed changes

}
function onclickStop(){

<<<<<<< Updated upstream
    alert("선택된 항목의 타이머를 정지합니다.");

}
function onclickDelete(){
=======
function onclickDelete(){//obj delete 구현 해주어야함. 
>>>>>>> Stashed changes
    alert("선택된 항목을 지웁니다.");
    let countDelete=0;
    for(let i =0;i<todoID;i++){
        tempString='#todoChecked'+i;
        if(document.querySelector(tempString)==undefined)continue;//지워졌을 경우 삭제
        if(document.querySelector(tempString).checked==true){//각tr의 체크 박스를 확인해서 체크되어있으면

            tempString='#todo'+i;
            timers[i].timerStop();
            document.querySelector(tempString).remove();//tr을 지운다.
<<<<<<< Updated upstream
=======
            delete timers[i];
>>>>>>> Stashed changes
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

function onclickStart(){

    for(let i =0;i<todoID;i++){

        tempString='#todoChecked'+i;
        if(document.querySelector(tempString)==undefined)continue;//지워졌을 경우 무시
        if(document.querySelector(tempString).checked==true){//각tr의 체크 박스를 확인해서 체크되어있으면
            
        
        }
    }

}

<<<<<<< Updated upstream
function endTimer(time){

    let timeString="";
    timeString=time+":00";

    return timeString;
=======
function onclickStop(){
    for(let i =0;i<todoID;i++){

        tempString='#todoChecked'+i;
        if(document.querySelector(tempString)==undefined)continue;//지워졌을 경우 무시
        if(document.querySelector(tempString).checked==true){//각tr의 체크 박스를 확인해서 체크되어있으면
           timers[i].timerStop();
        
        }
    }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            todolist.innerHTML+="<tr id='todo"+(todoID)+"'><td id='todoSeq"+todoSeq+"'>"+todoSeq+"</td><td>"+this.value+"</td><td>"+endTimer(todoTime.value)+"</td><td><input id='todoChecked"+todoID+"' type='checkbox' name='selected' value='true'></td></tr>";
=======
            timers[todoID]=Object.create(Timer);
            timers[todoID].id=todoID;
            timers[todoID].seconds=todoTime.value*60;
            todolist.innerHTML+="<tr id='todo"+(todoID)+"'><td id='todoSeq"+todoSeq+"'>"+todoSeq+"</td><td id='do"+todoID+"'>"+this.value+"</td><td id='timerView"+todoID+"'></td><td><input id='todoChecked"+todoID+"' type='checkbox' name='selected' value='true'></td></tr>";
            timers[todoID].updateTimer();
>>>>>>> Stashed changes
            todoID++;
            this.value="";
        }
        
    });
    

    
    
    

    














},false);


