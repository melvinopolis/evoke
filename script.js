$(document).ready(function() {
    // sidebar will be hidden and toggle with the menu icon on mobile and portait oriented tablets
    if ($(window).width() < 770) {
        var $sidebar = $('.sidebar')
        var $menu = $('nav .menu')

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
