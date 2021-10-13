(function showTime(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    let d = date.getDay();
    
    switch(d){
        case 1 : d = "Pazartesi"; break;
        case 2 : d = "Salı"; break;
        case 3 : d = "Çarşamba"; break;
        case 4 : d = "Perşembe"; break;
        case 5 : d = "Cuma"; break;
        case 6 : d = "Cumartesi"; break;
        case 7 : d = "Pazar"; break;
    }

    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + d ;
    document.getElementById("myClock").innerHTML = time;
    
    setTimeout(showTime, 1000);
    
})();
 