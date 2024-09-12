console.log("1111");
cPic.oninput = function(){
    changeC();
};


let colorChange;

function changeC(){

     ctx.clearRect(0, 0, canvasW.width, canvasW.height);
     var finWord = document.getElementById( "two" );
     var finWordsrc= randomItem();

    function randomItem() {
        var word = "튜브 포도 사과 다빈치관 교수님 커피 노트북 패딩 아이스크림 스마일 시계 연필 지우개 신발 자전거 편의점 단풍 신문 새 수박 닭 알람 개나리 장미 포크 침대 의자 버스 택시 펜 전화기 안경 마스크 집 달 의사 병원 반지";
        var wordArr =word.split(" ")

        var wordRandom= Math.floor(Math.random() *wordArr.length);
        finWord.innerText= wordArr[wordRandom];
    }


// var finWord2 = drawSet.getElementById( "two00" );
// finWord2.innerText=finWordsrc.cloneNode();


    ctx.strokeStyle = cPic.value; 
    brushCircle.style.backgroundColor = cPic.value; 

    //hex값 innerHTML에 입력
    var f = document.getElementById( "aV" ).innerHTML = cPic.value;

    //hex값 Rgb으로 변환
    var k = document.getElementById( "cV" ).innerHTML = hexToRgb();
            
    // rgb값 나누기  
    var fff = k.trim().replace( "rgb(", "" );
    var sss = fff.trim().replace( ")", "" );
    var RgbnumArr =sss.split(",");
    console.log(RgbnumArr[0],RgbnumArr[1],RgbnumArr[2]);

    let r1 = RgbnumArr[0]
    let g2 = RgbnumArr[1]
    let b2 = RgbnumArr[2]

    let RGBToHSB = function(r, g, b) {
                      r /= 255;
                      g /= 255;
                      b /= 255;
                      let v = Math.max(r, g, b),
                      n = v - Math.min(r, g, b);
                      let h =
                      n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
                      return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
                    };

   // hsb값 나누기  
    var hhh = RGBToHSB(r1, g2, b2);

    //main 박스 생성. color1
    let mm = document.getElementById("main");
    mm.style.backgroundColor = cPic.value;
    mm.style.boxShadow =  "2px 2px 6px rgba(0,0,0,0.3)" ;

    //범위 랜덤 코드
     function randomBH(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random()*(max-min+1)) + min;
    }

    //sub1박스 생성. color2
            //hue 랜덤 컬러 조절
            function makeH1() {
                var makea1= randomBH(hhh[0]-60,hhh[0]+60);
                let i=makea1

                if(i<0){
                    i=i+60;
                    return i;
                
                }
                else if(i>360) {
                    i=i-60;
                    return i;

                }
                else  {return i;};

            }

            
            function makeS() {
                var makeb= hhh[1]
                return makeb+ "%";
            }

            //light 랜덤 컬러 조절
            function makeL() {
                var makec= hhh[2];
                return makec+ "%";
            }

    //sub2박스 생성
            //hue 랜덤 컬러 조절
            function makeH() {
                var makea= hhh[0]
                return makea;
            }
            //sat 랜덤 컬러 조절
            function makeS2() {
                var makes2= randomBH(hhh[1]-40,hhh[1]+40);
                let j=makes2

                if(j<0){
                    j=j+40;
                    return j+ "%";
                }

                else if(j>100) {
                    j=j-40;
                    return j+ "%";
                }

                else  {return j+ "%";};
            }
            //light 랜덤 컬러 조절
            function makeL2() {
                var makec2= randomBH(50,100);
                return makec2+ "%";
            }

            function makeS4() {
                var makeb4= randomBH(80,100);
                return makeb4+ "%";
            }


            function makeH4() {
                var makea4=hhh[0]+180;
                let k=makea4

                if(k>360){
                    k=k-360;
                    return k;
                }
                else  {return k;};
            }

    //박스 hsl 조합하기 
let s1 = document.getElementById("sub1");
s1.style.backgroundColor = 
"hsl(" + makeH1() + "," + makeS()+"," + makeL2()+")";
s1.style.boxShadow =  "2px 2px 6px rgba(0,0,0,0.3)" ;



