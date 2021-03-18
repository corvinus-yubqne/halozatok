window.onload = () => {
    console.log("Oldal betöltődött")

    var fakt = function (n) {
        var er = 1;
        for (var i = 2; i <= n; i++) {
            er = er * i;
        }
        return er;
    }

    let hova = document.getElementById("pascal");
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor);


        for (var o = 0; o <= s; o++) {
            let elem = document.createElement("div");
            elem.classList.add("elem");
            elem.innerText = fakt(s) / (fakt(o) * fakt(s - o));
            sor.appendChild(elem);
        }
    }
}
