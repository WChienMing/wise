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

    function addItems() {
        var windowWidth = $(window).width();
        var $menu = $('.tw-public-nav__dropdown-menu');
        var $existingItems = $menu.find('.item');

        var url = window.location.pathname;
        var manageMoneyText = '자금 관리';
        var wiseCardText = 'Wise 카드';

        if (url.includes('terms-and-conditions.html') || url.includes('global-privacy-policy-en.html') || url.includes('cookie-policy.html') ) {
            manageMoneyText = 'Manage your money';
            wiseCardText = 'Wise card';
        }


        if (windowWidth <= 991 && $existingItems.length === 3) {
            var manageMoneyHtml = '<li class="item"><a href="/my/features/" class="callout-container tw-public-nav__dropdown-content"><strong class="tw-link-with-chevron">'+ manageMoneyText +'<span class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon" aria-hidden="true" role="presentation" data-testid="chevron-right-icon"><svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M16.629 11.571 8.057 3l-1.2 1.2 7.972 7.971-7.972 7.972 1.2 1.2 8.572-8.572a.829.829 0 0 0 0-1.2Z"></path></svg></span></strong></a></li>';
            var wiseCardHtml = '<li class="item"><a href="/my/card/" class="callout-container tw-public-nav__dropdown-content"><strong class="tw-link-with-chevron">'+ wiseCardText +'<span class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon" aria-hidden="true" role="presentation" data-testid="chevron-right-icon"><svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M16.629 11.571 8.057 3l-1.2 1.2 7.972 7.971-7.972 7.972 1.2 1.2 8.572-8.572a.829.829 0 0 0 0-1.2Z"></path></svg></span></strong></a></li>';

            $menu.find('.item').eq(1).before(wiseCardHtml);
            $menu.find('.item').eq(0).after(manageMoneyHtml);
        }
    }


    function checkAndHandleItems() {

        var windowWidth = $(window).width();
        var url = window.location.pathname;
        var manageMoneyText = '자금 관리';
        var wiseCardText = 'Wise 카드';

        if (url.includes('terms-and-conditions.html') || url.includes('global-privacy-policy-en.html') || url.includes('cookie-policy.html') ) {
            manageMoneyText = 'Manage your money';
            wiseCardText = 'Wise card';
        }

        if (windowWidth > 992) {
            var $menu = $('.tw-public-nav__dropdown-menu');
            var $existingItems = $menu.find('.item');

            if ($existingItems.length === 3) {
                var manageMoneyHtml = '<li class="item"><a href="/my/features/" class="callout-container tw-public-nav__dropdown-content"><strong class="tw-link-with-chevron">' + manageMoneyText + '<span class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon" aria-hidden="true" role="presentation" data-testid="chevron-right-icon"><svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M16.629 11.571 8.057 3l-1.2 1.2 7.972 7.971-7.972 7.972 1.2 1.2 8.572-8.572a.829.829 0 0 0 0-1.2Z"></path></svg></span></strong></a></li>';
                var wiseCardHtml = '<li class="item"><a href="/my/card/" class="callout-container tw-public-nav__dropdown-content"><strong class="tw-link-with-chevron">' + wiseCardText + '<span class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon" aria-hidden="true" role="presentation" data-testid="chevron-right-icon"><svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M16.629 11.571 8.057 3l-1.2 1.2 7.972 7.971-7.972 7.972 1.2 1.2 8.572-8.572a.829.829 0 0 0 0-1.2Z"></path></svg></span></strong></a></li>';


                $menu.find('.item').eq(1).before(wiseCardHtml);
                $menu.find('.item').eq(0).after(manageMoneyHtml);
            }
        }
    }


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


    $('.tw-public-nav__dropdown-toggle').on('click', function() {
        var links = $('ul.tw-public-nav__dropdown-menu li a');
        var newUrls = ['account.html', 'features.html', 'card.html', 'send-money.html', 'large-amounts.html'];

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

        if (linkText === '고객 지원 센터' || linkText === 'Help center') {
             $(this).attr('href', 'complaint.html'); 
        }

        if (linkText === '현대 노예제' || linkText === 'Modern slavery statement') {
            $(this).attr('href', 'images_cf1beb39f5b9261166281ad9ccaa9f30-Modern_Slavery_and_Human_Trafficking_Statement_for_Wise_Group_.pdf'); 
        }

        if (linkText === '국가 웹사이트 지도' || linkText === 'Modern slavery statement') {
            $(this).attr('href', '#'); 
        }
    });



    addItems();
    checkAndHandleItems();
    checkLinks();


    $(window).resize(function() {
        addItems();
        checkAndHandleItems();
    });

    setInterval(function() {
        addItems();
        checkAndHandleItems();
        checkLinks();
    }, 1000);
});