let s2 = document.getElementById("sub2");
    s2.style.backgroundColor = 
    "hsl(" + makeH() + "," + makeS2()+"," + makeL2()+")";
    s2.style.boxShadow =  "2px 2px 6px rgba(0,0,0,0.3)" ;
  
    let s3 = document.getElementById("sub3");
    s3.style.backgroundColor = 
    "hsl(" + makeH() + "," + makeS2()+"," + makeL2()+")";
    s3.style.boxShadow =  "2px 2px 6px rgba(0,0,0,0.3)" ;



    let s4 = document.getElementById("sub4");
    s4.style.backgroundColor = 
    "hsl(" + makeH4() + "," + makeS4()+"," + makeL2()+")";
    s4.style.boxShadow =  "2px 2px 6px rgba(0,0,0,0.3)" ;
 


    //#Hex 값으로 바꾸기
    var f1=document.getElementById('sub1').style.backgroundColor;
    var f2=document.getElementById('sub2').style.backgroundColor;
    var f3=document.getElementById('sub3').style.backgroundColor;
    var f4=document.getElementById('sub4').style.backgroundColor;



    function rgbToHex(f1){
        if(f1.charAt(0)=='r'){
            f1=f1.replace('rgb(','').replace(')','').split(',');
            var r=parseInt(col[0], 10).toString(16);
            var g=parseInt(col[1], 10).toString(16);
            var b=parseInt(col[2], 10).toString(16);
            r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
            var colHex='#'+r+g+b;
            return colHex;
        }
    }
      
    function rgbToHex(f2){
        if(f2.charAt(0)=='r'){
            f2=f2.replace('rgb(','').replace(')','').split(',');
            var r=parseInt(col[0], 10).toString(16);
            var g=parseInt(col[1], 10).toString(16);
            var b=parseInt(col[2], 10).toString(16);
            r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
            var colHex='#'+r+g+b;
            return colHex;
        }
    }


    function rgbToHex(f3){
        if(f3.charAt(0)=='r'){
            f3=f3.replace('rgb(','').replace(')','').split(',');
            var r=parseInt(col[0], 10).toString(16);
            var g=parseInt(col[1], 10).toString(16);
            var b=parseInt(col[2], 10).toString(16);
            r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
            var colHex='#'+r+g+b;
            return colHex;
        }
    }

    function rgbToHex(f4){
        if(f4.charAt(0)=='r'){
            f4=f4.replace('rgb(','').replace(')','').split(',');
            var r=parseInt(f4[0], 10).toString(16);
            var g=parseInt(f4[1], 10).toString(16);
            var b=parseInt(f4[2], 10).toString(16);
            r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
            var colHex='#'+r+g+b;
            return colHex;
        }
    }
    
    var c1 = document.getElementById( "aV1" ).innerHTML = rgbToHex(f1);
    document.getElementById( "aV2" ).innerHTML = rgbToHex(f2);
    document.getElementById( "aV3" ).innerHTML = rgbToHex(f3);
    document.getElementById( "aV4" ).innerHTML = rgbToHex(f4);

    var bg1 = cPic.value;
    var bg2 = aV1.innerHTML;
    var bg3 = aV2.innerHTML;
    var bg4 = aV3.innerHTML;
    var bg5 = aV4.innerHTML;
    console.log(bg1,bg2,bg3,bg4,bg5);
    bggr.style.background = "linear-gradient("+"to right" +"," + 
    bg1 + " ,"  + bg2 + "," + bg3  + ","  + bg4+ ","  + bg5 + ")";
}


//rgb값 표시 코드//	
function hexToRgb ( f ){ 
    /* 맨 앞의 "#" 기호를 삭제하기. */ 
    var v =cPic.value;
    var hex = v.trim().replace( "#", "" ); 
    
    /* rgb로 각각 분리해서 배열에 담기. */ 
    var rgb = ( 3 === hex.length ) ? 
		hex.match( /[a-f\d]/gi ) : hex.match( /[a-f\d]{2}/gi );     
    
    rgb.forEach(function (str, x, arr){     
        /* rgb 각각의 헥사값이 한자리일 경우, 두자리로 변경하기. */ 
        if ( str.length == 1 ) str = str + str; 
        
        /* 10진수로 변환하기. */ 
        arr[ x ] = parseInt( str, 16 ); 
    }); 
    
    return "rgb(" + rgb.join(", ") + ")"; 
    
} 


