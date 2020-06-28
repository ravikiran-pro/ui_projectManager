var start,stop;
function draft_projects(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "draft.json", false ); 
    xmlHttp.send( null );
    var values = JSON.parse(xmlHttp.responseText);
    for(var i=0;i<values['id'].length;i++)    
        {let data=values['id'][i];
        document.write("<div class='card'><div class='cardheader'><b>"+data['project']+"</b><div class='edit'><i class='fa fa-sticky-note-o'></i>&nbsp<i class='fa fa-bars' onclick='cardoptions()'></i></div><br/><div id='editpop' style='display: none;'><a href='#'>samp1</a><br/><a href='#'>samp2</a></div></div><label>Created by "+data['started']+"</label><label style='width: 150px;' class='bg-danger'>"+data['expiry']+" days more</label><hr/><div><i class='fa fa-hourglass'></i>&nbspPlanned due on "+data['planned']+"</div><div><i class='fa fa-user'></i>&nbsp "+data['handler']+"</div><hr/><div><b style='float: left'>draft</b><b style='float: right'>"+data['status']+"</b></div></div>");}}

function started_projects(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "projects.json", false ); 
    xmlHttp.send( null );
    var values = JSON.parse(xmlHttp.responseText);
    for(var i=0;i<values['id'].length;i++)    
        {let data=values['id'][i];
            document.write("<div class='card'><div class='cardheader'><b>"+data['project']+"</b><div class='edit'><i class='fa fa-bars' onclick='cardoptions()'></i></div><br/><div id='editpop' style='display: none;'><a href='#'>samp1</a><br/><a href='#'>samp2</a></div></div><div><i class='fa fa-hourglass'></i>&nbsp"+data['started']+"</div><hr/><i class='fa fa-tasks'>&nbsp"+data['task']+" tasks</i><i class='fa fa-comments'>&nbsp"+data['comment']+"comment</i><i class='fa fa-file'>&nbsp"+data['document']+" documents</i><hr/><div class='progress'><div class='progress-bar' style='background-color: green; width:"+data['percentage']+";' role='progressbar' aria-valuemax='100'>"+data['percentage']+"</div></div><br><div><i class='fa fa-user'>&nbsp"+data['handler']+"</i><b style='float: right;''>"+data['status']+"</b></div></div><br/><br/>");
        }}
function scrollStartV1(event){
                start=event.clientX;}
function scrollStopV1(event){
                stop=event.clientX;
                document.getElementsByClassName("viewlayout")[0].scrollLeft+=(start-stop);}
function cardoptions(){
                var x=document.getElementById("editpop").style;
                if(x.display == 'none') x.display = 'inline-block';
                else x.display = 'none';}
function scrollStartV2(event){
                start=event.clientX;
            }
function scrollStopV2(event){
                stop=event.clientX;
                document.getElementsByClassName("viewlayout")[1].scrollLeft+=(start-stop);
            }
function hider(){
                var x=document.getElementById("drawer").style;
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