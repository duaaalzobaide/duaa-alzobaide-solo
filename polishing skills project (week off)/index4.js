var users = []

console.log(users)

document.getElementById('push').onclick = function(){

	var user = document.getElementsByClassName('form-control').innerHTML

	users.push(user)

	console.log(users)


}