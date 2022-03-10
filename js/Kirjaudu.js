document.addEventListener("DOMContentLoaded", kirjautunut)

function kirjaudu_ulos(){
    localStorage.setItem("rek","ei");
    localStorage.setItem("arvo", "ei");
    localStorage.setItem("kirjautunut","ei")
    localStorage.setItem("errr", "ei")
    localStorage.setItem("valmis","e")
    localStorage.setItem("vaa","e")
}
function rekisteröidy2(){
    let as = Object.keys(localStorage)
    for (let i = 0;i<as.length;i++){
        let ggg =  localStorage.key(i)
        if(document.getElementById("nimi1").value === ggg){
                localStorage.setItem("errr","r")
                break;
        }if(i+1===as.length){
            localStorage.setItem(document.getElementById("nimi1").value,document.getElementById("salasa").value)
            localStorage.setItem("valmis","k")
            localStorage.setItem("err","e")
            localStorage.setItem("text",document.getElementById("nimi1").value)
            break;
        }
        
    }
    localStorage.setItem(i,"as")
}
function rekisteröidy(){
    localStorage.setItem("rek","kylla")
}
function kirjaudu(){
    document.getElementById("Kirjautumis_nappi").style.display="none"
    localStorage.setItem("arvo", "k")
}
function taka(){
    localStorage.setItem("rek","ei");
    localStorage.setItem("arvo", "ei");
    localStorage.setItem("kirjautunut","ei")
    localStorage.setItem("errr", "ei")
    localStorage.setItem("valmis","e")
    localStorage.setItem("vaa","e")
}
function kirja(){
    let as = Object.keys(localStorage)
    let ni = document.getElementById("nimi").value;
    for (let i = 0;i<as.length;i++){
        if (ni===as[i]){
            if(document.getElementById("salasana").value === localStorage.getItem(as[i])){
                localStorage.setItem("kirjautunut", "kylla")
                localStorage.setItem("text",ni)
                break;
            }
       }else{
        localStorage.setItem("vaa","kylla")
       }
    }
}

function kirjautunut(){//funktio alkaa kun sivu ladataan 
    document.getElementById("vaara").style.display="none"
    document.getElementById("ero").style.display="none";
    document.getElementById("kirjaudu_ulos").style.display="none";
    document.getElementById("rekisteri").style.display="none"
    document.getElementById("kirjaudu_lomake").style.display="none";
    if (localStorage.getItem("arvo")=== 'k'){
        document.getElementById("reikisteröidy").style.display="none"
    document.getElementById("Kirjautumis_nappi").style.display="none"
    document.getElementById("kirjaudu_lomake").style.display="block";
    if(localStorage.getItem("vaa")=== 'kylla'){
        document.getElementById("vaara").style.display="block"
    }
    }
    if(localStorage.getItem("rek")=== 'kylla'){
        document.getElementById("rekisteri").style.display="block"
        document.getElementById("reikisteröidy").style.display="none"
        document.getElementById("Kirjautumis_nappi").style.display="none"
        if(localStorage.getItem("errr")=== 'r'){
            document.getElementById("ero").style.display="block";
        }
        if(localStorage.getItem("valmis")=== 'k'){
            document.getElementById("reikisteröidy").style.display="none"
    document.getElementById("Kirjautumis_nappi").style.display="none"
    document.getElementById("kirjaudu_ulos").style.display="block";
    document.getElementById("rekisteri").style.display="none"
    document.getElementById("kirjaudu_lomake").style.display="none";
            document.getElementById("nn").textContent += localStorage.getItem("text")
        }
    }
    if (localStorage.getItem("rek")=== 'tehty'){
        document.getElementById("reikisteröidy").style.display="none"
    document.getElementById("Kirjautumis_nappi").style.display="none"
    document.getElementById("kirjaudu_ulos").style.display="block";
    document.getElementById("rekisteri").style.display="none"
    document.getElementById("kirjaudu_lomake").style.display="none";
    document.getElementById("käyttäjä_nimi").textContent += localStorage.getItem()
    }
    if(localStorage.getItem("kirjautunut")==='kylla'){// piillottaa kirjautumis lommakeen ja näyttää kirjaudu ulos napin
        document.getElementById("reikisteröidy").style.display="none"
    document.getElementById("Kirjautumis_nappi").style.display="none"
    document.getElementById("kirjaudu_ulos").style.display="block";
    document.getElementById("rekisteri").style.display="none"
    document.getElementById("kirjaudu_lomake").style.display="none";
    document.getElementById("nn").textContent += localStorage.getItem("text")
    }
}

