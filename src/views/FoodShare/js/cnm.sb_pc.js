// // 进入页面就执行
// window.onload=function()
// {
	
// 	// 文字输入特效
// 	let divTyping = document.getElementById('etext')
// 	let i = 0,
// 		timer = 0,
// 		str = '千里之行，始于足下。'
// 	function typing()
// 	{
// 		if (i <= str.length)
// 		{
// 			divTyping.innerHTML = str.slice(0, i++) + '_'
// 			timer = setTimeout(typing, 80)
// 		}else
// 		 {
// 			divTyping.innerHTML = str //结束打字,移除 _ 光标
// 			clearTimeout(timer)
// 			$("#ebga").animate({width:'100%',height:'100%'},800);
// 			setTimeout(function(){$("#content").animate({height:'80%'},100)},300);
// 		}
// 	}
// 	typing();
	
// 	setTimeout(function(){$("#xuna").show();},8000);
	
// 	//单击选择框-宽度变化
// 	$("#cleft_li01").click(function(){
// 		$("#cleft_li01").css({"background-color":"#ececec"});
// 		$("#cleft_li02").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li03").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li04").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li05").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li07").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li08").css({"background-color":"#f9f9f9"});
// 		$("#nav01").animate({"left":"0%"},800);
// 		$("#nav02").animate({"left":"0%"},800);
// 		$("#nav03").animate({"left":"0%"},800);
// 		$("#nav04").animate({"left":"0%"},800);
// 		$("#nav05").animate({"left":"0%"},800);
// 		$("#nav07").animate({"left":"0%"},800);
// 		$("#nav08").animate({"left":"0%"},800);
		
// 	})
// 	$("#cleft_li02").click(function(){
// 		$("#cleft_li01").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li02").css({"background-color":"#ececec"});
// 		$("#cleft_li03").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li04").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li05").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li07").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li08").css({"background-color":"#f9f9f9"});
// 		$("#nav01").animate({"left":"-100%"},800);
// 		$("#nav02").animate({"left":"0%"},800);
// 		$("#nav03").animate({"left":"0%"},800);
// 		$("#nav04").animate({"left":"0%"},800);
// 		$("#nav05").animate({"left":"0%"},800);
// 		$("#nav07").animate({"left":"0%"},800);
// 		$("#nav08").animate({"left":"0%"},800);
// 	})
// 	$("#cleft_li03").click(function(){
// 		$("#cleft_li01").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li02").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li03").css({"background-color":"#ececec"});
// 		$("#cleft_li04").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li05").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li07").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li08").css({"background-color":"#f9f9f9"});
// 		$("#nav01").animate({"left":"-100%"},800);
// 		$("#nav02").animate({"left":"-100%"},800);
// 		$("#nav03").animate({"left":"0%"},800);
// 		$("#nav04").animate({"left":"0%"},800);
// 		$("#nav05").animate({"left":"0%"},800);
// 		$("#nav07").animate({"left":"0%"},800);
// 		$("#nav08").animate({"left":"0%"},800);
// 	})
// 	$("#cleft_li04").click(function(){
// 		$("#cleft_li01").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li02").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li03").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li04").css({"background-color":"#ececec"});
// 		$("#cleft_li05").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li07").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li08").css({"background-color":"#f9f9f9"});
// 		$("#nav01").animate({"left":"-100%"},800);
// 		$("#nav02").animate({"left":"-100%"},800);
// 		$("#nav03").animate({"left":"-100%"},800);
// 		$("#nav04").animate({"left":"0%"},800);
// 		$("#nav05").animate({"left":"0%"},800);
// 		$("#nav07").animate({"left":"0%"},800);
// 		$("#nav08").animate({"left":"0%"},800);
// 	})
// 	$("#cleft_li05").click(function(){
// 		$("#cleft_li01").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li02").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li03").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li04").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li05").css({"background-color":"#ececec"});
// 		$("#cleft_li07").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li08").css({"background-color":"#f9f9f9"});
// 		$("#nav01").animate({"left":"-100%"},800);
// 		$("#nav02").animate({"left":"-100%"},800);
// 		$("#nav03").animate({"left":"-100%"},800);
// 		$("#nav04").animate({"left":"-100%"},800);
// 		$("#nav05").animate({"left":"0%"},800);
// 		$("#nav07").animate({"left":"0%"},800);
// 		$("#nav08").animate({"left":"0%"},800);
// 	})
	
