$(function(){

    console.log("hello JavaScript from JS file");

    var value = 1;
    console.log(value);
    value = 5;
    console.log(value);

    var result = 1 + 1;
    console.log(result);
    result = "1" + "1";
    console.log(result);

    console.log("四則演算----------");
    console.log(1+2);
    console.log(3-1);
    console.log(2*3);
    console.log(3/2);
    console.log(3%2);

    console.log("代入演算----------");
    var count = 0;
    count = 1;
    console.log(count);
    count += 1;
    console.log(count);
    count -= 1;
    console.log(count);
    count *= 6;
    console.log(count);
    count /= 2;
    console.log(count);
    count %= 2;
    console.log(count);

    console.log("インクリメント・デクリメント----------");
    count = 1;
    console.log(++count);
    console.log(count++);
    console.log(--count);
    console.log(count--);
    console.log(count);

    console.log("文字列の分割----------");
    var moji = "沖縄,北海道,東京,香川,福岡,熊本";
    moji = moji.split(",");
    console.log(moji);

    console.log("配列----------");
    var regions = ["KOZA", "EBETSU", "TAKAMATSU"];
    console.log(regions);
    console.log(regions[1]);

    console.log("連想配列----------");
    var regios = {
        koza: "沖縄県",
        takamatsu: "香川県",
        ebetsu: "北海道",
    }
    console.log(regions);
    console.log(regions["koza"]);

    console.log("真偽値--------");
    console.log(1 == "1");
    console.log(1 === "1");
    console.log(1 != 2);
    console.log(true);
    console.log(!true);
    console.log(1 > 1);
    console.log(1 >= 1);
    console.log(1 < 1);
    console.log(1 <= 1);


    console.log("条件文--------");

    var licence_flag = 0;
    var time_at = 23;
    if (licence_flag === 1) {
        console.log("車を運転する");
    } else if (time_at<24) {
      console.log("バスに乗る");
    }else{
      console.log("タクシーに乗る")
    }

    for (var i=0; i<10; i++) {
       
    }

    // if (条件式){
    //   条件式が true だったときの処理
    // }

    // var h1_node = document.getElementById("h1_node");
    // console.log(h1_node);
    // h1_node.textContent = "ノードを更新";

    // var btn_node = document.getElementById("btn");
    // btn_node.addEventListener("click", changeText);

    // function changeText() {
    //     h1_node.textContent = "押したなー！";
    // }
    
    // $("#h1_node").text("jQueryで変更");

    // $("#btnJquery").on("click", function(){
    //     $("#h1_node").text("jQueryで文字変");
    // });





    // $("#btn").on("click",function(){
    //   $("img").css("width","600px");
    // })
    
    // $("#btn1").on("")

    // $("#en-btn").on("click",function(){
    //     $("img").css("width","600px");
    //   })

});