const Ajax = function(obj){
	self.obj = obj || {} || new Object();

	let request = new XMLHttpRequest();
	request.open(this.obj.method, this.obj.url, true);

	request.addEventListener('readystatechange', this.obj.ok);

	request.send();	
}

Ajax({
	method: 'GET',
	url: 'https://viacep.com.br/ws/01001000/json/',
	ok: function(data){
		let resp = this.responseText;

		return console.log(JSON.parse(resp));
	}
});