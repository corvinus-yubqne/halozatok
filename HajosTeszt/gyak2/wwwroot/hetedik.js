window.onload = kérdésBetöltés()

var kérdés;

let i = 2;

function kérdésBetöltés() {
    fetch(`/questions/1`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: $ {response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}    

/*function letöltés() {
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data));

    /*function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdés = d;
        kérdésMegjelenítés(0)
    }
}*/

function kérdésMegjelenítés(kérdés) {
    
        console.log(kérdés);
        document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
        document.getElementById("válasz1").innerText = kérdés.answer1
        document.getElementById("válasz2").innerText = kérdés.answer2
        document.getElementById("válasz3").innerText = kérdés.answer3
        document.getElementById("kép2").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;


    document.getElementById("gomb2").onclick = function előre() {
        visszaszín();
        
        fetch('/questions/' + (i++))
                .then(response => {
                    if (!response.ok) {
                        console.error(`Hibás válasz: $ {response.status}`)
                    }
                    else {
                        return response.json()
                    }
                })
            .then(data => kérdésMegjelenítés(data));
    }
    document.getElementById("gomb1").onclick = function vissza() {
        visszaszín();

        if (i == 0) {
            alert('Elértél az első kérdéshez!');
        }
        else {
            fetch('/questions/' + (i--))
                .then(response => {
                    if (!response.ok) {
                        console.error(`Hibás válasz: $ {response.status}`)
                    }
                    else {
                        return response.json()
                    }
                })
                .then(data => kérdésMegjelenítés(data));
        }
    }

    function visszaszín() {
        document.getElementById("válasz1").style.backgroundColor = '#8860d0';
        document.getElementById("válasz2").style.backgroundColor = '#8860d0';
        document.getElementById("válasz3").style.backgroundColor = '#8860d0';
    }
        
    
}

/*function kérdésMegjelenítés(k) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdés[k].questionText;
    console.log(`$ {kérdés.length} kérdés érkezett}`)

    for (var i = 1; i < 4; i++) {
        document.getElementById("válasz" + i).innerText = kérdés[k]["answer" + i]
    }


    if (kérdés[k].image != "") {
        document.getElementById("kép2").src = "https://szoft1.comeback.hu/hajo/" + kérdés[k].image
        document.getElementById("kép2").style.visibility = 'visible';
    }
    else {
        document.getElementById("kép2").style.visibility = 'hidden';
    }

   



    document.getElementById("gomb1").onclick = function vissza() {
        visszaszín();
        if (k == 0) {
            kérdésMegjelenítés(2);
        }
        else {
            kérdésMegjelenítés(k - 1);
        }
    }
    document.getElementById("gomb2").onclick = function előre() {
        visszaszín();
        if (k == 2) {
            kérdésMegjelenítés(0);
        }
        else {
            kérdésMegjelenítés(k + 1);
        }
    }



    document.getElementById("válasz1").onclick = function válasz1() {
        if (kérdés[k].correctAnswer == 1) {
            document.getElementById("válasz1").style.backgroundColor = "green";
        }
        else {
            document.getElementById("válasz1").style.backgroundColor = "red";
        }
    }
    document.getElementById("válasz2").onclick = function válasz2() {
        if (kérdés[k].correctAnswer == 2) {
            document.getElementById("válasz2").style.backgroundColor = "green";
        }
        else {
            document.getElementById("válasz2").style.backgroundColor = "red";
        }
    }
    document.getElementById("válasz3").onclick = function válasz3() {
        if (kérdés[k].correctAnswer == 3) {
            document.getElementById("válasz3").style.backgroundColor = "green";
        }
        else {
            document.getElementById("válasz3").style.backgroundColor = "red";
        }
    }



    function visszaszín() {
        document.getElementById("válasz1").style.backgroundColor = '#8860d0';
        document.getElementById("válasz2").style.backgroundColor = '#8860d0';
        document.getElementById("válasz3").style.backgroundColor = '#8860d0';
    }
}*/