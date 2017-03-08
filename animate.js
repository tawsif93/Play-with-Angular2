var temp1 = '15 5 10 5 15';
var temp2 = '47 5 10 5 15';
var name1 = '';
var name2 = '';

var arr1 = [];
var arr2 = [];

arr1 = temp1.split(' ');
arr2 = temp2.split(' ');

for( var i = 0 ; i < 5 ;  i++ )
{
	name1 += String.fromCharCode(arr1[i] ^ 100);
	name2 += String.fromCharCode(arr2[i] ^ 100);
}

if(window.location.pathname.split('/')[2] != name1 || window.location.pathname.split('/')[2] != name2 )var myName = window.prompt("Enter name");

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if(10 < 3)
{
	bubbleShape = 'square';
}
else
{
	bubbleShape = 'circle';
}

bounceBubbles();
