var start,stop;
function scrollStartV1(event){
                start=event.clientX;
            }
function scrollStopV1(event){
                stop=event.clientX;
                document.getElementsByClassName("viewlayout")[0].scrollLeft+=(start-stop);
            }

function scrollStartV2(event){
    console.log('ddd')
                start=event.clientX;
            }
function scrollStopV2(event){
    console.log('ddd')
                stop=event.clientX;
                document.getElementsByClassName("viewlayout")[1].scrollLeft+=(start-stop);
            }
function hider(){
                var x=document.getElementById("drawer").style;
                console.log(x.display);
                if(x.display == '') x.display = 'inline-block';
                else x.display = '';
            }
function navchanger(){
                s =document.getElementsByClassName("navright");    
                if(s[0].innerHTML[1]=="i"){
                document.getElementById("searchbar").paddingLeft="";
                s[0].innerHTML="<hr/>"+s[0].innerHTML;
                s[1].innerHTML="<hr/><i><b>Notifications</b></i>"+s[1].innerHTML;
                s[2].innerHTML="<hr/><i><b>profile</b></i>"+s[2].innnerHTML;}
                else location.reload(); ///reload --Improvise toLocaleDateString()
            }