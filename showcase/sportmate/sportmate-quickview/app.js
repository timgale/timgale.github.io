/**
 * Project: SportMate
 * View: iOS Quickview
 * Date: 28/10/13
 */

/* VARIABLES */

// matches
matchMain 	 	   = PSD.MatchMain,
matchMainTrigger = PSD.MatchMainTrigger;
matchMenu 	     = PSD.MatchMenu,
matchesBelow     = PSD.MatchesBelow,
matchOne 		 	   = PSD.MatchOne,
matchTwo 		 	   = PSD.MatchTwo,
matchThree 	 	   = PSD.MatchThree,
matchFour 	 	   = PSD.MatchFour,
scrollMatches 	 = PSD.ScrollMatches;

// match menu
favouriteTrigger = PSD.FavouriteTrigger;

// transitions
animateSpring	= "spring(500, 30, 500)",
animateEase   = "ease";

// matches attributes
matchMainTrigger.opacity    = 0,
matchMenu.opacity 		      = 0,
matchMenu.y 					      = 420,
matchesBelow.y   	     	    = 580,
favouriteTrigger.opacity    = 0,
PSD.FavouriteActive.opacity = 0;

/* FUNCTIONS */

// show match menu
showMatchMenu = function() {

	// nudge matches below
	matchesBelow.animate({
		properties: {
			y: 670
		},
		curve: animateSpring,
		time: 200
	});
	
	// reveal match menu
	matchMenu.animate({
		properties: {
			opacity: 1,
			y: 443
		},
		curve: animateSpring,
		time: 200
	});

}

// hide match menu
hideMatchMenu = function() {

	// nudge matches below
	matchesBelow.animate({
		properties: {
			y: 580
		},
		curve: animateSpring,
		time: 200
	});
	
	// hide match menu
	matchMenu.animate({
		properties: {
			opacity: 0,
			y: 420
		},
		curve: animateSpring,
		time: 200
	});

}

// favourite match
favouriteMatch = function() {

	// add favourite
	addFavourite = function() {

		PSD.FavouriteActive.animate({
			properties: {
				opacity: 1
			},
			curve: animateEase,
			time: 350
		});

		PSD.FavouriteDefault.animate({
			properties: {
				opacity: 0
			},
			curve: animateEase,
			time: 350
		});

	}

	// remove favourite
	removeFavourite = function() {

		PSD.FavouriteActive.animate({
			properties: {
				opacity: 0
			},
			curve: animateEase,
			time: 350
		});

		PSD.FavouriteDefault.animate({
			properties: {
				opacity: 1
			},
			curve: animateEase,
			time: 350
		});

	}

	// set favourite toggle
	toggleMatchFav = utils.toggle(addFavourite, removeFavourite);

	// toggle event
	favouriteTrigger.on("click", function() {
		toggleMatchFav()();
	});

}

favouriteMatch();

//  match menu
toggleMatchMenu = utils.toggle(showMatchMenu, hideMatchMenu);

/* EVENTS */

// toggle match menu
matchMainTrigger.on("click", function() {
	toggleMatchMenu()();
});