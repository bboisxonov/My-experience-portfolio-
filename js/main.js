const elSiteHeader = document.querySelector('.header');
const elSiteHeaderSiteNav = document.querySelector('.site-header__sitenav');
const elSiteHeaderSiteNavToggler = document.querySelector('.site-header__sitenav-toggler');

if(elSiteHeaderSiteNavToggler){
    elSiteHeaderSiteNavToggler.addEventListener('click', function (){
        elSiteHeader.classList.toggle('site-header--open');
    });
}
