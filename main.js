var timer;

function countOrTimer(time) {
    let htmlContent = '';
    if (time === 0) {
        htmlContent = `
            <div class="time">
                <div class="time-inputs">
                    <input type="number" id="min-input" placeholder="min" min="0" max="59" step="1" onblur="validateOrZero(this)"/><span>:</span>
                    <input type="number" id="s-input" placeholder="s" min="0" max="59" step="1" onblur="validateOrZero(this)" /><span>:</span>
                    <input type="number" id="ms-input" placeholder="ms" min="0" max="99" step="1" onblur="validateOrZero(this)" />
                </div>
                <button id="get-count-btn" onclick="getCount()">Contagem</button>
                <p><span id="min">00</span><span>:</span><span id="s">00</span><span>:</span><span id="ms">00</span></p>
            <div class="time-btn">
                <button id="start-btn" onclick="startCount()">Iniciar</button>
                <button id="pause-btn" onclick="pauseCount()">Pausar</button>
                <button id="stop-btn" onclick="stopCount()">Resetar</button>
            </div>

        `;
    } else {

    htmlContent += `
            <div class="time">
            <p><span id="min">00</span><span>:</span><span id="s">00</span><span>:</span><span id="ms">00</span></p>
            <div class="time-btn">
                <button id="start-btn" onclick="startTime()">Iniciar</button>
                <button id="pause-btn" onclick="pauseTime()">Pausar</button>
                <button id="stop-btn" onclick="stopTime()">Resetar</button>
            </div>
        </div>
    `;
    }

    return htmlContent;
}

function validateOrZero(el) {
    if (0 <= el.value || el.value >= 99) {
        alert("Valor Inválido!!!");
        el.value = 0;
    }
}


function getCount() {
    let min = document.getElementById("min");
    let s = document.getElementById("s");
    let ms = document.getElementById("ms");

    let minInput = document.getElementById("min-input");
    let sInput = document.getElementById("s-input");
    let msInput = document.getElementById("ms-input");

    min.innerHTML = minInput.value;
    s.innerHTML = sInput.value;
    ms.innerHTML = msInput.value;
}



function startCount() {
    let min = document.getElementById("min");
    let s = document.getElementById("s");
    let ms = document.getElementById("ms");

    timer = setInterval(() => {
        ms.innerHTML = parseInt(ms.innerHTML) - 1;
        if (ms.innerHTML <= 0 && s.innerHTML > 0) {
            ms.innerHTML = 100;
            s.innerHTML = parseInt(s.innerHTML) - 1;
        }

        if (s.innerHTML <= 0 && min.innerHTML > 0) {
            s.innerHTML = 60;
            min.innerHTML = parseInt(min.innerHTML) - 1;
        }
        

        if (min.innerHTML <= 0 && s.innerHTML <= 0 && ms.innerHTML <= 0) {
            pauseCount();
            let audio = document.createElement("audio");
            audio.src = "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg";
            audio.play();
            alert("Tempo Terminado!!!");
        }
    }, 1);

}

function pauseCount() {
    pauseTime();
}

function stopCount() {
    getCount();
}

function startTime() {
    let min = document.getElementById("min");
    let s = document.getElementById("s");
    let ms = document.getElementById("ms");

    timer = setInterval(() => {
        ms.innerHTML = parseInt(ms.innerHTML) + 1;
        if (ms.innerHTML >= 100) {
            ms.innerHTML = 0;
            s.innerHTML = parseInt(s.innerHTML) + 1;
        }

        if (s.innerHTML >= 60) {
            s.innerHTML = 0;
            min.innerHTML = parseInt(min.innerHTML) + 1;
        }
    }, 1);
}

function pauseTime() {
    clearInterval(timer);
}

function stopTime() {
    let min = document.getElementById("min");
    let s = document.getElementById("s");
    let ms = document.getElementById("ms");

    min.innerHTML = 0;
    s.innerHTML = 0;
    ms.innerHTML = 0;
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

