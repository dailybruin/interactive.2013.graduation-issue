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
		"Sept. 2012",
		"Oct. 2012",
		"Nov. 2012"
	];

var bands = {
	"Free Food":{"start":1},
	"Alto":{"start":3},
	"The Ten Thousand":{"start":6},
	"The Internship":{"start":6},
	"Owl Fly South":{"start":7}
}

var venues = {
	midSesh:{start:3,end:12},
	treeHouse:{start:6},
	coOp:{start:7},
	outsideWW:{start:20}
}

function rule(length,cur,index) {
	if (cur>=index) {
		return 0;
	}
	var newLength = length/17.817;
	return newLength + rule(length-newLength,cur+1,index);
}

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
		string.innerHTML = string.innerHTML + '<div class="hover"><div class="band" style="left: '+Math.floor(rule(3300,0,start))+'px;"></div><article class="preview" style="left: '+Math.floor(rule(3300,0,start))+'px;"></article></div>';	
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
		string.innerHTML = string.innerHTML + '<div class="hover" style="height: inherit;"><div class="venue" style="width: '+width+'px; left: '+Math.floor(rule(3300,0,start))+'px;"></div><article class="preview" style="left: '+Math.floor(rule(3300,0,start))+'px;"></article></div>';	
	}
}
