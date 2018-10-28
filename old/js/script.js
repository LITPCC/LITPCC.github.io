let scrollspyOptions = {
    throttle: 50,
    scrollOffset: 50
}
function load(){
    let elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems, scrollspyOptions);
    elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
}