process.stdin.resume()
process.stdin.setEncoding('utf8')
let resultat = 2018;
console.log('How old are you ? ')
process.stdin.on('data', (text) => {
	if (text > 0 && text <= 99){
		resultat = resultat - text;
		console.log('Hello you were born in ' + resultat)
		process.exit()
	}
	else
		console.log('Please enter your age')
}

})