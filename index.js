
//  const day = document.getElementById('day'); 
//  const hour = document.getElementById('hour'); 
//  const second = document.getElementById('second'); 
//  const minute =  document.getElementById('minute'); 


// setTime = new Date("Dec 31, 2025 00:00:00").getTime();
// function lechat(){

//     setInterval(()=>{
    
//         currentTime = new Date().getTime(); 
//         let t = setTime - currentTime;
    
        
//         const days = Math.floor(t / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((t % (1000 * 60)) / 1000);
        
//         day.innerText = days;
//         hour.innerText = hours;
//         minute.innerText = minutes;
//         second.innerText = seconds;
//         // console.log(hours)
//     },10
//     )
// }
// lechat()

const day = document.getElementById('day'); 
const hour = document.getElementById('hour'); 
const minute = document.getElementById('minute'); 
const second = document.getElementById('second'); 

let setTime; // global variable for the target time
let countdown; // to store the interval

function setBirthday() {
    const inputValue = document.getElementById('bdayInput').value;

    if (!inputValue) {
        alert("Please pick your birthday!");
        return;
    }

    const today = new Date(); // current date & time
    const pickedDate = new Date(inputValue); // user's input

    const month = pickedDate.getMonth(); // birthday month
    const date = pickedDate.getDate();   // birthday day

    // Create a birthday for this year using month and date
    let birthdayThisYear = new Date(today.getFullYear(), month, date);

    // If the birthday already happened this year, set it for next year
    if (birthdayThisYear < today) {
        birthdayThisYear.setFullYear(today.getFullYear() + 1);
    }

    // Save the time in milliseconds
    setTime =   birthdayThisYear.getTime();

    // Clear old countdown timer if it's already running
    if (countdown) {
        clearInterval(countdown);
    }

    lechat(); // start the countdown
}

function lechat() {
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
            // alert("🎉 Happy Birthday!");
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

    }, 1000); // 1 second
}
