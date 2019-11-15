
let todoSeq=0;
let todoID=0;
let tempString='';
let tempContentString='';
let timers=[]; 



let Timer={

    id:Number,
    min:Number,
    seconds:Number,
    timerID: Number,
    todoContent: String,
    startTime:Date,
    endTime:String,
    stoppedTime:Date,
    pausedMin:Number,



    initTimer: function(id,todoContent,min,stoppedTime,pausedMin){
        this.id=id;
        this.todoContent=todoContent;
        this.min=min;
        this.seconds=min*60;
        this.startTime=new Date();
        this.endTime=Math.floor(this.startTime.getHours()+this.min/60)+":"+(this.startTime.getMinutes()+this.min%60);
        this.stoppedTime=stoppedTime,
        this.pausedMin=pausedMin,
        this.timerStart();
        
    },

    timerStart: function(){
        if(this.pausedMin!=0)clearInterval(this.timerID);
        this.timerID=setInterval(this.updateTimer.bind(this),1000);
        console.log(this.stoppedTime);
    },
    timerStop: function(){
        clearInterval(this.timerID);
        this.stoppedTime=new Date();
        this.timerID=setInterval(this.updateEndTime.bind(this),60000);
    },
    updateTimer: function (){
        let temp='';
        let timeString=""
        if(this.seconds>=0){
        timeString=Math.floor(this.seconds/60)+":"+this.seconds%60;
        temp="#timerView"+this.id;
        document.querySelector(temp).textContent=timeString;
        if(this.seconds==0){

            document.querySelector(temp).style.backgroundColor='red';
            document.querySelector(temp).style.color='yellow';
            alert("일정: "+this.todoContent+" 시간이 만료 되었습니다!");

        }
        else if(this.seconds<1*60){
            document.querySelector(temp).style.color='red';
        }else if(this.seconds<5*60){

            document.querySelector(temp).style.color='yellow';

        }
        this.seconds--;
        
        
    }
    },
    updateEndTime:function(){
        let temp='#endTime'+this.id;
        this.pausedMin++;
        this.endTime=Math.floor(this.startTime.getHours()+(this.min+this.pausedMin)/60)+":"+(this.startTime.getMinutes()+(this.min+this.pausedMin)%60);
        document.querySelector(temp).textContent=this.endTime;
    },
   
    getObjData:function(){

        let datas={

            "id":this.id,
            "min":this.min,
            "seconds":this.seconds,
            "timerID": this.timerID,
            "todoContent": this.todoContent,
            "startTime":this.startTime,
            "endTime":this.endTime,
            "stoppedTime":this.startTime,
            "pausedMin":this.pausedMin
        };

        return datas;
    }
}

function onclickDelete(){//obj delete 구현 해주어야함. 
   
    let countDelete=0;
    for(let i =0;i<todoID;i++){
        tempString='#todoChecked'+i;
        if(document.querySelector(tempString)==undefined)continue;//지워졌을 경우 삭제
        if(document.querySelector(tempString).checked==true){//각tr의 체크 박스를 확인해서 체크되어있으면

            tempString='#todo'+i;
            timers[i].timerStop();
            document.querySelector(tempString).remove();//tr을 지운다.
            delete timers[i];
            localStorage.removeItem(i);
            countDelete++;
        }


    }

    if(countDelete==0)alert('선택한 일정이 없습니다.')
    else alert("선택된 항목을 지웁니다.");

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
            timers[i].timerStart();
        
        }
    }

}

function onclickStop(){
    for(let i =0;i<todoID;i++){

        tempString='#todoChecked'+i;
        if(document.querySelector(tempString)==undefined)continue;//지워졌을 경우 무시
        if(document.querySelector(tempString).checked==true){//각tr의 체크 박스를 확인해서 체크되어있으면
           timers[i].timerStop();
           localStorage.setItem(todoID,JSON.stringify(timers[i].getObjData()));
        
        }
    }
}


function loadTodoList(){////////////////////////////////////////////////고치기
let counter=0;
for(let i=0;i<100;i++){
    if(localStorage.getItem(i)==null)
    continue;
    
    timers[counter]=localStorage.getItem(i);
    counter++;
}

console.log(timers);
}


document.addEventListener('DOMContentLoaded',
 function(){
    let btnStart=document.querySelector('#btnStart').addEventListener('click',onclickStart,false);
    let btnStop= document.querySelector('#btnStop').addEventListener('click',onclickStop,false);
    let btnDelete= document.querySelector('#btnDelete').addEventListener('click',onclickDelete,false);
    let todolist=document.querySelector('#todolist');
    let todoTime=document.querySelector('#todoTime');
    if(localStorage.timers)
        console.log(localStorage.timers);
    todoTime.addEventListener('input',
    function currentRange(){
        
        document.querySelector('#currentRange').innerHTML="<label id='currentRange' class='label' for='todoTime'>TIME: "+this.value+" MIN"+"</label>";
        
    }
    
    );
    loadTodoList();

document.querySelector('#todoinput').addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13&&this.value) { // 13 is enter
            todoSeq+=1;
            timers[todoID]=Object.create(Timer);
            timers[todoID].initTimer(todoID,this.value, todoTime.value,null,null);
            todolist.innerHTML+="<tr id='todo"+(todoID)+"'><td id='todoSeq"+todoSeq+"'>"+todoSeq+"</td><td id='do"+todoID+"'>"+timers[todoID].todoContent+"</td><td>"+timers[todoID].startTime.getHours()+":"+timers[todoID].startTime.getMinutes()+"</td><td id='endTime"+todoID+"'>"+timers[todoID].endTime+"</td><td id='timerView"+todoID+"'>00:00</td><td><input id='todoChecked"+todoID+"' type='checkbox' name='selected' value='true'></td></tr>";
            localStorage.setItem(todoID,JSON.stringify(timers[todoID].getObjData()));
            todoID++;
            this.value="";
            
        }
        
    });



},false);

window.addEventListener("beforeunload", function (event) {
    
  });


