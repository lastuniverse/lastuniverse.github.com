//test

function getClientWidth() {
    return document.compatMode == 'CSS1Compat' && !window.opera ? document.documentElement.clientWidth : document.body.clientWidth;
}

function getClientHeight() {
    return document.compatMode == 'CSS1Compat' && !window.opera ? document.documentElement.clientHeight : document.body.clientHeight;
}

function getIntValueById(id, minvalue, maxvalue) {
    var a = document.getElementById(id);
    var b = parseInt(a.value);
    if (b < minvalue) {
        b = minvalue;
        a.value = b;
    }
    if (b > maxvalue) {
        b = maxvalue;
        a.value = b;
    }
    return b;
}

function getCheckedById(id) {
    var a = document.getElementById(id);
    var r = 0;
    if (a.checked) {
        r = 1;
    }
    return r;
}

function setCheckedById(id, value) {
    var a = document.getElementById(id);
    if (value) {
        a.checked = 'on';
    } else {
        a.checked = '';
    }
}

function setValueById(id, value) {
    var a = document.getElementById(id);
    a.value = value;
}

function say(str) {
    var console = document.getElementById('edit_textarea');
    console.innerHTML = str + "\n--------------------------------\n" + console.innerHTML;
}
function echo(str) {
    map_str += "\n" + str;
}

// использование Math.round() даст неравномерное распределение!
function getRandomInt(max)
{
  return Math.floor(Math.random() * (max + 1));
}

function fixWhich(e) {
  if (!e.which && e.button) { // если which нет, но есть button... (IE8-)
    if (e.button & 1) e.which = 1; // левая кнопка
    else if (e.button & 4) e.which = 2; // средняя кнопка
    else if (e.button & 2) e.which = 3; // правая кнопка
  }
  return e;
}

var fullscreen_flag = false;
function fullScreen() {
    var btn = document.getElementById('fullscreen_button');
    if( fullscreen_flag ){
        fullscreen_flag = false;
        fullScreenOFF();
        btn.value='развернуть на весь экран';
    }else{
        fullscreen_flag = true;
        fullScreenON();
        btn.value='свернуть';
    }
}


function fullScreenON() {
    var doc = document.body;
    if(doc.requestFullscreen){
      doc.requestFullscreen();
    }
    else if(doc.mozRequestFullScreen){
      doc.mozRequestFullScreen();
    }
    else if(doc.webkitRequestFullScreen){
      doc.webkitRequestFullScreen();
    }
}

function fullScreenOFF() {
    if(document.exitFullscreen){
      document.exitFullscreen();
    }
    else if(document.mozCancelFullScreen){
      document.mozCancelFullScreen();
    }
    else if(document.webkitCancelFullScreen){
      document.webkitCancelFullScreen();
    }
}
