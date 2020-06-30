function drawController(){
                var x=document.getElementById("drawer").style;
                console.log(x.display);
                if(x.display == 'inline-block' || x.display == '') x.display = 'none';
                else x.display = 'inline-block';
            }

function draft_projects(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "draft.json", false ); 
    xmlHttp.send( null );
    var values = JSON.parse(xmlHttp.responseText);
    for(var i=0;i<values['id'].length;i++)    {
    	let data=values['id'][i];
    	document.write("<div class='card'><label>"+data['project']+"</label>");
    	
    	document.write("<div style='float: right;''><i class='fa fa-sticky-note-o'>&nbsp</i><i class='fa fa-bars'></i></div><br/>")
    	
    	document.write("<label style='font-weight:lighter'> Created on "+data['started']+"</label><br/>")
    	if(data['expiry']>10){
    		document.write("<label style='width: 150px; padding-bottom: 1px;' class='expireF'>"+ data['expiry']+" days more</label><hr class='hr1' />");
    	}else{
    		document.write("<label style='width: 150px; padding-bottom: 1px;' 	class='expireS'>"+ data['expiry']+" days more</label><hr class='hr1' />");
    	}
    	document.write("<div style='padding-top: 10px;''><i class='fa fa-hourglass-o'>&nbsp</i><label style='font-weight:lighter'>Planned due on"+data["planned"]+"</label></div>");
    	document.write("<i class='fa fa-user-o'>&nbsp</i><label>"+data['handler']+"</label><hr/>")
        var decision="grey";
        if(data['status'][0]=='A') decision='red';
        console.log(decision);
    	document.write("<div><label style='float: left; font-weight:lighter'>Draft</label><label style='float: right; color:"+decision+"'>"+data['status']+"</label></div></div>")
    }
    
 }

function started_projects(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "projects.json", false ); 
    xmlHttp.send( null );
    var values = JSON.parse(xmlHttp.responseText);
    for(var i=0;i<values['id'].length;i++)    
        {let data=values['id'][i];
            var color='red';
            if(data['status']=='Active') color="orange";
            document.write("<div class='card'><div class='cardheader'><b>"+data['project']+"</b><div class='edit' style='float:right'><i class='fa fa-bars' onclick='cardoptions()'></i></div><div id='editpop' style='display: none;'><a href='#'>samp1</a><br/><a href='#'>samp2</a></div></div><div><i class='fa fa-hourglass-o'></i>&nbsp"+data['started']+"</div><hr/><i class='fa fa-tasks-o'>&nbsp"+data['task']+" tasks</i><br/><i class='fa fa-comments-o'>&nbsp"+data['comment']+"comment</i><br/><i class='fa fa-file-o'>&nbsp"+data['document']+" documents</i><hr/><div class='progress'><div class='progress-bar' style='background-color: green; width:"+data['percentage']+";' role='progressbar' aria-valuemax='100'>"+data['percentage']+"</div></div><br><div><i class='fa fa-user-o'>&nbsp"+data['handler']+"</i><b style='float: right; color:"+color+"''>"+data['status']+"</b></div></div><br/><br/>");
        }}