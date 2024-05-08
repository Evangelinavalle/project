
  alert("Bienvenidos a mi pagina web")
var firstName = "Evangelina";
var age = 15;
var isAdult = true;

// Mathematical operation
var birthYear = new Date().getFullYear() - age;

// Logical operation with if-else statement
if (age >= 18 && isAdult) {
    console.log(firstName + " is an adult.");
    document.write(firstName + " is an adult.");
} else {
    console.log(firstName + " is not an adult.");
    document.write(firstName + " is not an adult.");
}

// Additional variable and mathematical operation
var height = 175.5;
var weight = 70;
var bmi = weight / ((height / 100) * (height / 100));

// Logical operation with OR operator
if (bmi < 18.5 || bmi > 25) {
    console.log(firstName + "'s BMI is not within the healthy range.");
    document.write("<br>" + firstName + "'s BMI is not within the healthy range.");
} else {
    console.log(firstName + "'s BMI is within the healthy range.");
    document.write("<br>" + firstName + "'s BMI is within the healthy range.");
}

function addEmoji() {
  const emojis = ["😊", "😍", "🎉", "🚀"]; // Puedes agregar más emojis aquí
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  const emojiElement = document.createElement("span");
  emojiElement.textContent = randomEmoji;

  document.getElementById("emojiContainer").appendChild(emojiElement);
}