//캔버스
var pos = {
    drawable : false,
    x : -1,
    y : -1,
};

var canvasW = document.getElementById('canvasW');
var ctx = canvasW.getContext('2d');
var rect = canvasW.getBoundingClientRect();  // 터치 스크린

// 스타일 추가
 ctx.lineCap = 'round';
 ctx.lineJoin = 'round';

canvasW.addEventListener("mousedown", listener);
canvasW.addEventListener("mousemove", listener);
canvasW.addEventListener("mouseup", listener);
canvasW.addEventListener("mouseout", listener);

/// 터치 스크린
canvasW.addEventListener("touchstart", listener);
canvasW.addEventListener("touchmove", listener);
canvasW.addEventListener("touchend", listener);

function listener(e){
    switch(e.type){
        case "mousedown":
        drawStart(e);
        break;
        case "mousemove":
        if(pos.drawable){
             draw(e);
        }
        break;
        case "mouseout":
        case "mouseup":
            drawEnd();
            break;
        case "touchstart":
            touchStart(e);
            break;
        case "touchmove":
        if(pos.drawable)
            touch(e);
        break;
        case "touchend":
            drawEnd();
            break;
        default:
    }
}


function drawStart(e){
    pos.drawable = true;
    ctx.beginPath();
    pos.x = e.offsetX;
    pos.y = e.offsetY;
    ctx.moveTo(pos.x, pos.y);
}

function touchStart(e){
    pos.drawable = true;
    ctx.beginPath();
    pos.x = e.touches[0].pageX - rect.left
    pos.y = e.touches[0].pageY - rect.top
    ctx.moveTo(pos.x, pos.y);
}

function draw(e){
    ctx.lineTo(e.offsetX, e.offsetY);
    pos.x = e.offsetX;
    pos.y = e.offsetY;
    ctx.stroke();
}

function touch(e){
    ctx.lineTo(e.touches[0].pageX - rect.left, e.touches[0].pageY - rect.top);
    pos.x = e.touches[0].pageX - rect.left;
    pos.y = e.touches[0].pageY - rect.top;
    ctx.stroke();
}

function drawEnd(){
    pos.drawable = false;
    pos.x = -1;
    pos.y = -1;
}
  

main.onclick = function change(){
    colorChange = main.style.backgroundColor;
    ctx.strokeStyle = colorChange; 
    brushCircle.style.backgroundColor = colorChange; 

}

sub1.onclick = function change(){
    const colorChange = sub1.style.backgroundColor;
    ctx.strokeStyle = colorChange;
    brushCircle.style.backgroundColor = colorChange;  
}

sub2.onclick = function change(){
    const colorChange = sub2.style.backgroundColor;
    ctx.strokeStyle = colorChange; 
    brushCircle.style.backgroundColor = colorChange; 
}
sub3.onclick = function change(){
    const colorChange = sub3.style.backgroundColor;
    ctx.strokeStyle = colorChange; 
    brushCircle.style.backgroundColor = colorChange; 
}
sub4.onclick = function change(){
    const colorChange = sub4.style.backgroundColor;
    ctx.strokeStyle = colorChange; 
    brushCircle.style.backgroundColor = colorChange; 
}

function erase(){
    ctx.strokeStyle = "white"; 
    brushCircle.style.backgroundColor = colorChange; 
}



jsRange.oninput=function(){
    const range = document.getElementById("jsRange");
    const size = jsRange.value;
    ctx.lineWidth = size;
    brushCircle.style.width = jsRange.value + "px";
    brushCircle.style.height = jsRange.value + "px";
}

function Actions(){
    ctx.clearRect(0, 0, canvasW.width, canvasW.height);
}



