//browser-sync start --proxy "myproject.dev" --files "*/**"

$("#submit").click(function(e){
	e.preventDefault()
	var ID = {
		name : $("#name").val(),
		address : $("#address").val(),
		phoneNo : $("#phone").val(),
		id : $("#id").val()
	}
	if (ID.id == "") {
		alert("please fill the ID no")
	}
	else{var cnvrtStrinJason = JSON.stringify(ID)
	console.log(cnvrtStrinJason)
	
	var url = $("#form").attr("action")
	localStorage.setItem(ID.id,cnvrtStrinJason)

	//$.post(url,ID,function(){
		//alert("sumited")

	//})
	}
})

var respondData = localStorage.getItem("data")

console.log(JSON.parse(respondData))