// 	$("#cleft_li07").click(function(){
// 		$("#cleft_li01").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li02").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li03").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li04").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li05").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li07").css({"background-color":"#ececec"});
// 		$("#cleft_li08").css({"background-color":"#f9f9f9"});
// 		$("#nav01").animate({"left":"-100%"},800);
// 		$("#nav02").animate({"left":"-100%"},800);
// 		$("#nav03").animate({"left":"-100%"},800);
// 		$("#nav04").animate({"left":"-100%"},800);
// 		$("#nav05").animate({"left":"-100%"},800);
// 		$("#nav07").animate({"left":"0%"},800);
// 		$("#nav08").animate({"left":"0%"},800);
// 	})

// 	$("#cleft_li08").click(function(){
// 		$("#cleft_li01").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li02").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li03").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li04").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li05").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li07").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li08").css({"background-color":"#ececec"});
// 		$("#nav01").animate({"left":"-100%"},800);
// 		$("#nav02").animate({"left":"-100%"},800);
// 		$("#nav03").animate({"left":"-100%"},800);
// 		$("#nav04").animate({"left":"-100%"},800);
// 		$("#nav05").animate({"left":"-100%"},800);
// 		$("#nav07").animate({"left":"-100%"},800);
// 		$("#nav08").animate({"left":"0%"},800);
// 	})	






// 	$(".nav01_but01").click(function(){
// 		$("#cleft_li01").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li02").css({"background-color":"#ececec"});
// 		$("#cleft_li03").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li04").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li05").css({"background-color":"#f9f9f9"});
// 		$("#nav01").animate({"left":"-100%"},800);
// 		$("#nav02").animate({"left":"0%"},800);
// 		$("#nav03").animate({"left":"0%"},800);
// 		$("#nav04").animate({"left":"0%"},800);
// 		$("#nav05").animate({"left":"0%"},800);
// 	})
// 	$(".nav01_but02").click(function(){
// 		$("#cleft_li01").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li02").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li03").css({"background-color":"#ececec"});
// 		$("#cleft_li04").css({"background-color":"#f9f9f9"});
// 		$("#cleft_li05").css({"background-color":"#f9f9f9"});
// 		$("#nav01").animate({"left":"-100%"},800);
// 		$("#nav02").animate({"left":"-100%"},800);
// 		$("#nav03").animate({"left":"-100%"},800);
// 		$("#nav04").animate({"left":"0%"},800);
// 		$("#nav05").animate({"left":"0%"},800);
// 	})
	
// 	//展示按钮,如果宽度大于30就执行收回，小于就执行释放 --- 缺陷占不使用
// 	// $(".cleft_bottom").click(function(){
// 	// 	var cleft_width = $("#cleft").width();
// 	// 	if(cleft_width > 30){
// 	// 		cleft_widx();
// 	// 	}else{
// 	// 		cleft_wid();
// 	// 	}
// 	// })
// }
window.onload = function() {
    // // 文字输入特效
    // let divTyping = document.getElementById('etext');
    // let i = 0, timer = 0, str = '千里之行，始于足下。';
    // function typing() {
    //     if (i <= str.length) {
    //         divTyping.innerHTML = str.slice(0, i++) + '_';
    //         timer = setTimeout(typing, 80);
    //     } else {
    //         divTyping.innerHTML = str;
    //         clearTimeout(timer);
    //         $("#ebga").animate({ width: '100%', height: '100%' }, 800);
    //         setTimeout(function() { $("#content").animate({ height: '80%' }, 100) }, 300);
    //     }
    // }
    // typing();

    // 单击选择框-宽度变化
    function handleClick(index) {
        const listItems = $("#cleft_li01, #cleft_li02, #cleft_li03, #cleft_li04, #cleft_li05, #cleft_li07, #cleft_li08");
        listItems.css("background-color", "#f9f9f9");
        $(`#cleft_li${index}`).css("background-color", "#ececec");

        const navs = ["#nav01", "#nav02", "#nav03", "#nav04", "#nav05", "#nav07", "#nav08"];
        navs.forEach((nav, i) => {
            $(nav).animate({ left: i === index - 1 ? "0%" : "-100%" }, 800);
        });
    }

    $("#cleft_li01").click(() => handleClick(1));
    $("#cleft_li02").click(() => handleClick(2));
    $("#cleft_li03").click(() => handleClick(3));
    $("#cleft_li04").click(() => handleClick(4));
    $("#cleft_li05").click(() => handleClick(5));
    $("#cleft_li07").click(() => handleClick(7));
    $("#cleft_li08").click(() => handleClick(8));

    $(".nav01_but01").click(() => handleClick(2));
    $(".nav01_but02").click(() => handleClick(4));

    setTimeout(() => $("#xuna").show(), 8000);
};