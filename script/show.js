var table=JSON.parse(localStorage.getItem('userdetail'));
		console.log(table);
		for(var i=0;i<table.length;i++){
			console.log(table[i]);
			document.getElementById('body').innerHTML += '<tr><td>'+table[i].name+'</td>'+'<td>'+table[i].fathername+'</td>'+'<td>'+table[i].dob+'</td>'+'<td>'+table[i].age+'</td>'+'<td>'+table[i].gender +'</td></tr>';
			document.getElementById('body1').innerHTML += '<tr><td>'+table[i].nation+'</td>'+'<td>'+table[i].religion+'</td>'+'<td>'+table[i].address+'</td>'+'<td>'+table[i].email+'</td>'+'<td>'+table[i].contact+'</td></tr>'
		}

		function add(){
			location.replace('index.html');
		}