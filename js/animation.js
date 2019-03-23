window.addEventListener('load', function(){
    console.log('oui animation');

    let titre = document.querySelector('.site-title');
    let sousTitre = document.querySelector('.site-description');

    titre.classList.add("animTitre");
    sousTitre.classList.add("animSousTitre");

    let ps = document.querySelector('.ps');
    //ps.classList.add("animPS");

    //console.log(titre);
})