function countOrTimer(time) {
    let htmlContent = '';
    if (time === 0) {
        htmlContent = `
            <div class="time">
                <div class="time-inputs">
                    <input type="number" id="min" placeholder="min"/><span>:</span>
                    <input type="number" id="s" placeholder="s" /><span>:</span>
                    <input type="number" id="ms" placeholder="ms" />
                </div>
        `;
    }

    htmlContent += `
    ${ 
        time === 1 ? `
            <div class="time">
                <p><span id="min">00</span><span>:</span><span id="s">00</span><span>:</span><span id="ms">00</span></p>
        `
        :
        ``
    }
        
            <div class="time-btn">
                <button id="start-btn" onclick="startTime()">Iniciar</button>
                <button id="pause-btn" onclick="pauseTime()">Pausar</button>
                <button id="stop-btn" onclick="stopTime()">Resetar</button>
            </div>
        </div>
    `;

    return htmlContent;
}

function startTime() {
    let min = document.getElementById("min");
    let s = document.getElementById("s");
    let ms = document.getElementById("ms");

    setInterval(() => {
        ms += 1;
        if (ms == 1000) {
        }




function countdownTransition() {
    let mainDiv = document.getElementById("buttons");
    mainDiv.classList.add("fade-out");
    setTimeout(() => {
        mainDiv.innerHTML = countOrTimer(0);
        mainDiv.classList.remove("fade-out");
    }, 500);
}

function timerTransition() {
    let mainDiv = document.getElementById("buttons");
    mainDiv.classList.add("fade-out");
    setTimeout(() => {
        mainDiv.innerHTML = countOrTimer(1);
        mainDiv.classList.remove("fade-out");
    }, 500);
}

