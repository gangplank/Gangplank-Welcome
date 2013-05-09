Gangplank-Welcome
=================

The first thing you see when walking in to any Gangplank. Sign-in, collaborate, get a tour.

__Nothing here yet__

This is currently a simple HTML mock-up of the first screen. Feel free to replace this entirely... Currently looking at making this for iOS and / or Android for use on a tablet installed inside at the entrance. Framework may change but for now I'm assuming this will be created on Cordova.

BTW: Foundation was used for quick prototyping. Angular was thrown in for kicks.

See screen-shots of layout sketch (coming soon).

 == App Outline ==

This needs to be refined / updated, typed from memory...

	* Welcome Screen - "What brings you here?"
		* Skull logo => Shortcut to Returning User Sign In
		* Meeting
		* Mentoring
		* Event
		* Co-working
		* I Don't Know => Alert Now for Tour/Help
	* Meeting / Event / Mentoring
		* First time here? => Store Value, Move On
		* Been here before? => Returning User Sign In
	* Co-working
		* First time here? => Store Value, Move On
		* Been here before? => Returning User Sign In
	* New Gangplanker Sign In
		* Name (Required)
		* (Hidden: Purpose [from first question])
		* (Optional)
			* Company
			* Email Address
			* @Twitter
		* On Save, to Thank You
	* Returning User Sign In
		* Autocomplete name/ID field.
		* Sign in with barcode, QR, RFID, NFC, or something else... perhaps.
	* Thank You for Meeting Sign In
		* Ask if Person Needs Help Finding Person for Meeting, If Yes => Alert
		* On to general thank you.
	* General Thank You
		* Thank You Message.
		* Ask if they want a Tour... (Or if they said new/first time, hidden yes automatically)
		* If twitter name provided: Offer a twitter post in the format of "@GPChandler welcomes @twittername", yes or no.
		* Offer a newsletter sign up: 
		* 10 second timer to app home
		
	* Once a day (around 6PM) take the count of co-workers and first timers and tweet:
		* "Today, @GPChanlder welcomed XX total and YY first time gangplankers!" w/ variations.	
== More Details ==

For more information talk to Jeremy Scott or David Monaghan.
