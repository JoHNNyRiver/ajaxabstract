const Ajax = function(obj){

	// manipuling the object
	this.obj = obj || {} || new Object();

	const request = new XMLHttpRequest();
	request.open(this.obj.method, this.obj.url, true);

	// Action of request and response with load and error
	request.addEventListener('load', this.obj.ok);
	request.addEventListener('error', this.obj.error)

	// Send of request's
	request.send();

}

Ajax({
	method: 'GET',
	url: 'https://viacep.com.br/ws/01001000/json/',
	ok: function(data){
		if(data.target.status === 200){
			const resp = JSON.parse(data.target.responseText);
			return console.log(resp);
		}
	},

	error: function(){
		console.clear();
		return console.error("erro :", "ocorreu algum erro na requisição");
	}
});