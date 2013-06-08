var dates = [
		"Oct. 2010",
		"Nov. 2010",
		"Dec. 2010",
		"Jan. 2011",
		"Feb. 2011",
		"Mar. 2011",
		"Apr. 2011",
		"May. 2011",
		"Jun. 2011",
		"Jul. 2011",
		"Aug. 2011",
		"Sept. 2011",
		"Oct. 2011",
		"Nov. 2011",
		"Dec. 2011",
		"Jan. 2012",
		"Feb. 2012",
		"Mar. 2012",
		"Apr. 2012",
		"May. 2012",
		"Jun. 2012",
		"Jul. 2012",
		"Aug. 2012",
		"...Present"
	];

var bands = {
	"Free Food":{
		start:1,
		preview:"<h2>Free Food</h2><p>October 2010</p>"
	},
	"Alto":{
		start:3,
		preview:"<h2>Alto</h2><p>December 2010</p>"
	},
	"The Ten Thousand":{
		start:6,
		preview:"<h2>The Ten Thousand</h2><p>April 2011</p>"
	},
	"The Internship":{
		start:6,
		preview:"<h2>The Internship</h2><p>(Manzanita)</p><p>April 2011</p>"
	},
	"Owl Fly South":{
		start:7,
		preview:"<h2>Owl Fly South</h2><p>May 2011</p>"
	}
}

var venues = {
	midSesh:{
		start:4,
		end:13,
		preview:"<h2>Midvale Session</h2><p>January 2011</p>"
	},
	treeHouse:{
		start:7,
		preview:"<h2>Treehouse Open Mic</h2><p>April 2011</p>"
	},
	coOp:{
		start:8,
		preview:"<h2>UCLA Radio Presents the first Co-op show</h2><p>May 2011</p>"
	},
	outsideWW:{
		start:21,
		preview:"<h2>All the bands start playing outside of Westwood</h2><p>June 2012</p>"
	}
}

//Wrote this function because I was too lazy to hardcode the positioning into the nodes
function rule(length,cur,index) {
	if (cur>=index) {
		return 0;
	}
	var newLength = length/17.817;
	return newLength + rule(length-newLength,cur+1,index);
}

//Duplicated code... whatever. It's 4am in the morning
function renderFrets() {
	var neck = document.getElementById("neckBody");
	var neckWidth = neck.style.width;
	console.log(neck);	
	//Wee!! recursive goodness
	function ruleofeighteen(width, cur, count) {
		if (count > 24) {
			return;
		}
		var posish = width/17.817;
		if (count == 12)
		{
			neck.innerHTML = neck.innerHTML + '<div id="twelfthInlay" style="left: ' + Math.floor(cur+posish/2-14) + 'px;"><div>&nbsp;</div><div>&nbsp;</div></div>';
		}
		else if (count > 1 && count%2!=0 && count != 11 && count !=13) {
			neck.innerHTML = neck.innerHTML + '<div class="guitarInlay" style="left: ' + Math.floor(cur+posish/2-14) + 'px;"></div>';
		}
		neck.innerHTML = neck.innerHTML + '<div class="guitarFret" style="left: ' + Math.floor(cur+posish) + 'px;"><h3>'+dates[count-1]+'</h3></div>';
		ruleofeighteen(width-posish,cur+posish,count+1);
		return;
	}
	ruleofeighteen(3300,0,1);
}

function renderBands() {
	var string = document.getElementById("bands");
	for(var id in bands) {
		var start = bands[id].start;
		string.innerHTML = string.innerHTML + '<div class="hover"><div class="band" style="left: '+Math.floor(rule(3300,0,start)+107)+'px;"></div><article class="preview" style="left: '+Math.floor(rule(3300,0,start))+'px;">'+bands[id].preview+'</article></div>';	
	}
}

function renderVenues() {
	for(var id in venues) {
		var string = document.getElementById(id);
		var start = venues[id].start;
		if(venues[id].end)
			var end = venues[id].end;
		else
			var end = 24;
		var width = Math.floor(rule(3300,0,end)-rule(3300,0,start));
		string.innerHTML = string.innerHTML + '<div class="hover" style="height: inherit;"><div class="venue" style="width: '+width+'px; left: '+Math.floor(rule(3300,0,start)+107)+'px;"></div><article class="preview" style="left: '+Math.floor(rule(3300,0,start))+'px;">'+venues[id].preview+'</article></div>';	
	}
}

$(document).ready(function(){
	renderFrets();
	renderBands();
	renderVenues();
})
