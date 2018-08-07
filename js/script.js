console.log('u a ' + window.location);

const bl=document.querySelector('.imageBlock');
let answer=parseFloat(prompt("give me number"));
if (answer<0) {
	console.log(answer * (-1));
}
else {
	console.log(answer);
}