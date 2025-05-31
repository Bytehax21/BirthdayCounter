

const day = document.getElementById('day'); 
const hour = document.getElementById('hour'); 
const minute = document.getElementById('minute'); 
const second = document.getElementById('second'); 

let setTime; 
let countdown; 

function setBirthday() {
    const inputValue = document.getElementById('bdayInput').value;

    if (!inputValue) {
        alert("Please pick your birthday!");
        return;
    }

    const today = new Date(); 
    const pickedDate = new Date(inputValue); 

    const month = pickedDate.getMonth(); 
    const date = pickedDate.getDate();   


    let birthdayThisYear = new Date(today.getFullYear(), month, date);

   
    if (birthdayThisYear < today) {
        birthdayThisYear.setFullYear(today.getFullYear() + 1);
    }

   
    setTime =   birthdayThisYear.getTime();

 
    if (countdown) {
        clearInterval(countdown);
    }

    startCountdown(); 
}

function startCountdown() {
    countdown = setInterval(() => {
        const currentTime = new Date().getTime(); 
        let t = setTime - currentTime;

        if (t <= 0) {
            clearInterval(countdown);
            day.innerText = 0;
            hour.innerText = 0;
            minute.innerText = 0;
            second.innerText = 0;
            document.getElementById('birthdayMsg').innerText = "🎉 Happy Birthday!";
            document.body.style.backgroundColor = "#2D2D2D"
            
            return;
        }

        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((t % (1000 * 60)) / 1000);

        day.innerText = days;
        hour.innerText = hours;
        minute.innerText = minutes;
        second.innerText = seconds;

    }, 1000); 
}
