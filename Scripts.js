function learnMore() {
    const infoDiv = document.getElementById("more-info");
    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block"; 
    } else {
        infoDiv.style.display = "none"; 
    }
}

function displayGreeting() {
    const hours = new Date().getHours();
    let greetingMessage;

    if (hours < 12) {
        greetingMessage = "Good morning!";
    } else if (hours < 18) {
        greetingMessage = "Good afternoon!";
    } else {
        greetingMessage = "Good evening!";
    }
    
    document.getElementById("greeting").innerText = greetingMessage;
}

window.onload = displayGreeting;

document.getElementById("hover-img").addEventListener("mouseover", function() {
    this.style.border = "9px solid red";
});

document.getElementById("hover-img").addEventListener("mouseout", function() {
    this.style.border = "none";
});
