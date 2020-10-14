var users = []

var singleUser = {}

console.log(users)

document.getElementById('push').onclick = function(){

///so i think i have to put each user in an object and push the object to the array

	singleUser.name = document.getElementById('name').value
    singleUser.phone = document.getElementById('phone').value
    singleUser.pass = document.getElementById('pass1').value
    singleUser.confirmation = document.getElementById('pass2').value


	users.push(singleUser)

	console.log(users)


}

// here in the login page , i want to check if the password exists and true , if it is , then log in and go
//to the intended page .
document.getElementById('log').onclick = function(){

	for(var i = 0;i<users.length; i++)

	if(document.getElementById('exampleInputPassword') === users[i].pass){
  //if the password exists & correct then go to the site 
     
     


	}
}

