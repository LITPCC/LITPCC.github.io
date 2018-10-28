function load(){
    if(document.location.hash==""){
        document.getElementById('home').classList += "selected";
    }else{
        // document.getElementById(document.location.hash.substr(1)).classList += "selected";
        router(document.location.hash.substr(1));
    }
}
function router(page){
    document.getElementById('side').childNodes.forEach(element => {
        if(element.firstChild!==null && element.firstChild.classList !== undefined){
            element.firstChild.classList.remove('selected');
            let el = document.getElementById(element.firstChild.id + "-page");
            if(el.style.display == "block"){
                el.classList = 'page fade';
                setTimeout(function(){
                    el.style.display = "none";
                }, 250);
                // el.style.display = "none";
            }else{
                el.style.display = "none";
            }
        }
    });
    document.getElementById(page).classList += 'selected';
    document.getElementById(page + "-page").classList = "page fade reverse";
    setTimeout(function(){
        document.getElementById(page + "-page").style.display = "block";
    }, 250);
}