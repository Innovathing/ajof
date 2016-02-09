
var parser = document.createElement('a');
parser.href = document.location;
var hash = parser.hash.replace("#", "");

if(hash == "wololo")
{
	hash = "30";
}
else if (hash == "isp")
{
	hash = "13";
}

var elem = document.getElementById(hash);
if(elem != null)
{
	elem.play();
}
