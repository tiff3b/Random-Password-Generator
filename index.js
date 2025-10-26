
const randomOne =document.getElementById("random-one")
const randomTwo =document.getElementById("random-two")

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword(length = 15) {
    let password = "";
    for (let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
} 
function generate(){   
    randomOne.value = generatePassword();
    randomTwo.value = generatePassword();
}

