const srt = document.querySelector(".start")
srt.addEventListener("click",()=>{
    const plyrname = document.querySelector(".input").value.trim();
    if (plyrname){
        window.location.href = "rps2.html";
        localStorage.setItem("playerName", plyrname);
    }else{
        showPopup();
    }
})

function showPopup(){
    const popup = document.createElement("div")
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <p>PLEASE ENTER THE PLAYER NAME</p>
            <button class="popup-close">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
    const closeBut = popup.querySelector(".popup-close")
    closeBut.addEventListener("click",()=>{
        popup.remove();
    })
}