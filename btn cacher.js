
function afficher_cacher(id)
{
    if(document.getElementById(id).style.display == "block")
    {
        document.getElementById(id).style.display = "none";
        document.getElementById('bouton_'+id).innerHTML='EXPERIENCES PROFESSIONNELLES';
    }
    else{
        document.getElementById(id).style.display = "block";
        document.getElementById('bouton_'+id).innerHTML='EXPERIENCES PROFESSIONNELLES';
    }
}

function afficher_cacher(id)
{
    if(document.getElementById(id).style.display == "block")
    {
        document.getElementById(id).style.display = "none";
        document.getElementById('bouton1_'+id).innerHTML='FORMATIONS';
    }
    else{
        document.getElementById(id).style.display = "block";
        document.getElementById('bouton1_'+id).innerHTML='FORMATIONS';
    }
}

function afficher_cacher(id)
{
    if(document.getElementById(id).style.display == "block")
    {
        document.getElementById(id).style.display = "none";
        document.getElementById('bouton2_'+id).innerHTML='COMPETENCES';
    }
    else{
        document.getElementById(id).style.display = "block";
        document.getElementById('bouton2_'+id).innerHTML='COMPETENCES';
    }
}