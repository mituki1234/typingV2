let text = [
    "I am good men.But i was bat men.",
    "I have never used cheats in this game.",
    "It's fun to win using cheats!",
    "I know a future where Fortnite and Minecraft collaborate.",
    "Oh my god, I'm going to die.",
];
let checktexts = [];
let type_input = document.getElementById("type-input");

let accuracy = 0;
let misstakes = 0;
let count = 1;
console.log(checktexts);
type_input.addEventListener("keydown",function keydown(e){
    type_input = document.getElementById("type-input");
    if(e.key == checktexts[count] && type_input.value.length == count){
        accuracy++;
        count++;
        document.getElementById("misstakes").innerText = "✖Miss:" +  Math.round(misstakes / (accuracy + misstakes) * 100) + "%";
        document.getElementById("Accuracy").innerText = "✔Accuracy:" + Math.round(accuracy / (accuracy + misstakes) * 100) + "%";
    } else if(e.key == "Backspace"){

    } else if(e.key == "Shift"){

    } else if(e.key == checktexts[type_input.value.length] && !(type_input.value.length == count)){
        
    } else {
        misstakes++;
        document.getElementById("misstakes").innerText = "✖Miss:" +  Math.round(misstakes / (accuracy + misstakes) * 100) + "%";
        document.getElementById("Accuracy").innerText = "✔Accuracy:" + Math.round(accuracy / (accuracy + misstakes) * 100) + "%";
    }
    if(checktexts.length == count){
        setTimeout(() => {
            document.getElementById("type-input").value = "";
        },"30");
        createtext();
    }
    console.log("count:" + count);
    console.log("maxcount:" + maxcount);
});
function createtext(){
    var random = Math.floor(Math.random() * text.length);
    checktexts = text[random].split('');
    const type_display = document.getElementById("type-display");
    type_display.innerText = text[random];
    console.log(random);
    accuracy = 0;
    count = 0;
    misstakes = 0;
    document.getElementById("misstakes").innerText = "✖Miss:0%";
    document.getElementById("Accuracy").innerText = "✔Accuracy:0%";
}
createtext();