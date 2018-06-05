function loadFooter() {
    var footer = $('.footer');
    var footerContent = $("<div id='footer-content'>");
    var lesMillsMotto = $("<div id='lesmills-motto'>");
    var planet = $("<p class='planet'>").html("FOR A FITTER PLANET").appendTo(lesMillsMotto);
    var info = $("<p class='info'>").html("We are on a mission to create a fitter planet. <br> This does not mean making people work out. <br> It means helping people fall in love with <br> fitness so they want to work out").appendTo(lesMillsMotto);
    lesMillsMotto.appendTo(footerContent);

    var nav = $("<div id='navigationFooter'>");
    var list = $("<ul id='menuListFooter'>");
    var link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/index.html").html("Home");
    var home = $("<li class='navChangeColor'id='home'>").append(link).appendTo(list);
    link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/exercise.html").html("Excercise");
    var excercise = $("<li class='navChangeColor' id='excercise'>").append(link).appendTo(list);
    link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/schedule.html").html("Schedule");
    var schedule = $("<li class='navChangeColor' id='Schedule'>").append(link).appendTo(list);
    link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/gallery.html").html("Gallery");
    var gallery = $("<li class='navChangeColor' id='gallery'>").append(link).appendTo(list);
    link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/contact.html").html("Contact Us");
    var contact = $("<li class='navChangeColor' id='contact'>").append(link).appendTo(list);
    list.appendTo(nav);
    nav.appendTo(footerContent);


    var programDiv = $("<div id='programDiv'>");
    var programsList = $("<ul id='programs'>");
    var classes = $("<li class='classes'>").html('FITNESS CLASSES:').appendTo(programsList);
    var classes = $("<li class='classes'>").html('BodyPump').appendTo(programsList);
    var classes = $("<li class='classes'>").html('BodyStep').appendTo(programsList);
    var classes = $("<li class='classes'>").html('BodyFlow').appendTo(programsList);
    var classes = $("<li class='classes'>").html('BodyAttack').appendTo(programsList);
    var classes = $("<li class='classes'>").html('Cxworx').appendTo(programsList);
    programsList.appendTo(programDiv);
    programDiv.appendTo(footerContent);
    
    footerContent.appendTo(footer);
}