console.log("kkk");
function screenShot(input,output) {
        html2canvas(document.getElementById(input), {
            onrendered: function(canvas) {  
                if(output == null){
                    console.log("kkkss");
                //output이 없으면 도큐먼트에 추가합니다.
                    document.body.appendChild(canvas);
                }else{
                    let a = document.getElementById(output);
                    let s = document.createElement("img");
                //여기서 생성되는 썸네일의 크기를 조절할 수 있습니다.
                    s.style.width = "200px";
                    s.style.height = "auto";
                    s.className = "out";
                    s.src = canvas.toDataURL('image/png');
                    s.style.display ="inline";
                    s.style.margin= "5px";
                    s.style.aspectRatio= "13 / 7"; 

                    a.appendChild(s);

                    s.onclick = function (){
                        var t = document.getElementsByClassName("out");
                        for(let i=0; i<t.length; i++){
                            t[i].style.border = "none";
                        }
                        this.style.boxSizing = "border-box";
                        this.style.border = "3px solid gray";
                        let finImg = document.createElement("img");
    
                        finImg.src = canvas.toDataURL('image/png');
                        finImg.style.width = "200px";
                        finImg.style.height = "auto";
                        finImg.ClassName = "finImgss";
                         //document.body.appendChild(finImg);
                         
                       download2.onclick = function download(){
                        var download = document.getElementById("download");
                        var imageooo = finImg.src;
                        console.log(imageooo);
                        imageooo.replace("image/png", "image/octet-stream");
                            download.setAttribute("href", imageooo);
                            download.setAttribute("download","image-name.png");
                        };
                                                  
                       upload.onclick = function(){
                            let painter = prompt('이름을 입력해주세요.', "");

                            

                            alert(`GALLERRY에서 확인해보세요!!`);
                            
                            

                            let paintData = "guest=" + "@" + painter + "@" + finImg.src ;

                            ajaxBH("POST","write.php",paintData,result);     
                             

                          //  if(input=null){
                            //history.back();}
                                 
                          }  

                         

                        
                    }                                                    


               }
           }
        });
}


let sss = document.getElementById("topColor");
/*
window.onscroll = function(){
        console.log(document.documentElement.scrollTop, document.body.scrollTop);

        //스크롤 값이 브라우저에 따라 두 가지가 존재하고 둘 중에 하나만 값을 가지기 때문에
        //모든 브라우저에서 작동할 수 있도록 아래 두 값을 더합니다.
        
        var t = document.documentElement.scrollTop + document.body.scrollTop;

        if(t < 500){
            sss.style.opacity = "0";
            /*let stp = rightTop.getElementsById("cPic");
            stp.className=  "slidersCo";
            let ccd = document.getElementByClassName("slidersCo"); 
            ccd.id = document.getElementById("main"); 


        }else{
            sss.style.opacity = "1";
        }
    }
*/

screenshot.onclick = function() { 
    var fin = screenShot("capture","monitor");
}

guestGet.onclick = function(){
    var link = "https://kjm001110.cafe24.com/2index.html";
    window.open(link);
}

/*
addWord.onclick = function(){
    let tu = document.getElementById("randomword");
    console.log(tu.value);
    let sendWord = "guest2=" + "[@]" + tu.value;
   ajaxBH("POST","writerName.php",sendWord,callBackk);
}

function callBackk(getdatas){
    console.log(getdatas);
}

function guest2Load(){
  ajaxBH("POST","randomset.txt",null,processList);
};

function processList(data){
    let g = data.split("[@]");
    for(var i=0; i<g.length;i++){
        let gg = g[i] + "<br>";
        console.log(gg);
    }
}
*/

function ajaxBH(method,url,data,callBack) {
    var xmlhttp;

    if (window.XMLHttpRequest)
    { xmlhttp=new XMLHttpRequest(); }
    else
    { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }
    
    if(method=="POST")
    { xmlhttp.open("POST",url,true); }
    else if(method=="GET")
    { xmlhttp.open("GET",url,true); }
    
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data);

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        { callBack(xmlhttp.responseText); }
    }
}
