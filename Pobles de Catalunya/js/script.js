
function llistarProvincies() {
    let espai = document.getElementById("llista");
    let llistaProvincies = document.createElement("ul");
    for (let i = 0; i < (Object.keys(pobles)).length; i++) {
        let provincia = document.createElement("li");
        let nomProvincia = Object.keys(pobles)[i];
        provincia.innerHTML = nomProvincia;
        llistaProvincies.appendChild(provincia);
        provincia.setAttribute("id", nomProvincia);
        // Onclick
        provincia.addEventListener("click", function () {
            llistarComarques(pobles[nomProvincia], provincia);
        });

    }
    espai.appendChild(llistaProvincies);
}

function llistarComarques(provincia, llistaProvincies) {
    let id = llistaProvincies.getAttribute("id");
    if (llistaProvincies.children.length == 0) {
        let llistaComarques = document.createElement("ul");
        for (let j = 0; j < (Object.keys(provincia)).length; j++) {
            let comarca = document.createElement("li");
            let nomComarca = Object.keys(provincia)[j];
            // let tipus = Object.values(provincia[nomComarca]);
            // let capital = tipus[0];
            comarca.innerHTML = nomComarca;
            comarca.setAttribute("id", nomComarca);
            llistaComarques.appendChild(comarca);
            // Onclick
            comarca.addEventListener("click", function () {
                llistarMunicipis(provincia[nomComarca], comarca);
            });
        }
        llistaProvincies.appendChild(llistaComarques);
    }
    else if (event.target.getAttribute("id") == id) {
        llistaProvincies.lastChild.remove();
    }
}

function llistarMunicipis(comarca, llistaComarques) {
    let id = llistaComarques.getAttribute("id");
    let tipus = Object.values(comarca);
    let capital = tipus[0];
    let spanCapital = document.createElement("span");
    spanCapital.innerHTML = capital;
    let municipis = tipus[1].split(",");
    if (llistaComarques.children.length == 0) {
        let llistaMunicipis = document.createElement("ul");
        for (let n = 0; n < municipis.length; n++) {
            let municipi = document.createElement("li");
            let nomMunicipi = municipis[n];
            municipi.innerHTML = nomMunicipi;
            llistaMunicipis.appendChild(municipi);
            municipi.addEventListener("click", function () {
                municipi.remove();
            });
        }
        llistaComarques.appendChild(spanCapital);
        llistaComarques.appendChild(llistaMunicipis);
        spanCapital.addEventListener("click", function () {
            ordenar(llistaMunicipis);
        });
        // obrirFormulari();

    }
    else if (event.target.getAttribute("id") == id) {
        llistaComarques.lastChild.remove();
        spanCapital.remove();
        llistaComarques.lastChild.remove();
    }
}

function ordenar(llistaMunicipis) {
    let long = llistaMunicipis.childNodes.length;
    const arr = Array.from(llistaMunicipis.childNodes);
    arr.reverse();

    for (let i = 0; i < long; i++) {
        let municipi = document.createElement("li");
        municipi.innerHTML = arr[i].innerHTML;
        llistaMunicipis.appendChild(municipi);
        llistaMunicipis.firstChild.remove();
        municipi.addEventListener("click", function () {
            municipi.remove();
        });
    }
}

function obrirFormulari() {
    let espai = document.getElementById("formulari");
    let form = document.createElement("form");
    let ciutat = document.createElement("input"); 
    let boto = document.createElement("button"); 
    boto.setAttribute("type","submit");
    boto.innerText = "Nova Ciutat";
    form.method = "POST";
    form.action = "index.html"; 
    
    
    form.appendChild(ciutat);
    form.appendChild(boto);
    espai.appendChild(form);
}

window.onload = llistarProvincies;


