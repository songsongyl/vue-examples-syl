// 进入页面就执行
window.onload = function () {
    // 文字输入特效
  
    let i = 0,
        timer = 0,
        str = '千里之行，始于足下。'
    function typing() {
        let divTyping = document.getElementById('etext')
        if (divTyping) {
            if (i <= str.length) {
                divTyping.innerHTML = str.slice(0, i++) + '_'
                timer = setTimeout(typing, 80)
            } else {
                divTyping.innerHTML = str //结束打字,移除 _ 光标
                clearTimeout(timer)
                $("#ebga").animate({ width: '100%', height: '100%' }, 800);
                setTimeout(function () { $("#content").animate({ height: '80%' }, 100) }, 300);
            }
        } else {
            console.log("不存在");
        }
       
    }
    window.onload = function () { 
        typing();
    }

    setTimeout(function () { $("#xuna").show(); }, 8000);

    //单击选择框-宽度变化
    $("#cleft_li01").click(function () {
        $("#cleft_li01").css({ "background-color": "#ececec" });
        $("#cleft_li02").css({ "background-color": "#f9f9f9" });
        $("#cleft_li03").css({ "background-color": "#f9f9f9" });
        $("#cleft_li04").css({ "background-color": "#f9f9f9" });
        $("#cleft_li05").css({ "background-color": "#f9f9f9" });
        $("#cleft_li07").css({ "background-color": "#f9f9f9" });
        $("#cleft_li08").css({ "background-color": "#f9f9f9" });
        $("#nav01").animate({ "left": "0%" }, 800);
        $("#nav02").animate({ "left": "0%" }, 800);
        $("#nav03").animate({ "left": "0%" }, 800);
        $("#nav04").animate({ "left": "0%" }, 800);
        $("#nav05").animate({ "left": "0%" }, 800);
        $("#nav07").animate({ "left": "0%" }, 800);
        $("#nav08").animate({ "left": "0%" }, 800);

    })
    $("#cleft_li02").click(function () {
        $("#cleft_li01").css({ "background-color": "#f9f9f9" });
        $("#cleft_li02").css({ "background-color": "#ececec" });
        $("#cleft_li03").css({ "background-color": "#f9f9f9" });
        $("#cleft_li04").css({ "background-color": "#f9f9f9" });
        $("#cleft_li05").css({ "background-color": "#f9f9f9" });
        $("#cleft_li07").css({ "background-color": "#f9f9f9" });
        $("#cleft_li08").css({ "background-color": "#f9f9f9" });
        $("#nav01").animate({ "left": "-100%" }, 800);
        $("#nav02").animate({ "left": "0%" }, 800);
        $("#nav03").animate({ "left": "0%" }, 800);
        $("#nav04").animate({ "left": "0%" }, 800);
        $("#nav05").animate({ "left": "0%" }, 800);
        $("#nav07").animate({ "left": "0%" }, 800);
        $("#nav08").animate({ "left": "0%" }, 800);
    })
    $("#cleft_li03").click(function () {
        $("#cleft_li01").css({ "background-color": "#f9f9f9" });
        $("#cleft_li02").css({ "background-color": "#f9f9f9" });
        $("#cleft_li03").css({ "background-color": "#ececec" });
        $("#cleft_li04").css({ "background-color": "#f9f9f9" });
        $("#cleft_li05").css({ "background-color": "#f9f9f9" });
        $("#cleft_li07").css({ "background-color": "#f9f9f9" });
        $("#cleft_li08").css({ "background-color": "#f9f9f9" });
        $("#nav01").animate({ "left": "-100%" }, 800);
        $("#nav02").animate({ "left": "-100%" }, 800);
        $("#nav03").animate({ "left": "0%" }, 800);
        $("#nav04").animate({ "left": "0%" }, 800);
        $("#nav05").animate({ "left": "0%" }, 800);
        $("#nav07").animate({ "left": "0%" }, 800);
        $("#nav08").animate({ "left": "0%" }, 800);
    })
    $("#cleft_li04").click(function () {
        $("#cleft_li01").css({ "background-color": "#f9f9f9" });
        $("#cleft_li02").css({ "background-color": "#f9f9f9" });
        $("#cleft_li03").css({ "background-color": "#f9f9f9" });
        $("#cleft_li04").css({ "background-color": "#ececec" });
        $("#cleft_li05").css({ "background-color": "#f9f9f9" });
        $("#cleft_li07").css({ "background-color": "#f9f9f9" });
        $("#cleft_li08").css({ "background-color": "#f9f9f9" });
        $("#nav01").animate({ "left": "-100%" }, 800);
        $("#nav02").animate({ "left": "-100%" }, 800);
        $("#nav03").animate({ "left": "-100%" }, 800);
        $("#nav04").animate({ "left": "0%" }, 800);
        $("#nav05").animate({ "left": "0%" }, 800);
        $("#nav07").animate({ "left": "0%" }, 800);
        $("#nav08").animate({ "left": "0%" }, 800);
    })
    $("#cleft_li05").click(function () {
        $("#cleft_li01").css({ "background-color": "#f9f9f9" });
        $("#cleft_li02").css({ "background-color": "#f9f9f9" });
        $("#cleft_li03").css({ "background-color": "#f9f9f9" });
        $("#cleft_li04").css({ "background-color": "#f9f9f9" });
        $("#cleft_li05").css({ "background-color": "#ececec" });
        $("#cleft_li07").css({ "background-color": "#f9f9f9" });
        $("#cleft_li08").css({ "background-color": "#f9f9f9" });
        $("#nav01").animate({ "left": "-100%" }, 800);
        $("#nav02").animate({ "left": "-100%" }, 800);
        $("#nav03").animate({ "left": "-100%" }, 800);
        $("#nav04").animate({ "left": "-100%" }, 800);
        $("#nav05").animate({ "left": "0%" }, 800);
        $("#nav07").animate({ "left": "0%" }, 800);
        $("#nav08").animate({ "left": "0%" }, 800);
    })

    $("#cleft_li07").click(function () {
        $("#cleft_li01").css({ "background-color": "#f9f9f9" });
        $("#cleft_li02").css({ "background-color": "#f9f9f9" });
        $("#cleft_li03").css({ "background-color": "#f9f9f9" });
        $("#cleft_li04").css({ "background-color": "#f9f9f9" });
        $("#cleft_li05").css({ "background-color": "#f9f9f9" });
        $("#cleft_li07").css({ "background-color": "#ececec" });
        $("#cleft_li08").css({ "background-color": "#f9f9f9" });
        $("#nav01").animate({ "left": "-100%" }, 800);
        $("#nav02").animate({ "left": "-100%" }, 800);
        $("#nav03").animate({ "left": "-100%" }, 800);
        $("#nav04").animate({ "left": "-100%" }, 800);
        $("#nav05").animate({ "left": "-100%" }, 800);
        $("#nav07").animate({ "left": "0%" }, 800);
        $("#nav08").animate({ "left": "0%" }, 800);
    })

    $("#cleft_li08").click(function () {
        $("#cleft_li01").css({ "background-color": "#f9f9f9" });
        $("#cleft_li02").css({ "background-color": "#f9f9f9" });
        $("#cleft_li03").css({ "background-color": "#f9f9f9" });
        $("#cleft_li04").css({ "background-color": "#f9f9f9" });
        $("#cleft_li05").css({ "background-color": "#f9f9f9" });
        $("#cleft_li07").css({ "background-color": "#f9f9f9" });
        $("#cleft_li08").css({ "background-color": "#ececec" });
        $("#nav01").animate({ "left": "-100%" }, 800);
        $("#nav02").animate({ "left": "-100%" }, 800);
        $("#nav03").animate({ "left": "-100%" }, 800);
        $("#nav04").animate({ "left": "-100%" }, 800);
        $("#nav05").animate({ "left": "-100%" }, 800);
        $("#nav07").animate({ "left": "-100%" }, 800);
        $("#nav08").animate({ "left": "0%" }, 800);
    })






    $(".nav01_but01").click(function () {
        $("#cleft_li01").css({ "background-color": "#f9f9f9" });
        $("#cleft_li02").css({ "background-color": "#ececec" });
        $("#cleft_li03").css({ "background-color": "#f9f9f9" });
        $("#cleft_li04").css({ "background-color": "#f9f9f9" });
        $("#cleft_li05").css({ "background-color": "#f9f9f9" });
        $("#nav01").animate({ "left": "-100%" }, 800);
        $("#nav02").animate({ "left": "0%" }, 800);
        $("#nav03").animate({ "left": "0%" }, 800);
        $("#nav04").animate({ "left": "0%" }, 800);
        $("#nav05").animate({ "left": "0%" }, 800);
    })
    $(".nav01_but02").click(function () {
        $("#cleft_li01").css({ "background-color": "#f9f9f9" });
        $("#cleft_li02").css({ "background-color": "#f9f9f9" });
        $("#cleft_li03").css({ "background-color": "#ececec" });
        $("#cleft_li04").css({ "background-color": "#f9f9f9" });
        $("#cleft_li05").css({ "background-color": "#f9f9f9" });
        $("#nav01").animate({ "left": "-100%" }, 800);
        $("#nav02").animate({ "left": "-100%" }, 800);
        $("#nav03").animate({ "left": "-100%" }, 800);
        $("#nav04").animate({ "left": "0%" }, 800);
        $("#nav05").animate({ "left": "0%" }, 800);
    })

   
}