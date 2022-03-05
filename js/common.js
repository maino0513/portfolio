$(function(){  //jQuery開始
        
    // console.log("Hello JavaScript from JS file");

    // var value = 1;
    // console.log(value);
    // value = 5;
    // console.log(value);
    // value = "Hello JavaScript from JS file";
    // console.log(value);

    // var result = 1 + 1;
    // console.log(result);
    // result = "1" + "1";
    // console.log(result);

    // console.log("四則演算-------------")
    // console.log(1+2);
    // console.log(3-1);
    // console.log(2*3);
    // console.log(3/2);
    // console.log(3%2);

    // console.log("代入演算-------------")
    // var count = 0;
    // count = 1;
    // console.log(count);
    // count += 1;
    // console.log(count);
    // count -= 1;
    // console.log(count);
    // count *= 6;
    // console.log(count);
    // count /= 2;
    // console.log(count);
    // count %= 2;
    // console.log(count);

    // console.log("インクリメント・デクリメント--------------")
    // count = 1;
    // console.log(++count);
    // console.log(count++);
    // console.log(--count);
    // console.log(count--);
    // console.log(count);

    // console.log("文字列の分割--------------");
    // var moji = "沖縄,北海道,東京,香川,福岡,熊本";
    // moji = moji.split(",");
    // console.log(moji)

    // console.log("配列--------------");
    // var regions = ["KOZA", "EBETSU", "TAKAMATSU"];
    // console.log(regions);
    // console.log(regions[1]);

    // console.log("連想配列--------------");
    // var regions = {
    //     koza: "沖縄県",
    //     takamatsu: "香川県",
    //     ebetsu: "北海道"
    // }
    // console.log(regions);
    // console.log(regions["koza"]);
    // console.log(regions["koza"]);

    // console.log("真偽値--------------");
    // console.log(1 == "1");
    // console.log(1 === "1");
    // console.log(1 != 2);
    // console.log(true);
    // console.log(!true);
    // console.log("1 > 1",1 > 1);
    // console.log("1 >= 1",1 >= 1);
    // console.log("1 < 1",1 < 1);
    // console.log("1 <= 1",1 <= 1);

    // console.log("条件文--------------");

    // var licence_flag = 0;
    // var time_at = 24;
    // if (licence_flag === 1) {
    //     console.log("車を運転する");    
    // } else if (time_at < 24) {
    //     console.log("バスに乗る");
    // }else{
    //     console.log("タクシーに乗る");
    // }

    // if (条件式) {
    //     条件式が true だった時の処理
    // } else if (条件式) { 上の条件式がfalseだった時に実行される
        // else if の 条件式が true だった場合
    //     条件式が false だった時の処理
    // }

    // console.log("条件文 問題--------------");
    // var limit = 10;
    // var getup = 8;

    // if (limit < getup) {
    //     console.log("遅刻です");
    // } else if (limit === getup) {
    //     console.log("ギリギリセーフ");
    // } else {
    //     console.log("よく頑張りました");
    // }

    // console.log("繰り返し文--------------");

    // for (初期値; 条件式; 増減式) {
    //     処理
    // }

    // var data = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ']
    // for (var i=0; i<10; i++){
    //     console.log(i, data[i]);
    // }

    // // for (var i=0; i<5; i++){
    // //     window.alert("!!!!!");
    // // }

    // console.log("関数--------------");
    // function 関数名(){
    //     関数内容
    // }

    // function greet(){
    //     console.log("こんにちは");
    // }
    // greet();
    // greet();
    // greet();
    // greet();

    // function greet(name, status){
    //     message = {
    //         "朝": "おはようございます",
    //         "昼": "こんにちは",
    //         "夜": "こんばんは",
    //     }
    //     console.log(name +"さん、"+message[status]);
    // }
    // greet("いとむら", "朝");
    // greet("いぐお", "昼");
    // greet("すずか", "夜");

    // 戻り値
    // function greet1(){
    //     console.log("こんにちは");
    // }
    // function greet2(){
    //     console.log("こんにちは");
    //     return "こんにちは";
    // }

    // // 戻り値無し
    // var result1;
    // result1 = greet1();
    // // 戻り値有り
    // var result2;
    // result2 = greet2();

    // console.log("greet1()戻り値無し", result1)
    // console.log("greet2()戻り値有り", result2)

    //DOM
    var h1_node = document.getElementById("h1_node");
    console.log(h1_node);
    h1_node.textContent = "ノードを更新";

    //イベント
    var btn_node = document.getElementById("btn");
    btn_node.addEventListener("click", changeText);

    function changeText() {
        h1_node.textContent = "押したなーーーーー！";
    }

    $("#h1_node").text("jQueryで変更");

    $("#btnJquery").on("click", function(){
        $("#h1_node").text("jQueryで文字変");
    });

});  //jQuery終了