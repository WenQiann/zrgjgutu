$(".one_four li").hover(function() {
    $(this).addClass("active");
    $(this).siblings(".one_four li").removeClass("active");
   
});
var bgaudiocount=0
$("#logo_play").on("click",function(){
    ++bgaudiocount;
    if(bgaudiocount % 2 == 1){   
        document.getElementById("audio").play();  
        $(".music").addClass("m1")
        $(".music2").addClass("m2")   
        $(".music3").addClass("m3")      
    }else{
        document.getElementById("audio").pause();
        $(".music").removeClass("m1")
        $(".music2").removeClass("m2")   
        $(".music3").removeClass("m3")
    }
})


var san = document.getElementsByClassName("sanjiao2")[0];
var san1 = document.getElementsByClassName("sanjiao")[1];
var san2 = document.getElementsByClassName("sanjiao4")[0];

san.onmouseover = function(){
      san.src = 'img/ia_200000139.png';
}
san.onmouseout = function(){
    san.src = 'img/ia_200000145.png';
}
san1.onmouseover = function(){
    san1.src = 'img/ia_200000139.png';
}
san1.onmouseout = function(){
  san1.src = 'img/ia_200000145.png';
}
san2.onmouseover = function(){
    san2.src = 'img/ia_200000139.png';
}
san2.onmouseout = function(){
  san2.src = 'img/ia_200000145.png';
}

$(".two_as a").hover(function() {
    $(this).addClass("one_lineup");
    $(this).siblings(".two_as a").removeClass("one_lineup");
   
});
window.onscroll = function (){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop)

        if($(window).scrollTop()<300){
            $(".returntop").fadeIn(200);
        }else{
            $(".returntop").fadeOut(200);
        }

        if(scrollTop > 600){
            $(".two_as").show()
        }else{
            $(".two_as").hide()
        }
        if(scrollTop > 1850 && scrollTop < 2600){
            $(".three_peo").show()
        }else{
            $(".three_peo").hide()
        }
        if(scrollTop > 2400 && scrollTop < 2900){
            $(".four_peo").show()
        }else{
            $(".four_peo").hide()
        }

        $(".returntop").on("click",function(){
            document.documentElement.scrollTop = document.body.scrollTop = 900
        })
        $(".reyurn_foot").on("click",function(){
            document.documentElement.scrollTop = document.body.scrollTop = 0
        })
        $(".time").on("click",function(){
            document.documentElement.scrollTop = document.body.scrollTop = 0
        })
        $(".story").on("click",function(){
            document.documentElement.scrollTop = document.body.scrollTop = 900
        })
        $(".news").on("click",function(){
            document.documentElement.scrollTop = document.body.scrollTop = 4200
        })
        $(".fac").on("click",function(){
            document.documentElement.scrollTop = document.body.scrollTop = 5400
        })
        $(".watch").on("click",function(){
            document.documentElement.scrollTop = document.body.scrollTop = 6300
        })

        if(scrollTop > 1800 && scrollTop < 2190){
            $(".three_bg1").css("height",$(".three_bg1").height()+1)
        } else if(scrollTop > 2190 && scrollTop < 2250){
            $(".three_bg1").css("height",$(".three_bg1").height()-1)
        }
        else{
            $(".three_bg1").css("height",639.5)
        }

        if(scrollTop > 2200 && scrollTop < 2400){
            $(".three_bg").css("height",$(".three_bg").height()+20)
            
        } else if(scrollTop > 2400 && scrollTop < 2550){
            $(".three_bg").css("height",$(".three_bg1").height()-20)
        }
        else{
            $(".three_bg").css("height",1357)
        }

        if(scrollTop > 1000 && scrollTop < 2300){
            $(".three_bg").show() 
        }else if(scrollTop > 2300 && scrollTop < 2600){
            $(".three_bg").hide()
            $(".four_meng").show()
        }else{
            $(".three_bg").css("height","")
            $(".four_meng").hide()
        }
        if(scrollTop > 2400 && scrollTop < 3200){
            $(".four_meng").show()
        }else{
            $(".four_meng").hide()
        }

        if(scrollTop > 2000 && scrollTop <2900){
            $(".four_bg").css("height",$(".four_bg").height()+5)
        }else{
            $(".four_bg").css("height",1800)
            
        }
        

        if(scrollTop > 2400 && scrollTop < 2900){
            $(".four_four").css("marginTop",1200)
        }else if(scrollTop > 2900 && scrollTop < 3900){
            $(".four_four").css("marginTop",1000)
        // }else if(scrollTop > 3400 && scrollTop < 3900){
        //     $(".four_four").css("marginTop",600)
        }
        else{
            $(".four_four").css("margin-top",1400)
        }


        setTimeout(function(){
            t=scrollTop;
        },3000)

}











