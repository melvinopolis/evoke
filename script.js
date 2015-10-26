$(document).ready(function() {
    // sidebar will be hidden and toggle with the menu icon on mobile and portait oriented tablets
    if ($(window).width() < 768) {
        var $sidebar = $('.sidebar')
        var $menu = $('nav .menu')

        $sidebar.hide();
        
        $menu.on('click', function() {
            $sidebar.slideToggle();
        });
    }

    // toggle visibility of user dropdown
    var $dropdown = $('.user-dropdown .dropdown');
    var $userDropdown = $('.user-dropdown');

    $dropdown.hide();
    $userDropdown.on('click', function() {
        $dropdown.slideToggle();
    });
});
