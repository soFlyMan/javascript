function getNewContent(){
	var request=getHTTPObject();
	if(request){
		request.open("GET","example.txt",true);
		request.onreadystatechange=function(){
			if(request.readyState==4){
				alert("Response Recived");
				var para1=document.createElement("p");
				var txt1=document.createTextNode(request.responseText);
				para1.appendChild(txt1);
				document.getElementById("gallery").appendChild(para1);
			}
		};
		request.send(null);
	}else{
		alert("sorry,you browser doesn\'t support XMLHttpRequest!");
	}
	alert("Function done");
}
