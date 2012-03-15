var bgrounds=new Array(
"http://img-fotki.yandex.ru/get/4429/23478606.4/0_67a5e_b5feb5d9_L",
"http://img-fotki.yandex.ru/get/5414/23478606.4/0_678fd_b72f43d5_L",
"http://img-fotki.yandex.ru/get/5502/shal1928.3/0_4e97c_a08cfa4_L");

function changeBg() 
{ 
    var i=Math.floor(bgrounds.length*Math.random());
    document.body.background=bgrounds[i];
    setTimeout('changeBg()', 5000);
    
}

