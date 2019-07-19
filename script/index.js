$(document).ready(function(){
	$('#open').click(function(){
		$('#myForm').show();
	});
});
$(document).ready(function(){
	$('#close').click(function(){
		$('#myForm').hide();
	});
});

var user=[];

var data1 = JSON.parse(localStorage.getItem('userdetail'));
for(var i=0;i<data1.length;i++){
	user.push(data1[i]);
}
$(document).ready(function(json){
	$('#register').click(function(){
    var name=$('#name').val();
    var fathername=$('#fathername').val();
	var dob=$('#dob').val();
	var age=$('#age').val();
	var gender=$('#gender').val();
	var nation=$('#nation').val();
	var religion=$('#religion').val();
	var address=$('#address').val();
	var email=$('#email').val();
	var contact=$('#contact').val();
	
	if(name==''){
		alert('Enter a name')
	}
	else if(fathername==''){
		alert('Enter a father name')
	}
	else if(dob==''){
		alert('Enter a Date of birth')
	}
	else if(age==''){
		alert('Enter a age')
	}
	else if(gender==''){
		alert('Enter a gender')
	}
	else if(nation==''){
		alert('Enter a nationality')
	}
	else if(religion==''){
		alert('Enter a religion')
	}
	else if(address==''){
		alert('Enter a address')
	}
	else if(email==''){
		alert('Enter a email')
	}
	else if(contact==''){
		alert('Enter a contact')
	}
	else{
		alert('Register Successfully')
	var data = {
		name:name,
		fathername:fathername,
		dob:dob,
		age:age,
		gender:gender,
		nation:nation,
		religion:religion,
		address:address,
		email:email,
		contact:contact
	}
	console.log(data)
	user.push(data);
	console.log(user);
	localStorage.setItem('userdetail',JSON.stringify(user));
	location.replace('show.html');
}
	});
});

$(document).ready(function(){
	$('#show').click(function(){
		location.replace('show.html')
	})
})