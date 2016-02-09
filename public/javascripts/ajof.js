
var parser = document.createElement('a');
parser.href = document.location;

document.getElementById(parser.hash.replace("#", "")).play();
