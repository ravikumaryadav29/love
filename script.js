function love(){
    document.body.innerHTML = `
    <h1 id="typing" style="color:white;text-align:center;"></h1>
    `;

    let text = `तुम सिर्फ मेरी पसंद नहीं हो
तुम वो सुकून हो जो मुझे हर परेशानी में चाहिए।
जब भी दुनिया मुझे थका देती है,
तुम्हारी मुस्कान मेरी हिम्मत बन जाती है।\n

     can you marry with me,,,,,,,,,,,,,,,,,,,,,,
     so, i love you ......................

     "i want a hug with you to put my tears in your feet"\n

     "i want to climb a mountain with you"\n

     "i want play and smile with you after long time "



 
💖 Forever Together – हमेशा साथ रहेंगे 💖`;

    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 40);
        }
    }

    typeEffect();
}

function move(){
    var btn=document.querySelector(".no");
    btn.style.position="absolute";
    btn.style.top=Math.random()*window.innerHeight+"px";
    btn.style.left=Math.random()*window.innerWidth+"px";
}

setInterval(()=>{
    let heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),5000);
},400);