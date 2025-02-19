// Liste der möglichen Wörter für das Passwort
const words = ["deep", "press", "crowd", "knight", "heard", "proud", "sight", "speak",
    "rest", "play", "win", "lose", "game", "dried", "new", "drink"];

/**
* Generiert eine zufällige Zahl zwischen 0 und L-1
* @param {number} L - Obergrenze für den Zufallswert
* @returns {number} Zufallszahl zwischen 0 und L-1
*/
function randomNumber(L) {
return Math.floor(Math.random() * L);
}

/**
* Wählt ein zufälliges Wort aus der words-Liste
* @returns {string} Zufälliges Wort aus dem Array
*/
function randomWord() {
return words[randomNumber(words.length)];
}

/**
* Konvertiert zufällig einige Buchstaben eines Wortes in Großbuchstaben
* @param {string} word - Das Wort, das verändert wird
* @returns {string} Wort mit zufälligen Großbuchstaben
*/
function capitalizeRandom(word) {
return word.split('').map(char => Math.random() > 0.5 ? char.toUpperCase() : char).join('');
}

/**
* Erstellt ein sicheres Passwort mit einer Mischung aus Wörtern und Zeichen.
* Das Passwort enthält:
* - Wörter aus der Liste `words`
* - Zahlen und Sonderzeichen aus `chars`
* - Zufällige Groß- und Kleinschreibung
* - Mindestens 15 Zeichen und maximal 23 Zeichen
*/
function getPassword() {
const chars = "0123456789!@#$%^&*"; // Erlaubte Sonderzeichen und Zahlen
const clength = chars.length; // Länge der Zeichenliste
let password = chars[randomNumber(clength)]; // Start mit einem zufälligen Zeichen
let usedWords = new Set(); // Set zur Speicherung bereits verwendeter Wörter
let toggle = true; // Wechselt zwischen Wort und Zeichen für gleichmäßige Verteilung

while (password.length < 20) {
if (toggle) {
 let word = capitalizeRandom(randomWord()); // Wort mit zufälligen Großbuchstaben
 
 // Falls das Wort bereits benutzt wurde, ein neues wählen
 if (usedWords.has(word)) continue;
 usedWords.add(word); // Wort als benutzt markieren

 // Prüfen, ob das Wort + ein Zeichen die maximale Länge von 23 überschreiten würde
 if (password.length + word.length + 1 > 23) break;
 
 password = password.concat(word);
} else {
 password = password.concat(chars[randomNumber(clength)]);
}
toggle = !toggle; // Wechselt zwischen Wort und Zeichen
}

password = password.concat(chars[randomNumber(clength)]); // Zufälliges Zeichen am Ende
password = password.substring(0, 23); // Falls länger als 23 Zeichen, kürzen

document.getElementById("password").value = password; // In das Eingabefeld schreiben
}
