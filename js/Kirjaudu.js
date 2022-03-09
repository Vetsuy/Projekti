document.addEventListener("DOMContentLoaded", kirjautunut)
function kirjautunut(){//funktio alkaa kun sivu ladataan 
    document.getElementById("kirjaudu_ulos").style.display="none";
    if(localStorage.getItem("kirjautunut")==='kylla'){// piillottaa kirjautumis lommakeen ja näyttää kirjaudu ulos napin
        document.getElementById("Kirjautumis_lomake").style.display="none";
        document.getElementById("kirjaudu_ulos").style.display="block";
    }
}
function kirjaudu_ulos(){
    document.getElementById("kirjaudu_ulos").style.display="none"
    document.getElementById("Kirjautumis_lomake").style.display="block"//kirjaudu ulos näyttää kirjautumis lomakkeen ja piilottaa kirjaudu ulos napin
    localStorage.setItem("kirjautunut","ei")
}
function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value)
    localStorage.setItem("kirjautunut", "kylla")//tallentaa tietoja lokal storageen
}