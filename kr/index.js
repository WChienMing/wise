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

    $('a.footer-link').each(function() {
        if ($(this).text().trim() === '국가 웹사이트 지도') {
            $(this).closest('.footer-bottom-item').hide();
        }
    });

    $('a.footer-link').each(function() {
        if ($(this).text().trim() === 'Country site map') {
            $(this).closest('.footer-bottom-item').hide();
        }
    });

    function checkLinks(){
        

        $('a.tw-public-nav__logo-link.tw-public-nav__logo-link--text').attr('href', '/wise/kr/');
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
        if (linkText === '법률' || linkText === 'Legal') {
            $(this).attr('href', 'terms-and-conditions.html'); 
        }

        if (linkText === '개인 정보 보호' || linkText === 'Privacy policy') {
            $(this).attr('href', 'global-privacy-policy-en.html'); 
        }

        if (linkText === '쿠키 정책' || linkText === 'Cookie Policy') {
            $(this).attr('href', 'cookie-policy.html'); 
        }

        if (linkText === '고객 지원 센터') {
             $(this).attr('href', 'complaint.html'); 
        }

        if (linkText === '현대 노예제') {
            $(this).attr('href', 'images_cf1beb39f5b9261166281ad9ccaa9f30-Modern_Slavery_and_Human_Trafficking_Statement_for_Wise_Group_.pdf'); 
        }

        if (linkText === '국가 웹사이트 지도') {
            $(this).attr('href', '#'); 
        }
    });

});


