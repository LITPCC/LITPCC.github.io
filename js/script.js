let isSideBarOut = true;
function load(){
    displayEvents();
    if(document.location.hash==""){
        router('home');
    }else{
        router(document.location.hash.substr(1));
    }
}
function router(page){
    document.getElementById('side').childNodes.forEach(element => {
        if(element.firstChild!==null && element.firstChild.classList !== undefined){
            element.firstChild.classList.remove('selected');
            let el = document.getElementById(element.firstChild.id + "-page");
            if(el.style.display == "block"){
                el.classList = 'page';
                void el.offsetWidth;
                el.classList = 'page fade';
                setTimeout(function(){
                    el.style.display = "none";
                }, 250);
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
    toggleSideBar();
}
function toggleSideBar(){
    if(window.innerWidth <= 600){
        let sideID = document.getElementById('side')
        if(!isSideBarOut){
            sideID.classList = "";
            void sideID.offsetWidth;
            sideID.classList = "A-sidebar reverse";
        }else{
            sideID.classList = "";
            void sideID.offsetWidth;
            sideID.classList = "A-sidebar";
        }
        isSideBarOut = !isSideBarOut;
    }
}