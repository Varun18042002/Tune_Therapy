
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\NaRojaNuvve.mp3"
,"songs\\OrasaadhaUsurathan.mp3"
,"songs\\ApnaBanaLe.mp3"
,"songs\\mudalnee.mp3"
,"songs\\NeelaYevaru.mp3"
,"songs\\VaadiPullaVaadi(sad).mp3"
,"songs\\Kabira(sad).mp3"
,"songs\\LifeOfRam(sad).mp3"
,"songs\\OhOhUyireUyirin(neutral).mp3"
,"songs\\Chakkori(neutral).mp3"];

var sname=["naa roja nuvve",
"oru saada",
"apna bana le",
"Mudhal Nee",
"Neela Yevaru",
"Vaadi Pulla Vaadi",
"Kabira",
"Life of Ram",
"Oh Oh Uyire Uyirin",
"Chakkori"
];

var sd=["Artist: Hesham abdul Wahab<br>Movie: khushi<br>Released: 2023"
,"Artists: Vivek-Mervin<br>Released: 2018"
,"Artists: Arijit Singh<br>Movie: Bhediya<br>Released: 2023"
,"Artist: Sid Sriram<br>Movie: MNMN<br>Released: 2022"
,"Artist: Arijit Singh<br>Movie: Swamy Ra Ra<br>Released: 2013"
,"Artists: Hip Hop Tamizha<br>Movie: Meesaya Murukku<br>Released: 2017"
,"Artist:  Rekha Bhardwaj & Tochi Raina<br>Movie: Yeh Jawaani Hai Deewani<br>Released: 2013"
,"Artist:  Pradeep Kumar<br>Movie: Jaanu<br>Released: 2018"
,"Artist: Dhanush & Nikhita Gandhi<br>Movie: Thangamagan<br>Released: 2015"
,"Artists: Sathya Prakash, Shashaa Tirupati<br>Movie:  Sahasam Swasaga Sagipo<br>Released: 2016"];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\11.jpg",
"images\\\\13.jpg",
"images\\\\12.jpg",
"images\\\\14.jpg",
"images\\\\15.jpg",
"images\\\\16.jpeg",
"images\\\\17 .jpg",
"images\\\\18.jpg",
"images\\\\19.jpg",
"images\\\\20.jpg"];

var mood=[["1","2","3"],["4","5"],["6","7","8"],["9","10"]];
var mmm=["1.png","1.png","1.png","2.png","2.png","3.png","3.png","3.png","4.png","4.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	ins.onclick=function(){
	next(this);
  	};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }