document.addEventListener('DOMContentLoaded',
 function(){
    document.querySelector('.buttons').addEventListener('click',onclick1,false)

    function onclick1(){

    chrome.tabs.query(
        {currentWindow:true,active:true},
        function(tabs){
            chrome.tabs.sendMessage(tabs[1].id,'hi')
        })
    }
},false);


