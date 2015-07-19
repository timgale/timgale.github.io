/*
 * view.js
 */

// create global app object
app = {}

// create view property
app.view = {}

// VIEWS

// screen view
app.view.screen = new ScrollView({
	width: 640,
	height: 960
});

app.view.screen.style.background = "#333";

// nav bar view
app.view.navBar = new View({
	width: 640,
	height: 210
});

PSD.Header.superView = app.view.navBar;

// main content view
app.view.mainContent = new View({
	width: 640,
	height: 960,
	y: 198
});

// match overlay
app.view.matchOverlay = new View({
	width: 640,
	height: 108
});