function conferma () {
    if (document.getElementById("recensionescritta").value != "" && document.querySelector("input[name='dolci']:checked")){
        document.getElementById("output").innerText = "Grazie per la recensione";
    } else {
        document.getElementById("output").innerText = "Input non validi";
    }
}