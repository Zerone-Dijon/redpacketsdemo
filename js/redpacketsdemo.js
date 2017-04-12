/*以下是result.html的js代码*/
function loaded() {
	findresult();
	startresultAnimate();
	CreateResult();
	CreateResult();
	CreateResult();
	loopCreateResult();
	/**startmarquee(一次滚动高度,速度,停留时间);**/
	startmarquee(32, 15, 10000);
}
var firstnames = new Array("赵", "钱", "孙", "李", "王", "张", "刘", "陈", "杜", "杨", "黄", "周", "吴", "徐", "马", "胡", "朱", "郭", "何", "罗", "高", "林", "姜", "唐", "龙", "孔", "曹", "关", "梁", "蒋", "邓", "毛", "江", "黄", "温", "习", "欧", "董", "章", "甄", "陆", "吕", "鲁", "贾", "程", "许", "于", "乐", "黎");
var lastnames = new Array("广天", "胜田", "光昊", "之文", "俊橡", "雨淇", "星广", "百川", "凌逸", "文昊", "昊昌", "富民", "鸿运", "运昌", "一鸣", "艺航", "思瑜", "昱霏", "博文", "旭光", "子墨", "浩天", "豪", "家俊", "景鸿", "景皓", "鸿图", "文哲", "嘉辉", "韦琪", "嘉琪", "淑婷", "涛", "宇鑫", "子明", "家明", "伟", "文曦", "子涵", "春华", "静", "琳", "睿", "文辉", "凌辉", "禹", "凌峰", "佳", "晓辉", "晓兰");
var moneyvalues = new Array(1, 2, 5, 10, 15, 20, 25, 50, 100, 200);

function findresult() {
	var moneyvalue = moneyvalues[Math.floor(Math.random() * moneyvalues.length)];
	document.getElementById("money_value").innerHTML = moneyvalue;
}
var page3_move = -100;
function startresultAnimate() {
	var page3per = page3_move + "%";
	document.getElementById("page3_redback").style.bottom= page3per;
	document.getElementById("page3_redfront").style.bottom = page3per;
	page3_move = page3_move + 1;
	if(page3_move < 0) {
		setTimeout("startresultAnimate();", 5);
	}else{
		page3_move = -100;
		startGoldCard();
	}
}
function startGoldCard(){
	var page3per = page3_move + "%";
	document.getElementById("page3_goldcard").style.bottom= page3per;
	page3_move = page3_move + 1;
	if(page3_move < 0.5) {
		setTimeout("startGoldCard();", 5);
	}else{
	startGoldCardTitle();
	}
}

var page3_opacity=0;
var page3_opacity2=0;
var page3_opacity3=0;
function startGoldCardTitle(){
	document.getElementById("page3_result").style.opacity = page3_opacity;
	page3_opacity=page3_opacity+0.02;
	if(page3_opacity<1.20)
	{setTimeout("startGoldCardTitle();", 5);}
	else{

		startGoldCardLogo();

	}
}
function startGoldCardLogo(){
	document.getElementById("page3_logo").style.opacity = page3_opacity2;
	page3_opacity2=page3_opacity2+0.02;
	if(page3_opacity2<1.20)
	{setTimeout("startGoldCardTitle();", 5);}
else{

		startGoldCardWinner();

	}
}
function startGoldCardWinner(){
	document.getElementById("winner_list").style.opacity = page3_opacity3;
	page3_opacity3=page3_opacity3+0.02;
	if(page3_opacity3<1.20)
	{setTimeout("startGoldCardTitle();", 5);}

}
function CreateResult() {
	var firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
	var lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
	var moneyvalue = moneyvalues[Math.floor(Math.random() * moneyvalues.length)];
	var onedata = document.createElement('div');
	onedata.innerHTML = "<div class='winner_data'>恭喜 <span class='gold'>" + firstname + lastname + "</span> 抢得红包 <span class='gold'> " + moneyvalue + "元</span></div>";
	document.getElementById("winner_list").appendChild(onedata);
}

function loopCreateResult() {
	CreateResult();
	setTimeout("loopCreateResult();", 10000);
}

function startmarquee(lh, speed, delay) {
	var t;
	var oHeight = 110; /** div的高度 **/ 　
	var p = false;
	var o = document.getElementById("winner_list");
	var preTop = 0;
	o.scrollTop = 0;

	function start() {
		t = setInterval(scrolling, speed);
		o.scrollTop += 1;
	}

	function scrolling() {
		if(o.scrollTop % lh != 0 &&
			o.scrollTop % (o.scrollHeight - oHeight - 1) != 0) {
			preTop = o.scrollTop;
			o.scrollTop += 1;
			if(preTop >= o.scrollHeight || preTop == o.scrollTop) {
				o.scrollTop = 0;
			}
		} else {
			clearInterval(t);
			setTimeout(start, delay);
		}
	}
	setTimeout(start, delay);
}

/*以下是index.html的js代码*/


function StartToDraw() {
	document.getElementById("page1_button").style.opacity = 1;
	document.getElementById("page1_top").style.top = 0;
	document.getElementById("page1_bottom").style.bottom = 0;
	exitpage()
}
var page1_move = 0;

function exitpage() {
	var page1per = page1_move + "%";
	document.getElementById("page1_top").style.top = page1per;
	document.getElementById("page1_bottom").style.bottom = page1per;
	page1_move = page1_move - 1;
	document.getElementById("page1_button").style.opacity = document.getElementById("page1_button").style.opacity - 0.02;
	if(page1_move < -50) {
		window.location.href = "result.html";
	} else {
		setTimeout("exitpage();", 10);
	}
}