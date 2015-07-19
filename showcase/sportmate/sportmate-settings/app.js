// global variables
mainMenu = PSD.Menu;
mainScreen = PSD.MainBackground;
mainContent = PSD.QuickViewContent;
settingsLevelOne = PSD.SettingsLevelOne;
upIcon = PSD.UpIcon;

mainMenu.superView = mainScreen;
mainContent.superView = mainScreen;
settingsLevelOne.superView = mainScreen;

// disbale overflow on superview
mainScreen.clip = true;

settingsLevelOne.x = 0;
settingsLevelOne.y = 640;
settingsLevelOne.opacity = 0;

PSD.MySportMate.style.cursor = "pointer";
PSD.UpIcon.style.cursor = "pointer";

PSD.UpIcon.superView = mainScreen;
PSD.UpIcon.x = 30;
PSD.UpIcon.opacity = 0;

PSD.SectionAlerts.superView = mainScreen;
PSD.SectionAlerts.x = 30;
PSD.SectionAlerts.opacity = 0;

// functions

// reveal settings
revealSettings = function(e1, e2) {

	// slide up transition
	slideUp = new Animation({
		view: e1,
		properties: {
			y: -100,
			opacity: 0
		},
		curve: "ease",
		time: 400
	});

	// hide main ui
	slideOut = new Animation({
		view: e2,
		properties: {
			x: 640
		},
		curve: "ease",
		time: 400
	});

	// settings slide up
	settingsSlideUp = new Animation({
		view: settingsLevelOne,
		properties: {
			y: 190,
			opacity: 1
		},
		curve: "ease",
		time: 400
	});

	// menu icon
	menuIconReveal = new Animation({
		view: PSD.UpIcon,
		properties: {
			opacity: 1
		},
		curve: "ease",
		time: 300
	});

	slideUp.start();
	slideOut.start();
	settingsSlideUp.start();
	settingsSlideUp.on("end", menuIconReveal.start);

}

// hide settings
hideSettings = function(e1, e2) {

	// settings slide down
	settingsSlideDown = new Animation({
		view: e1,
		properties: {
			y: 960,
			opacity: 0
		},
		curve: "ease",
		time: 400
	});

	// menu slide down
	menuSlideDown = new Animation({
		view: e2,
		properties: {
			y: 80,
			opacity: 1
		},
		curve: "ease",
		time: 400
	});

	// reveal main ui
	slideIn = new Animation({
		view: mainContent,
		properties: {
			x: 560
		},
		curve: "ease",
		time: 400
	});

	// hide menu icon
	menuIconHide = new Animation({
		view: PSD.UpIcon,
		properties: {
			opacity: 0
		},
		curve: "ease",
		time: 200
	});

	menuIconHide.start();
	settingsSlideDown.start();
	menuSlideDown.start();
	slideIn.start();

}

// events
PSD.MySportMate.on("click", function() {
	revealSettings(mainMenu, PSD.QuickViewContent);
});

PSD.UpIcon.on("click", function() {
	hideSettings(settingsLevelOne, mainMenu);
});