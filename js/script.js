var btn = document.querySelector('.search');
var menu = document.querySelector('.search-div');


btn.addEventListener('click', function () {
    menu.style.display =
        menu.style.display === 'none' ? 'block' : 'none';
})

var bt = document.querySelector('.search2');
var men = document.querySelector('.search-div2');


bt.addEventListener('click', function () {
    men.style.display =
        men.style.display === 'none' ? 'block' : 'none';
})


var nav = document.querySelector('.list');
var dn = document.querySelector('.list1');


nav.addEventListener('click', function () {
    dn.style.display =
        dn.style.display === 'none' ? 'block' : 'none';
})

var list = document.querySelector('.a-lnk');
var down = document.querySelector('.down-list');


list.addEventListener('click', function () {
    down.style.display =
        down.style.display === 'none' ? 'block' : 'none';
})


var dslst = document.querySelector('.a-lnk2');
var dow = document.querySelector('.down-list2');


dslst.addEventListener('click', function () {
    dow.style.display =
        dow.style.display === 'none' ? 'block' : 'none';
})


var dsls = document.querySelector('.a-lnk3');
var dol = document.querySelector('.down-list3');


dsls.addEventListener('click', function () {
    dol.style.display =
        dol.style.display === 'none' ? 'block' : 'none';
})

var dsl = document.querySelector('.a-lnk4');
var dom = document.querySelector('.down-list4');


dsl.addEventListener('click', function () {
    dom.style.display =
        dom.style.display === 'none' ? 'block' : 'none';
})



var add = document.querySelector('.search').onclick = () =>
    document.querySelector('.search-div').style.display = 'block'

var add = document.querySelector('.cancl').onclick = () =>
    document.querySelector('.search-div').style.display = 'none'

var add = document.querySelector('.search2').onclick = () =>
    document.querySelector('.search-div2').style.display = 'block'

var add = document.querySelector('.cancl2').onclick = () =>
    document.querySelector('.search-div2').style.display = 'none'


const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
