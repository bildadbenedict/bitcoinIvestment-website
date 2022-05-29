$(document).ready(function(){
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

    var minDay		= [1,6,11,16,21,26,31,36,41,46,51];
    var maxDay		= [5,10,15,20,25,30,35,40,45,50,99999999999];
	var percent 	= [10,11,12,13,14,15,16,17,18,19,20];
	var minMoney 	= [0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01];
	var maxMoney	= [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000];
	$("#money").val(minMoney[0]);
	console.log($("#money").val(minMoney[0]));
	
	//Calculator
	function calc(){
		money = parseFloat($("#money").val());
		days = parseFloat($("#days").val());
		
		if(days < 1 || isNaN(days) == true){
			days = 1;
		}
		
		id = -1;
		var length = percent.length;
		var i = 0;
		do {
			if(minMoney[i] <= money && money <= maxMoney[i] && minDay[i] <= days && days <= maxDay[i]){
				id = i;
				i = i + length;
			}
			i++
		}
		while(i < length)
		
		if(id != -1){
			profitDaily = money / 100 * percent[id];
			profitDaily = profitDaily.toFixed(8);
			profitWeekly = profitDaily * 7;
			profitWeekly = profitWeekly.toFixed(8);
			profitMonthly = profitDaily * 30;
			profitMonthly = profitMonthly.toFixed(8);
			summa = profitDaily * days;
			summa = summa.toFixed(8);


			if(money < minMoney[id] || isNaN(money) == true){
				$("#profit").text("Error!");
				$("#profitDaily").text("Error!");
				$("#profitMonthly").text("Error!");
			} else {
				$("#profit").text(summa);
				$("#profitDaily").text(profitDaily);
				$("#profitMonthly").text(profitMonthly);
				
				$("#percent").text("(" + percent[id] * days + "%)");
				$("#percentDaily").text("(" + percent[id] + "%)");
				$("#percentMonthly").text("(" + percent[id] * 30 + "%)");
			}
		} else {
			$("#profit").text("Error!");
			$("#profitDaily").text("Error!");
			$("#profitWeekly").text("Error!");
			$("#profitMonthly").text("Error!");
		}
	}
	if($("#money").length){
		calc();
	}
	$("#money, #days").keyup(function(){
		calc();
	});
});