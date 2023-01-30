const floresta = document.getElementById("floresta")
const chuva = document.getElementById("chuva")
const cafeteria = document.getElementById("cafeteria")
const laleira = document.getElementById("laleira") 

const somChuva = document.getElementById("som-chuva")
const som = document.getElementById("som-flore")
const somCafe = document.getElementById("som-cafe")
const somLareira = document.getElementById("som-lareira")
const somPlay = document.getElementById("som-play")
const somTimer = document.getElementById("timer")

const volFloresta = document.getElementById("vol-floresta")
const volChuva = document.getElementById("vol-chuva")
const volCafeteria = document.getElementById("vol-cafeteria")
const volLaleira = document.getElementById("vol-laleira")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const buttonPlay = document.getElementById("play")
const buttonStop = document.getElementById("stop")
const buttonSet = document.getElementById("set")
const buttonIncrease = document.getElementById("increase")
const buttonDecreases = document.getElementById("decreases")
let minutes
let timerTimeOut

function getMinutes() {
    let newMinutes = Number( prompt('Quantos minutos?'))
    if (!newMinutes) {
      return false
    }
    return updateDisplay(newMinutes, 0)
}

function removeHover () {
    floresta.classList.remove("dark")
    laleira.classList.remove("dark")
    cafeteria.classList.remove("dark")
    chuva.classList.remove("dark")
}

function stopSom() {
    somLareira.pause()
    somCafe.pause()
    somChuva.pause()
    som.pause()
    somChuva.pause()
}

function increment() {
   let increment = Number(minutesDisplay.textContent)
   
   minutesDisplay.textContent = String( increment + 1).padStart(2,"0")
}

function decrement () {
    let decrement = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String( decrement - 1).padStart(2,"0")
}

buttonIncrease.onclick = () => {
    increment()
}

buttonDecreases.onclick = () => {
    decrement()
}

function updateDisplay(newMinutes, seconds) {
  
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {

        somTimer.play()
        return
      }


      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

buttonPlay.addEventListener("click",() => {
    somPlay.play()
    countdown()
})

buttonStop.onclick = () => {
    somPlay.play()
    clearTimeout(timerTimeOut)
    removeHover()
    stopSom()
} 

buttonSet.onclick = () => {
    getMinutes()
}



floresta.onclick = () => {

    floresta.classList.toggle("dark")
    laleira.classList.remove("dark")
    cafeteria.classList.remove("dark")
    chuva.classList.remove("dark")

    if(floresta.classList.contains("dark")) {
        somLareira.pause()
        somCafe.pause()
        somChuva.pause()
        som.play()
        countdown()
        som.loop = true
        somChuva.pause()
    } else {
        som.pause()
        clearTimeout(timerTimeOut)
    }

}
chuva.onclick = () => {
    
    chuva.classList.toggle("dark")
    floresta.classList.remove("dark")
    laleira.classList.remove("dark")
    cafeteria.classList.remove("dark")

    if(chuva.classList.contains("dark")) {
        somLareira.pause()
        somCafe.pause()
        countdown()
        som.pause()
        somChuva.play()
        somChuva.loop = true
    } else {
        somChuva.pause()
        clearTimeout(timerTimeOut)
    }
    

}

cafeteria.onclick = () => {
    cafeteria.classList.toggle("dark")
    laleira.classList.remove("dark")
    chuva.classList.remove("dark")
    floresta.classList.remove("dark")

    if(cafeteria.classList.contains("dark")) {
        somLareira.pause()
        somChuva.pause()
        som.pause()
        countdown()
        somCafe.play()
        somCafe.loop = true
    } else {
        somCafe.pause()
        clearTimeout(timerTimeOut)

    }

}

laleira.onclick = () => {

    laleira.classList.toggle("dark")
    cafeteria.classList.remove("dark")
    chuva.classList.remove("dark")
    floresta.classList.remove("dark")

    if(laleira.classList.contains("dark")) {
        somLareira.play()
        countdown()
        somCafe.pause()
        somChuva.pause()
        som.pause()
        somLareira.loop = true

    } else {
        somLareira.pause()
        clearTimeout(timerTimeOut)
    }
}

 function setVolume(value) {
    somCafe.volume = value / 100;
    somChuva.volume = value / 100;
    somLareira.volume = value / 100;
    somPlay.volume = value / 100;
 }

volCafeteria.oninput = () => setVolume(volCafeteria.value)
volCafeteria.onchange = () => setVolume(volCafeteria.value)
volChuva.oninput = () => setVolume(volChuva.value)
volChuva.onchange = () => setVolume(volChuva.value)
volLaleira.oninput = () => setVolume(volLaleira.value)
volLaleira.onchange = () => setVolume(volLaleira.value)
volFloresta.oninput = () => setVolume(volFloresta.value)
volFloresta.onchange = () => setVolume(volFloresta.value)

const modelTheme = document.querySelector(".time-span")
const body = document.querySelector("body")
const sol = document.getElementById("sol")
const lua = document.getElementById("lua")
lua.style.display = "none"
sol.onclick = () => {
    body.style.background = "#121214"
    sol.style.display = "none"
    lua.style.display = "block"
    modelTheme.style.background = "#cdcdd3"
    darkLoad()

}

function toggleDark() {
    const dark = localStorage.getItem("active")

    if(dark) {
        darkLoad()
    }

}

toggleDark()

function darkLoad() {

    body.classList.toggle("active")

    localStorage.removeItem("active")

    if(body.classList.contains("active")) {
        localStorage.setItem("active", 1)
        body.style.background = "#121214"
        sol.style.display = "none"
        lua.style.display = "block"
        modelTheme.style.background = "#cdcdd3"
    }
}


lua.onclick = () => {
    body.style.background = "#ffffff"
    sol.style.display = "block"
    lua.style.display = "none"

    darkLoad()
    modelTheme.style.background = "none"
}