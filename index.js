$(document).ready(function() {
    $(".body-3 a").attr('href', 'javascript:void(0);').click(function(event) {
        event.preventDefault();
    });
    // $(".footer-link").attr('href', 'javascript:void(0);').click(function(event) {
    //     event.preventDefault();
    // });
    $(".footer-title").each(function() {
        if ($(this).text() === 'Follow us') {
            $(this).closest('.row').hide();
        }
    });

    function checkLinks(){
        

        $('a.tw-public-nav__logo-link.tw-public-nav__logo-link--text').attr('href', '/wise/');
        $('li.tw-public-nav__item a.tw-link-with-chevron').attr('href', 'pricing.html');
        $('li.tw-public-nav__menu-item-help a.tw-link-with-chevron').attr('href', 'help.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(0) a').attr('href', 'account.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(1) a').attr('href', 'features.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(2) a').attr('href', 'card.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(3) a').attr('href', 'send-money.html');
        $('ul.tw-public-nav__dropdown-menu li:eq(4) a').attr('href', 'large-amounts.html');
        // $('a.footer-link').attr('href', '');
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
            $(this).attr('href', '/web');  
        }
        if (linkText === 'Register') {
            $(this).attr('href', '/web'); 
        }

        // footer
        if (linkText === 'Legal') {
            $(this).attr('href', 'terms-and-conditions.html'); 
        }

        if (linkText === 'Privacy policy') {
            $(this).attr('href', 'global-privacy-policy-en.html'); 
        }

        if (linkText === 'Cookie Policy') {
            $(this).attr('href', 'cookie-policy.html'); 
        }

    });

});


