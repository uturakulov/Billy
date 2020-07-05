const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const mood = ["Im good", "leave me alone", "doing good homeboi"];

const greetings = [
  "Hello my friend",
  "Hi there",
  "hello motherfucker",
  "hello you piece of shit",
];

const who = ["i'm Billy, you're virtual friend"];

const name = [
  "hey bro",
  "leave me alone",
  "hello motherfucker",
  "hello you piece of shit",
];

const thanks = ["you're welcome", "my pleasure"];

const bye = ["goodbye bitch", "see you bro"];

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is activated");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;

  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "don't talk to me";

  if (message.includes("hello")) {
    const greet = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = greet;
  }

  if (message.includes("lone")) {
    speech.text = "Don't worry, I'm with you bro";
  }

  if (message.includes("best guy")) {
    speech.text = "It's obvious, me of course";
  }

  if (message.includes("how are you")) {
    const moodIs = mood[Math.floor(Math.random() * mood.length)];
    speech.text = moodIs;
  }

  if (message.includes("thank")) {
    const thanking = thanks[Math.floor(Math.random() * thanks.length)];
    speech.text = thanking;
  }

  if (message.includes("time")) {
    speech.text =
      "It's already " +
      formatAMPM(new Date()) +
      ", maybe you should have some rest";
  }

  if (message.includes("girlfriend")) {
    speech.text = "no, no, no. fuck them. you don't need a girlfriend";
  }

  if (message.includes("who")) {
    speech.text = who;
  }

  if (message.includes("Billy")) {
    const nameIs = name[Math.floor(Math.random() * name.length)];
    speech.text = nameIs;
  }

  if (message.includes("I'm bored")) {
    speech.text = "why";
  } else if (message.includes("don't want to do anything")) {
    speech.text = "you can do it, i believe in you bro";
  }

  if (message.includes("bye")) {
    const goodbye = bye[Math.floor(Math.random() * bye.length)];
    speech.text = goodbye;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
