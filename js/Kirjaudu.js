document.addEventListener("DOMContentLoaded", kirjautunut)

function kirjaudu_ulos(){// muuttaa kaikki arvot local storagesta arvoon jota ei käytetä kun painaa kirjaudu ulos nappia
    localStorage.setItem("rek","ei");
    localStorage.setItem("arvo", "ei");
    localStorage.setItem("kirjautunut","ei")
    localStorage.setItem("errr", "ei")
    localStorage.setItem("valmis","e")
    localStorage.setItem("vaa","e")
}
function rekisteröidy2(){// pyytää nimeä ja salasanaa. jos nimi on jo local storagessa paljastaa viestin joka kertoo että nimi on varattu. jos nimi ei ole varattu tallentaa nimen ja salasanan local storageen. jos ei laitanut salasanaa näyttää tekstiä
    let as = Object.keys(localStorage)
    let a = document.getElementById("salasa").value
    for (let i = 0;i<as.length;i++){
        let ggg =  localStorage.key(i)
        if(document.getElementById("nimi1").value === ggg){
                localStorage.setItem("errr","r")
                break;
        }
        if(a===""){
            localStorage.setItem("errr","l")
        }
        else if(i+1===as.length){
            localStorage.setItem(document.getElementById("nimi1").value,document.getElementById("salasa").value)
            localStorage.setItem("valmis","k")
            localStorage.setItem("errr","e")
            localStorage.setItem("text",document.getElementById("nimi1").value)
            break;
        
        } 
        
    }
    
}
function rekisteröidy(){//vaihtaa arvon local storagesta kun painaa ekaa rekisteröidy nappia
    localStorage.setItem("rek","kylla")
}
function kirjaudu(){//vaihtaa arvon local storagesta kun painaa ekaa kirjaudu nappia
    localStorage.setItem("arvo", "k")
}
function taka(){//muuttaa kaikki arvot local storagesta arvoon jota ei käytetä kun painaa takaisin nappia
    localStorage.setItem("rek","ei");
    localStorage.setItem("arvo", "ei");
    localStorage.setItem("kirjautunut","ei")
    localStorage.setItem("errr", "ei")
    localStorage.setItem("valmis","e")
    localStorage.setItem("vaa","e")
}
function kirja(){//etsii katsoo onko annettu nimi ja salasana local sotaregessa jos kumpikaan on väärin paljaastaa tekstin joka kertoo että nimi tai salasana on väärin
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

function kirjautunut(){//funktio alkaa kun sivu ladataan ja aluksi piilottaa kaiken mitä ei tarvitse viellä nähdä
    document.getElementById("eros").style.display="none"
    document.getElementById("vaara").style.display="none"
    document.getElementById("ero").style.display="none";
    document.getElementById("kirjaudu_ulos").style.display="none";
    document.getElementById("rekisteri").style.display="none"
    document.getElementById("kirjaudu_lomake").style.display="none";
    if (localStorage.getItem("arvo")=== 'k'){//jos painaa ensimmäistä kirjautumis nappia piilottaa rekisteri napin ja ekan kirjaudu napin sitten paljastaa kirjautumis lomakkeen
        document.getElementById("reikisteröidy").style.display="none"
    document.getElementById("Kirjautumis_nappi").style.display="none"
    document.getElementById("kirjaudu_lomake").style.display="block";
    if(localStorage.getItem("vaa")=== 'kylla'){//jos laittoi väärän salasanan tai nimen
        document.getElementById("vaara").style.display="block"
    }
    }
    if(localStorage.getItem("rek")=== 'kylla'){//jos painoi ekaa rekisteri nappia piilottaa kirjaudu napin ja ekan reksiteri napin sitten näyttää rekisteri lomakkeen
        document.getElementById("rekisteri").style.display="block"
        document.getElementById("reikisteröidy").style.display="none"
        document.getElementById("Kirjautumis_nappi").style.display="none"
        if(localStorage.getItem("errr")=== 'r'){//jos nimi on jo rekisterissä avaa tekstin
            document.getElementById("ero").style.display="block";
        }else if(localStorage.getItem("errr")=== 'l'){//näyttää jos ei laitanut salasanaa
            document.getElementById("eros").style.display="block";
        }
        if(localStorage.getItem("valmis")=== 'k'){//kun on rekisteröitynyt oikein antaa käyttäjä nimen näkyviin ja kirjaudu ulosnapin piillottaa kaiken muun
            document.getElementById("reikisteröidy").style.display="none"
    document.getElementById("Kirjautumis_nappi").style.display="none"
    document.getElementById("kirjaudu_ulos").style.display="block";
    document.getElementById("rekisteri").style.display="none"
    document.getElementById("kirjaudu_lomake").style.display="none";
            document.getElementById("nn").textContent += localStorage.getItem("text")
        }
    }
    if(localStorage.getItem("kirjautunut")==='kylla'){// piillottaa kirjautumis lommakeen, näyttää kirjaudu ulos napin ja käyttäjä nimen 
        document.getElementById("reikisteröidy").style.display="none"
    document.getElementById("Kirjautumis_nappi").style.display="none"
    document.getElementById("kirjaudu_ulos").style.display="block";
    document.getElementById("rekisteri").style.display="none"
    document.getElementById("kirjaudu_lomake").style.display="none";
    document.getElementById("nn").textContent += localStorage.getItem("text")
    }
}

