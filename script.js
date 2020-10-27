//browser-sync start --proxy "myproject.dev" --files "*/**"

$("#submit").click(function(e){
	e.preventDefault()
	var ID = {
		name : $("#name").val(),
		address : $("#address").val(),
		phoneNo : $("#phone").val(),
		id : $("#id").val()
	}
	
	var cnvrtStrinJason = JSON.stringify(ID)
	console.log(cnvrtStrinJason)
	
	var url = $("#form").attr("action")

	//$.post(url,ID,function(){
		//alert("sumited")

	//})
})