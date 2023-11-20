$(document).ready(function() {
    
        var cssContent = `
            .tw-public-nav__item {
                position: relative;
            }
            .dropdown-menu {
                display: none;
                position: absolute !important;
                top: 100% !important;
                left: 0 !important;
                z-index: 100 !important;
                background-color: #fff !important;
                border: 1px solid #ccc !important;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
                opacity: 1 !important;
                pointer-events: all;
                opacity: 1;
                visibility: visible;
                z-index: 1;
                -webkit-transition: opacity .2s cubic-bezier(.6, .2, .1, 1), visibility 0s linear 0s, -webkit-transform .2s cubic-bezier(.6, .2, .1, 1);
                transition: opacity .2s cubic-bezier(.6, .2, .1, 1), visibility 0s linear 0s, -webkit-transform .2s cubic-bezier(.6, .2, .1, 1);
                transition: opacity .2s cubic-bezier(.6, .2, .1, 1), transform .2s cubic-bezier(.6, .2, .1, 1), visibility 0s linear 0s;
                transition: opacity .2s cubic-bezier(.6, .2, .1, 1), transform .2s cubic-bezier(.6, .2, .1, 1), visibility 0s linear 0s, -webkit-transform .2s cubic-bezier(.6, .2, .1, 1);
                -webkit-transform: none;
                transform: none;
            }
        `;

        $("head").append("<style>" + cssContent + "</style>");


        var currentPath = window.location.pathname;
        var lastPart = currentPath.split('/').pop();

        var htmlContent = `<li class="tw-public-nav__item tw-public-nav__menu-item-help">
        <span class="tw-public-nav__menu-item-text text-ellipsis ">
        <button class="tw-public-nav__dropdown-toggle tw-link-with-chevron" type="button" aria-expanded="false">
        <span class="tw-public-nav__menu-item-text text-ellipsis ">CN</span>
        <svg class="tw-link-with-chevron-icon" width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3.96289 3.99999L0.962891 7.46409L0.962891 0.535889L3.96289 3.99999Z" fill="var(--color-interactive-primary)"></path>
        </svg>
        </button>
        <ul class="dropdown-menu">
        <li><a href="/wise/` + lastPart + `" style="color: #000;">EN</a></li>
        <li><a href="/wise/jp/` + lastPart + `" style="color: #000;">Japanese</a></li>
        <li><a href="/wise/kr/` + lastPart + `" style="color: #000;">Korean</a></li>
        <li><a href="/wise/cn/` + lastPart + `" style="color: #000;">中文（繁體）</a></li>
        </ul>
        </span>
        </li>`;

        $('.tw-public-nav__item.tw-public-nav__menu-item-help').after(htmlContent);


        $(".tw-public-nav__dropdown-toggle").on("click", function() {
            var menu = $(this).next(".dropdown-menu");
            if (menu.is(':visible')) {
                menu.hide();
            } else {
                menu.show();
            }
        });
});
