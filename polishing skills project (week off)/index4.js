var users = []

var singleUser = {}

console.log(users)

document.getElementById('push').onclick = function(){

///so i think i have to put each user in an object and push the object to the array

	singleUser.name = document.getElementById('name').innerHTML
    singleUser.phone = document.getElementById('phone').innerHTML
    singleUser.pass = document.getElementById('pass1').innerHTML
    singleUser.confirmation = document.getElementById('pass2').innerHTML


	users.push(singleUser)

	console.log(users)


}

// here in the login page , i want to check if the password exists and true , if it is , then log in and go
//to the intended page .
document.getElementById('log').onclick = function(){

	for(var i = 0;i<users.length;)

	if(document.getElementById('exampleInputPassword') === users[i].pass){


	}
}