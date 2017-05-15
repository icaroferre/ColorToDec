inlets = 1;
outlets = 1;

/*

Color to Decimal Script
Written by Ícaro Ferre

http://github.com/icaroferre

*/

function rgb(r, g ,b, a) {
	a = typeof a !== 'undefined' ? a : 1.0;
	rdec = +(r/255.).toFixed(3)
	gdec = +(g/255.).toFixed(3)
	bdec = +(b/255.).toFixed(3)
	outlet(0, rdec, gdec, bdec, a)
}

function hex(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    rgb(r, g ,b);
}
