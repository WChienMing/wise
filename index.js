$(document).ready(function() {


    const apiUrl = 'https://startupter.com/api/global/lookup';
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        
        const androidLink = data.data.system.ANDROID_LINK;
        const iosLink = data.data.system.IOS_LINK;

        const appStoreLink = document.querySelector('.m-t-5 .Slide2_storeLinks__5TxTd a:nth-child(1)');
        const googlePlayLink = document.querySelector('.m-t-5 .Slide2_storeLinks__5TxTd a:nth-child(2)');

        if (appStoreLink && iosLink) {
            appStoreLink.href = iosLink;
        }
        if (googlePlayLink && androidLink) {
            googlePlayLink.href = androidLink;
        }

        // console.log('Android Link:', androidLink);
        // console.log('iOS Link:', iosLink);

      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });



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
        if ($(this).text().trim() === 'Country site map') {
            $(this).closest('.footer-bottom-item').hide();
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
            $(this).attr('href', '/register'); 
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

        if (linkText === 'Help center') {
            $(this).attr('href', 'complaint.html'); 
        }

        if (linkText === 'Modern slavery statement') {
            $(this).attr('href', 'images_cf1beb39f5b9261166281ad9ccaa9f30-Modern_Slavery_and_Human_Trafficking_Statement_for_Wise_Group_.pdf'); 
        }

        if (linkText === 'Country site map') {
            $(this).attr('href', '#'); 
        }

    });

    var logoDiv = document.querySelector('.tw-public-nav__logo');
    var logoImg = document.createElement('img');
    logoImg.src = 'static-assets/app/_next/static/media/logo.png';
    logoImg.alt = 'Logo';
    var logoLink = logoDiv.querySelector('.tw-public-nav__logo-link');
    logoImg.style.width = '200px';
    logoImg.style.height = 'auto';
    
    var style = document.createElement('style');
    style.type = 'text/css';

    style.innerHTML = `
    .tw-public-nav__logo-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tw-public-nav__logo-link img {
        width: auto;
        max-width: none;
        height: auto;
    }

    .tw-public-nav__logo-link svg {
        display: none;
    }

    @media (max-width: 576px) {
        .tw-public-nav__logo-link img {
            display: none;
        }
        
        .tw-public-nav__logo-link svg {
            display: block;
        }
    }`;

    document.head.appendChild(style);

    logoLink.appendChild(logoImg);

});


