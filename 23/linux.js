document.addEventListener("DOMContentLoaded", function() {
    var navigationDiv = document.querySelector('#navigation');
    if (navigationDiv) {
      navigationDiv.style.display = 'none'; // Hide the navigation div
    }})
var btn=document.getElementById('cal');
var m=document.getElementById('first');
var er=document.getElementById('second');
var tt=document.getElementById('third');
var fo=document.getElementById('fourth');
var fi=document.getElementById('fifth');
var si=document.getElementById('sixth');
var ss=document.getElementById('seventh');
var ee=document.getElementById('eighth');
cal.addEventListener('click',function(event) {
    event.preventDefault();
    var p = m.value;
    if (p < 50) {
        p = 0 * 2;
    } else if (p >= 50 && p <= 53) {
        p = 1.0 * 2;
    } else if (p >= 54 && p <= 57) {
        p = 1.33 * 2;
    } else if (p >= 58 && p <= 61) {
        p = 1.67 * 2;
    } else if (p >= 62 && p <= 65) {
        p = 2.0 * 2;
    } else if (p >= 66 && p <= 69) {
        p = 2.33 * 2;
    } else if (p >= 70 && p <= 73) {
        p = 2.67 * 2;
    } else if (p >= 74 && p <= 77) {
        p = 3.0 * 2;
    } else if (p >= 78 && p <= 81) {
        p = 3.33 * 2;
    } else if (p >= 82 && p <= 85) {
        p = 3.67 * 2;
    } else if (p >= 86 && p <= 100){
        p = 4.0 * 2;
    }else {
        console.log("Value is out of range.");
    }
    var q= er.value;
    if (q < 50) {
        q = 0 * 1;
    } else if (q >= 50 && q <= 53) {
        q = 1.0 * 1;
    } else if (q >= 54 && q <= 57) {
        q = 1.33 * 1;
    } else if (q >= 58 && q <= 61) {
        q = 1.67 * 1;
    } else if (q >= 62 && q <= 65) {
        q = 2.0 * 1;
    } else if (q >= 66 && q <= 69) {
        q = 2.33 * 1;
    } else if (q >= 70 && q <= 73) {
        q = 2.67 * 1;
    } else if (q >= 74 && q <= 77) {
        q = 3.0 * 1;
    } else if (q >= 78 && q <= 81) {
        q = 3.33 * 1;
    } else if (q >= 82 && q <= 85) {
        q = 3.67 * 1;
    } else if(q >= 86 && q <= 100) {
        q = 4.0 * 1;
    }else {
        console.log("Value is out of range.");
    }
    var r= tt.value;
    if (r < 50) {
        r = 0 * 3;
    } else if (r >= 50 && r <= 53) {
        r = 1.0 * 3;
    } else if (r >= 54 && r <= 57) {
        r = 1.33 * 3;
    } else if (r >= 58 && r <= 61) {
        r = 1.67 * 3;
    } else if (r >= 62 && r <= 65) {
        r = 2.0 * 3;
    } else if (r >= 66 && r <= 69) {
        r = 2.33 * 3;
    } else if (r >= 70 && r <= 73) {
        r = 2.67 * 3;
    } else if (r >= 74 && r <= 77) {
        r = 3.0 * 3;
    } else if (r >= 78 && r <= 81) {
        r = 3.33 * 3;
    } else if (r >= 82 && r <= 85) {
        r = 3.67 * 3;
    } else if(r >= 86 && r <= 100) {
        r = 4.0 * 3;
    }else {
        console.log("Value is out of range.");
    }
    var s=fo.value;
    if (s < 50) {
        s = 0 * 2;
    } else if (s >= 50 && s <= 53) {
        s = 1.0 * 2;
    } else if (s >= 54 && s <= 57) {
        s = 1.33 * 2;
    } else if (s >= 58 && s <= 61) {
        s = 1.67 * 2;
    } else if (s >= 62 && s <= 65) {
        s = 2.0 * 2;
    } else if (s >= 66 && s <= 69) {
        s = 2.33 * 2;
    } else if (s >= 70 && s <= 73) {
        s = 2.67 * 2;
    } else if (s >= 74 && s <= 77) {
        s = 3.0 * 2;
    } else if (s >= 78 && s <= 81) {
        s = 3.33 * 2;
    } else if (s >= 82 && s <= 85) {
        s = 3.67 * 2;
    } else if(s >= 86 && s <= 100) {
        s = 4.0 * 2;
    }
    else {
        console.log("Value is out of range.");
    }
    var t=fi.value;
    
    if (t < 50) {
        t = 0 * 1;
    } else if (t >= 50 && t <= 53) {
        t = 1.0 * 1;
    } else if (t >= 54 && t <= 57) {
        t = 1.33 * 1;
    } else if (t >= 58 && t <= 61) {
        t = 1.67 * 1;
    } else if (t >= 62 && t <= 65) {
        t = 2.0 * 1;
    } else if (t >= 66 && t <= 69) {
        t = 2.33 * 1;
    } else if (t >= 70 && t <= 73) {
        t = 2.67 * 1;
    } else if (t >= 74 && t <= 77) {
        t = 3.0 * 1;
    } else if (t >= 78 && t <= 81) {
        t = 3.33 * 1;
    } else if (t >= 82 && t <= 85) {
        t = 3.67 * 1;
    } else if(t >= 86 && t <= 100) {
        t = 4.0 * 1;
    }else {
        console.log("Value is out of range.");
    }
    var u=si.value;
    if (u < 50) {
        u = 0 * 3;
    } else if (u >= 50 && u <= 53) {
        u = 1.0 * 3;
    } else if (u >= 54 && u <= 57) {
        u = 1.33 * 3;
    } else if (u >= 58 && u <= 61) {
        u = 1.67 * 3;
    } else if (u >= 62 && u <= 65) {
        u = 2.0 * 3;
    } else if (u >= 66 && u <= 69) {
        u = 2.33 * 3;
    } else if (u >= 70 && u <= 73) {
        u = 2.67 * 3;
    } else if (u >= 74 && u <= 77) {
        u = 3.0 * 3;
    } else if (u >= 78 && u <= 81) {
        u = 3.33 * 3;
    } else if (u >= 82 && u <= 85) {
        u = 3.67 * 3;
    } else if(u >= 86 && u <= 100) {
        u = 4.0 * 3;
    } else {
        console.log("Value is out of range.");
    }
    var v=ss.value;
    if (v < 50) {
        v = 0 * 2;
    } else if (v >= 50 && v <= 53) {
        v = 1.0 * 2;
    } else if (v >= 54 && v <= 57) {
        v = 1.33 * 2;
    } else if (v >= 58 && v <= 61) {
        v = 1.67 * 2;
    } else if (v >= 62 && v <= 65) {
        v = 2.0 * 2;
    } else if (v >= 66 && v <= 69) {
        v = 2.33 * 2;
    } else if (v >= 70 && v <= 73) {
        v = 2.67 * 2;
    } else if (v >= 74 && v <= 77) {
        v = 3.0 * 2;
    } else if (v >= 78 && v <= 81) {
        v = 3.33 * 2;
    } else if (v >= 82 && v <= 85) {
        v = 3.67 * 2;
    } else if(v >= 86 && v <= 100) {
        v = 4.0 * 2;
    } else {
        console.log("Value is out of range.");
    }
    var w=ee.value;
    if (w < 50) {
        w = 0 * 1;
    } else if (w >= 50 && w <= 53) {
        w = 1.0 * 1;
    } else if (w >= 54 && w <= 57) {
        w = 1.33 * 1;
    } else if (w >= 58 && w <= 61) {
        w = 1.67 * 1;
    } else if (w >= 62 && w <= 65) {
        w = 2.0 * 1;
    } else if (w >= 66 && w <= 69) {
        w = 2.33 * 1;
    } else if (w >= 70 && w <= 73) {
        w = 2.67 * 1;
    } else if (w >= 74 && w <= 77) {
        w = 3.0 * 1;
    } else if (w >= 78 && w <= 81) {
        w = 3.33 * 1;
    } else if (w >= 82 && w <= 85) {
        w = 3.67 * 1;
    } else if(w >= 86 && w <= 100) {
        w = 4.0 * 1;
    } else {
        console.log("Value is out of range.");
    }
    var value= p + q + r + s + t + u +v +w;
    var valu =value=value/15;
    valu=valu.toFixed(2);
    
    var result=document.createElement('p');
    result.classList.add('theResult','py-3','px-3','col-12');
    result.textContent="Your Calculated CGPA is " + valu;
    var location=document.querySelector('body #DIV form #btt');
    location.appendChild(result);


    
});
var menuButton = document.querySelector(".MENUU");
menuButton.addEventListener('click', function() {
    var navigation= document.querySelector('#navigation');
    if (navigation.style.display === 'none') {
      navigation.style.display = 'block'; // Show the navigation div
    } else {
      navigation.style.display = 'none'; // Hide the navigation div
    }
  });
  var close=document.querySelector('.close');
  close.addEventListener('click',function(){
    var navigation= document.querySelector('#navigation');
    if(navigation.style.display === 'block'){
        navigation.style.display = 'none';
    }
    else{
        navigation.style.display = 'block';
    }
  })



    
