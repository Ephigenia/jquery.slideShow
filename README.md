jQuery.slideShow, Readme File:
==============================================================================
2010-08-22, [Marcel Eichner // Ephigenia](love@ephigenia.de)

# DESCRIPTION

This is a very simple and very easy to use slideshow plugin for jquery.
It will automatically create a slideshow with navigation out of your image
list. The plugin also provides different callbacks and options that let you
customize the way the slideShow react on mouse rollovers, clicks or
slideChanges.

If you downloaded this file with the sources you should visit
[jQuery.slideShow on github](http://github.com/Ephigenia/jquery.slideShow).

The script is licensed under [MIT License](http://www.opensource.org/licenses/mit-license.php)
and you can use it for free! All Images used are taken from the plugin’s
author [Marcel Eichner](http://www.marceleichner.de/illustration/).

# EXAMPLES

* [10hoch16.de](http://www.10hoch16.de)
* [The Weinmeister](http://www.the-weinmeister.com/)
* [Designhotel Elephant](http://www.designhotel-elephant.com/)

Want your site added to the list? Send me a message on github!

# FEATURES

* No DOM Tree manipulation or replacements
* Lots of options and callbacks to modify and extend slidshow
* Auto-Repeat, next, previous, stop and play
* Random start slide
* Navigate to slides via navigation links, hover cursor position
* Automatic slide size detection, event works with different heights
* Instance of slideshow returned, manipulating slideshow via JS

# USAGE

There are a lot of examples in the `examples/` directory in the release
showing how to use differnt options, alternate navigations and using of the
slideshow instances.

	var slideShow = $('div.slideShow').slideShow();
	
# OPTIONS

* `start` [integer|string, default: `0`]  
  index of slide to start with. Set to `random` or `rnd` to select a random
  start slide
* `interval` [integer, default: `3`]  
  seconds to wait before new slide starts
* `repeat` [boolean, default: `true`]  
  indicates if the slideshow should start new when reached the last slide
* `transition`  
	* `mode` [string, default `fade`]  
	  transition mode for slide changes, can also use `slide`
	* `speed` [integer, default `1000`]  
	  speed of transition
* `slideSize` [array, default `auto`]  
    size of slides to use, default is auto, which will determine the size of
    the slide automatically
	* `width` [integer]  
	* `height` [integer]  
* `slideClick` [callback]  
  custom callback called when a slide is clicked
* `gotoSlide` [callback]  
  custom callback called when a new slide is triggered

# UPDATES/FEEDBACK & BUGS

If you found a bug, check out for updates or anything else on this project
please visit the [jquery.slideShow Project Page on Github](http://github.com/Ephigenia/jquery.slideShow) and post it there under
"issues".

# CHANGELOG

* 2010-10-27
	* Added new option for transition mode `slide`

* 2010-10-08
	* Fixed Issue 1 "ply/pause button not working" by using the right interval
	  property in the code

* 2010-09-25
	* Added OPTIONS and USAGE part in this file

* 2010-09-16
	* Added feature where the height of the slideshow is dynamically changed
	  if the slides change their height. That is especially helpfull for
	  slides with alt image texts
	* Moved example display to the top and example description and source
	  to bottom on every example source
	* Added example for thumbnail navigation
	* Fixed bug where first selected item gets deselected on init
	* Slideshow stop stops also in safari
	
* 2010-08-22
	* Created repository on [Github](Github)
	* Split examples into single files
	
* 2010-04-06
	* fixed bug in navigation click with numbers when slideshow skipped to
	slide +1

* 2009-11-25
	* fixed single equal sign in random start mode (thanks to Jean-Philippe)

* 2009-10-22
	* added method for toggling slideshow playback (togglePlayback)
	* added method for reading playback status of slideshow
	* added example for this to the project page
	* changed format of this changelog to markdown
	* Random slideshow possible

* 2009-07-20
	* fixed bug: use of images in navigation, click on .page fixed index

* 2009-07-02
	* added license informations and minified version of slideshow javascript
