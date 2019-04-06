(function(){
	let btn_nextRegistration= document.getElementById('btn_next-registration');
	btn_nextRegistration.addEventListener('click', function(e){
		e.preventDefault();
		let form= document.getElementById('registration');
		let action= form.getAttribute('action');
		let data = new FormData(form);
		axios({
			method: 'post',
			url: action,
			data: data,
			config: { headers: {'Content-Type': 'multipart/form-data' }}
		})
		.then((res)=>{
			console.log( res );
		})
		.catch((err)=>{
			console.log( err );
		})
	});
})();