$(document).ready(function() {


    function checkLinks(){
        

        $('a.tw-public-nav__logo-link.tw-public-nav__logo-link--text').attr('href', '/wise/');
        $('li.tw-public-nav__item a.tw-link-with-chevron').attr('href', 'pricing.html');
        $('li.tw-public-nav__menu-item-help a.tw-link-with-chevron').attr('href', 'help.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(0) a').attr('href', 'account.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(1) a').attr('href', 'features.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(2) a').attr('href', 'card.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(3) a').attr('href', 'send-money.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(4) a').attr('href', 'large-amounts.html');
        $('a.footer-link').attr('href', '');
        $('a.link-icon').attr('href', '');
    }
    
    checkLinks();

    setInterval(function() {
        checkLinks();
    }, 1000);


    $('.tw-public-nav__dropdown-toggle').on('click', function() {

        var links = $('ul.tw-public-nav__dropdown-menu li a');
        var newUrls = [
            'account.html',
            'features.html',
            'card.html',
            'send-money.html',
            'large-amounts.html'
        ];


        links.each(function(index) {
            if (newUrls[index]) {
                $(this).attr('href', newUrls[index]);
            }
        });
    });

    $('a').each(function() {
        var linkText = $(this).text();

        if (linkText === 'Log in') {
            $(this).attr('href', ''); 
        }
        if (linkText === 'Register') {
            $(this).attr('href', ''); 
        }
    });

});


