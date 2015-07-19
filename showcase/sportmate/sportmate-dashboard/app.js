/*
 * app.js
 */

// match cellp
PSD.MatchCell.style.opacity = 0;

// match overlay
app.view.matchOverlay.superView = PSD.MatchCell;
app.view.matchOverlay.style.background = "#000";
app.view.matchOverlay.style.opacity = 0;

// main content
app.view.mainContent.style.background = "#FFF";
app.view.mainContent.superView = app.view.screen;

// scroll content
PSD.Scroll.superView = app.view.mainContent;

// define cursor states
PSD.ViewAllFixtures.style.cursor = "pointer";
PSD.ViewAllNews.style.cursor = "pointer";
PSD.Match.style.cursor = "pointer";

// icons
PSD.IconFavourite1.style.opacity = 0;
PSD.IconAlert1.style.opacity = 0;
PSD.IconFavourite2.style.opacity = 0;
PSD.IconAlert2.style.opacity = 0;
PSD.IconBack.style.opacity = 0;

PSD.Fixtures.style.opacity = 0;

// EVENTS

// match menu
PSD.Match.on("click", function(){});

matchMenu = function() {

	showMatchMenu = function() {

		PSD.IconFavourite1.scale = .5;
		PSD.IconAlert1.scale = .5;
		PSD.IconFavourite2.scale = .5;
		PSD.IconAlert2.scale = .5;

		PSD.MatchCell.animate({
			properties: {
				opacity: .8
			},
			time: 100,
			curve: animateEase
		});

		animate1 = new Animation({
			view: PSD.IconFavourite1,
			properties: {
				opacity: 1,
				scale: 1
			},
			time: 150,
			curve: animateEase
		});

		animate2 = new Animation({
			view: PSD.IconAlert1,
			properties: {
				opacity: 1,
				scale: 1
			},
			time: 150,
			curve: animateEase
		});

		animate3 = new Animation({
			view: PSD.IconFavourite2,
			properties: {
				opacity: 1,
				scale: 1
			},
			time: 150,
			curve: animateEase
		});

		animate4 = new Animation({
			view: PSD.IconAlert2,
			properties: {
				opacity: 1,
				scale: 1
			},
			time: 150,
			curve: animateEase
		});

		animate1.on("end", animate2.start);
		animate4.on("end", animate3.start);
		animate1.start();
		animate4.start();

	}

	hideMatchMenu = function() {

		PSD.IconFavourite1.scale = 1.5;
		PSD.IconAlert1.scale = 1.5;
		PSD.IconFavourite2.scale = 1.5;
		PSD.IconAlert2.scale = 1.5;

		PSD.MatchCell.animate({
			properties: {
				opacity: 0
			},
			time: 300,
			curve: animateEase
		});

		PSD.IconFavourite1.animate({
			properties: {
				opacity: 0,
				scale: 1
			},
			curve: animateSpring
		});

		PSD.IconAlert1.animate({
			properties: {
				opacity: 0,
				scale: 1
			},
			curve: animateSpring
		});

		PSD.IconFavourite2.animate({
			properties: {
				opacity: 0,
				scale: 1
			},
			curve: animateSpring
		});

		PSD.IconAlert2.animate({
			properties: {
				opacity: 0,
				scale: 1
			},
			curve: animateSpring
		});

	}

	toggleMatchMenu = utils.toggle(showMatchMenu, hideMatchMenu);

	PSD.Match.on("click", function() {
		toggleMatchMenu()();
	});

}

matchMenu();

slideForward = function(e) {

	slideLeft = new Animation({
		view: e,
		properties: {
			x: -640
		},
		time: 300,
		curve: animateEase
	});

	PSD.Fixtures.x = 320;

	PSD.NextFixtures.animate({
			properties: {
				opacity: 0
			},
			time: 300,
			curve: animateEase
		});

		PSD.Fixtures.animate({
			properties: {
				opacity: 1,
				x: 30
			},
			time: 300,
			curve: animateEase
		});

	menuHide = function() {

		burgerOut = new Animation({
			view: PSD.BurgerMenu,
			properties: {
				x: -640
			},
			time: 300,
			curve: animateEase
		});

		backIn = new Animation({
			view: PSD.IconBack,
			properties: {
				opacity: 1
			},
			time: 600,
			curve: animateEase
		});

		PSD.IconBack.style.cursor = "pointer";

		burgerOut.start();
		backIn.start();

	}

	slideLeft.start();
	menuHide();

}

slideBackward = function(e) {

	slideRight = new Animation({
		view: e,
		properties: {
			x: 0
		},
		time: 300,
		curve: animateEase
	});

	PSD.NextFixtures.x = -320;

	PSD.NextFixtures.animate({
			properties: {
				opacity: 1,
				x: 30
			},
			time: 300,
			curve: animateEase
		});

		PSD.Fixtures.animate({
			properties: {
				opacity: 0,
				x: 30
			},
			time: 300,
			curve: animateEase
		});

	menuShow = function() {

		burgerIn = new Animation({
			view: PSD.BurgerMenu,
			properties: {
				x: 30
			},
			time: 300,
			curve: animateEase
		});

		backOut = new Animation({
			view: PSD.IconBack,
			properties: {
				opacity: 0
			},
			time: 600,
			curve: animateEase
		});

		PSD.IconBack.style.cursor = "default";

		burgerIn.start();
		backOut.start();

	}

	slideRight.start();
	menuShow();

}

PSD.ViewAllFixtures.on("click", function() {
	slideForward(PSD.Scroll);
});

PSD.IconBack.on("click", function() {
	slideBackward(PSD.Scroll);
});