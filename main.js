window.onload = init;

function init() {    

    // const body = document.querySelector('body');
    const navButtons = document.getElementById('nav-buttons');

    // body.addEventListener("click", neonFormAnimation);
    navButtons.addEventListener("click", burgerMenu);

    const form = document.getElementById('form');
    form.addEventListener('focusin', addNeonFormAnimation);
    form.addEventListener('focusout', removeNeonFormAnimation);

    const neonHero = document.getElementById('neon-hero');

    setTimeout(neonHeroFlickerStop, 8000, neonHero);
}

function neonHeroFlickerStop(neonHero) {
    neonHero.classList.remove('neon-hero-flicker');
    neonHero.classList.add('neon-turned-on');
}


// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//   center: {lat: -35.56523678288144, lng: -65.65906884738399},
//   zoom: 4,
//   mapId: '2e6a706befca9bd1'
// });
// new google.maps.Marker({
//     position: {lat: -36.73848541074764, lng: -58.128413514092756},
//     map,
//     title: "My location",
//     icon: {
//         url: "./images/mapPin-removebg.png ",
//         scaledSize: new google.maps.Size(58, 65)
//     }
//   });
// }
// -35.56523678288144, -65.65906884738399
// -36.73848541074764, -58.128413514092756

function burgerMenu() {

    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const menuList = document.getElementById("menu-list");

    if (closeIcon.classList.contains("d-none")) {

        menuIcon.classList.add("d-none");
        closeIcon.classList.remove("d-none");
        menuList.classList.remove("d-none");

    } else {

        closeIcon.classList.add("d-none");
        menuList.classList.add("d-none");
        menuIcon.classList.remove("d-none");
    }
}

function addNeonFormAnimation(e) {
    e.preventDefault();

    let targetElement = e.target;
    let parentElement = targetElement.parentNode;
    parentElement.classList.add('form-neon-js');
    parentElement.classList.add('form-neon-flicker');
    setTimeout(function() {
        parentElement.classList.remove('form-neon-flicker');
        }, 2000);

}

function removeNeonFormAnimation(e) {

    let targetElement = e.target;
    let parentElement = targetElement.parentNode;
    parentElement.classList.remove('form-neon-js');
    parentElement.classList.remove('form-neon-flicker');
}
// function neonFormAnimation(e) {
//     e.preventDefault();
    
//     var formElements = document.getElementsByClassName('form-neon');

//     for (var i = 0; i < formElements.length; i++) {
        
//         if (formElements[i].classList.contains('form-neon-js')) {
//             formElements[i].classList.remove('form-neon-js');
//         }        
//     }
    
//     if (e.target.classList.contains('form-control')){
        
//         let targetElement = e.target;
//         let parentElement = targetElement.parentNode;

//         parentElement.classList.add('form-neon-js');
//         parentElement.classList.add('form-neon-flicker');
//         setTimeout(function() {
//             parentElement.classList.remove('form-neon-flicker');
//         }, 2000);
//     }
// }

