function getSubmenus() {
    return [$('#about_me_menu'), $('#about_this_site_menu'), $('#github_menu')];
}

function submenu() {
    var submenus = getSubmenus();
    jQuery.each(submenus, function (index, menu) {
	menu.removeClass('hidden');
    });
}

function aboutMe() {
    $('#logo').slideDown();
    var canvas = $('#canvas');
    canvas.removeClass('hidden');
//	canvas.innerText =
//	"When I am not at a computer, I can be found doing a lot of things. I love gardening, movies, reading,
//	biking, going to parks, and exploring all corners of Austin. If you have a restaurant recommendation for a place
//	I have likely not been yet, send me a message, because I want to check it out! Before settling in Austin,
//	I had the opportunity to do a lot of exciting things in various cities around the US.Including: Nonprofit Organizer
//	in Minneapolis, Americorps Member in Charleston, South Carolina, Math Teacher in Bloomington Indiana, and Math
//	Teacher in Chicago.Now that I am a software developer in Austin TX, I find so many parallels between previous
//	cities and careers that I can bring a depth of experience and flexible attitude wherever I go.";

}

function aboutThisSite() {
    $('#logo').slideDown();
    var canvas = $('#canvas');
    canvas.removeClass('hidden');
    canvas.innerHTML = 'hi';
//    canvas.innerHTML = "This site has had many iterations and will probably always be a WIP for me in some way. The way I went about designing the 
//	site had a lot to do with finding a great workflow (I needed something I could do casually in the evenings and was 
//	easy to break down tasks) for myself combined with something that would be highly scalable/modifiable (hence why it will probably
//		always be a WIP. Starting with the foundation of a basic landing page with a handful of javascript events on the page I 
//		quickly came up with new ideas to integrate. Since everything is focused around the central logo, any additions to the
//			site only required a new submenu and I could link to another project.";
}

function github() {
    $('#logo').slideDown();
    var canvas = $('#canvas');
    canvas.removeClass('hidden');
    canvas.innerHTML('my github has samples of r scripts and the sourcecode for this website');
    window.location = window.location.href('www.github.com/sarapearce');
}

function returnHomeScreen() {
    var submenus = getSubmenus();
    jQuery.each(submenus, function (index, menu) {
	if (!menu.hasClass('hidden')) {
	    menu.addClass('hidden');
	}
    });
}
