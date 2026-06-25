function showLove() {

    document.getElementById("message").style.display = "block";

    for(let i = 0; i < 30; i++){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = "30px";

        document.body.appendChild(heart);

        let pos = 0;

        let interval = setInterval(() => {

            pos += 5;

            heart.style.top = pos + "px";

            if(pos > window.innerHeight){
                clearInterval(interval);
                heart.remove();
            }

        },30);
    }
}