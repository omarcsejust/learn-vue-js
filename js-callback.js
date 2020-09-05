function getUser(name, email, callback){
	setTimeout(() => {
	    callback({name: name, email:email});
	}, 2000)
}

getUser("Omar", "omar@gmail.com", (user) => {
	console.log(user)
});