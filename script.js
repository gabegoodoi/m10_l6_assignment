
const publicKey = '1048eba09bf1439030cbb22e58cf28a1'
const privateKey = '289c03035771df850d99cebfe684efe38dc58788'
const hash = '3f97cb072c6c68aa83ec263283955534' // ts + privateKey + publicKey
const apiURL = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`


async function fetchCharacter() {
    try {
        // Simulating an API call using fetch
        let response = await fetch(apiURL);

        // Wait for the data to be parsed into JSON
        let fullCall = await response.json();

        let characterData = fullCall.data.results[3];
        
        // Process the data into the console log
        console.log('Character Name:', characterData.name, '\nFirst Available Comics:', characterData.comics.items[0].name, "\nLink to Buy:", characterData.comics.items[0].resourceURI, );


        // find the HTML element to append the data to
        let displayArea = document.getElementById('display');

        // append data to HTML element
        displayArea.innerHTML = `
            <h2> Here comes ${characterData.name}! Remember when you first met them in <a href='characterData.comics.items[0].resourceURI' style='text-decoration: none;'>${characterData.comics.items[0].name}</a> <h2>
        `;
            
    } catch (error) {
        // Handle any errors that occur during the async operation
        console.error('Fetch error:', error);
    }
};

let submission = document.getElementById('submission');
let timerArea = document.getElementById('countdown');

function startTimer() {
    let countdownTime = document.getElementById("timerInput").value;
    const now = Date.now();
    const end = now + countdownTime * 1000;

    countdown = setInterval(() => {
        const leftoverTime = Math.round((end - Date.now()) / 1000);
    
        const seconds = leftoverTime % 60;
        timerArea.innerHTML = `<p style='background-color: yellow; border-style: solid; width: 200px;'>SECONDS REMAINING: ${String(seconds).padStart(2, '0')}</p>`;
        
        if (leftoverTime <= 0) {
            clearInterval(countdown);
            timerArea.innerHTML = `<p style='background-color: red; border-style: solid; width: 250px;'>SECONDS REMAINING: Time’s Up!</p>`;
        };
    }, 1000); 
}

const myTimeout = setTimeout(lateComer, 5000);

function lateComer() {
  document.getElementById("displaydelay").innerHTML = `<b>Tony</b>: I'm here! Traffic was bad. Am I late?!`
}


notification = document.getElementById('notification');

function notify() {

    if (!notification.innerHTML) {
        notification.innerHTML = `<button id='dismiss'>CLICK HERE TO DISMISS NOTIFICATION</button>`;
        
        document.getElementById('dismiss').addEventListener('click', stopBeep);
    } else {
        notification.innerHTML = '';
    } 
    
}

let beep;

function startBeep() {
    beep = setInterval(notify, 2000);
}

function stopBeep() {
    clearInterval(beep);
    notification.innerHTML = '';
}


window.addEventListener('load', startBeep)

// Call the async function
addEventListener("click", fetchCharacter)


submission.addEventListener("click", startTimer)