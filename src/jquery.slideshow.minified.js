/**
 *	jquery.slideShow (1.0.7)
 * 	by Marcel Eichner (www.marceleichner.de) <love@ephigenia.de>
 *		and charles kline <ckline@discmakers.com>
 * 
 *	this is the compressed source (http://jscompress.com/)
 *	learn more about this plugin and other projects at:
 *	http://code.marceleichner.de/project/jquery.slideShow/
 *
 *	Copyright (c) 2009 Marcel Eichner (www.marceleichner.de)
 *	Licensed under the MIT license:
 *	http://www.opensource.org/licenses/mit-license.php
 *
 *	NOTE: This script requires jQuery to work.  Download jQuery at www.jquery.com
 */
(function($){$.fn.slideShow=function(options){if(this.length>1){this.each(function(){$(this).slideShow(options)});return this;}
this.defaults={start:0,interval:3,repeat:true,transition:{mode:'fade',speed:1000},slideSize:'auto',hoverNavigation:false,slideClick:false,gotoSlide:false,mousePause:false};this.options=$.extend({},this.defaults,options);this.numSlides=this.find('.slide').length;if(this.options.start=='random'||this.options.start=='rnd'){this.current=Math.floor(Math.random()*this.numSlides)+1;}else{this.current=this.options.start;}
if(this.current>=this.numSlides){this.current=this.numSlides-1;}
this.last=false;this.elm=$(this);this.interval=false;this.mouse={x:0,y:0,over:false};this.init=function(){if(this.find('.slides').length){if(this.options.slideSize=='auto'){this.options.slideSize={width:this.find('.slide:first img').width(),height:this.find('.slide:first img').height()};}
if(this.options.slideSize!='none'&&this.options.slideSize!=false){this.find('.slides').css({height:this.options.slideSize.height+'px',width:this.options.slideSize.width+'px',overflow:'hidden'});}}
this.find('.slide').css('position','absolute');this.find('.slide:not(:eq('+this.current+'))').hide();this.find('.first, .next, .prev, .last, .navigation, .slide, .page, .slides').data('slideShow',this);this.find('.first').click(this.first);this.find('.next').click(this.next);this.find('.prev').click(this.previous);this.find('.last').click(this.last);this.find('.navigation .page:eq('+this.current+')').addClass('selected');this.find('.page').click(function(e){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
var index=$(this).html();if(!(index=parseInt($(this).html()-1))){var index=$(this).parents('.navigation').find('.page').index($(this));}
e.preventDefault();slideShow.gotoSlide(index);});this.find('.slide').mousemove(function(event){var slideShow=$(this).data('slideShow');slideShow.mouse.x=Math.abs(event.clientX-$(this).position().left);slideShow.mouse.y=Math.abs(event.clientY-$(this).position().top);if(slideShow.mouse.x>slideShow.options.slideSize.width)slideShow.mouse.x=slideShow.options.slideSize.width;if(slideShow.mouse.y>slideShow.options.slideSize.height)slideShow.mouse.y=slideShow.options.slideSize.height;if(slideShow.options.hoverNavigation){var index=Math.round((slideShow.numSlides-1)*slideShow.mouse.x/slideShow.options.slideSize.width);slideShow.gotoSlide(index,true);}});this.find('.slide').mouseenter(function(){var slideShow=$(this).data('slideShow');slideShow.mouse.over=true;if(!slideShow.options.mousePause){slideShow.stopAuto();}});this.find('.slide').mouseleave(function(){var slideShow=$(this).data('slideShow');slideShow.mouse.over=false;slideShow.auto();});if(typeof(this.options.slideClick)=='function'){this.find('.slide').click(function(){var slideShow=$(this).data('slideShow');slideShow.options.slideClick(slideShow);});}
var g=this.current;this.current=-1;this.gotoSlide(g);if(this.options.interval>0){this.auto();}
return this;};this.auto=function(){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
if(!slideShow.interval&&slideShow.options.interval>0.001){slideShow.interval=window.setInterval(function(){slideShow.next();},slideShow.options.interval*1000);}
return this;}
this.isPlaying=function(){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
return slideShow.interval;}
this.togglePlayback=function(){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
if(slideShow.isPlaying()){slideShow.stopAuto();}else{slideShow.auto();}},this.stopAuto=function(){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
if(slideShow.interval){window.clearInterval(slideShow.interval);slideShow.interval=false;}
return this;}
this.first=function(elm){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
return slideShow.gotoSlide(0);};this.next=function(){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
return slideShow.gotoSlide(slideShow.current+1);};this.previous=function(){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
return slideShow.gotoSlide(slideShow.current-1);};this.last=function(){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
return slideShow.gotoSlide(slideShow.numSlides);};this.gotoSlide=function(index,noanimation){if(index<0){index=this.numSlides-1;}
if(index>=this.numSlides){index=0;}
if(index===this.current)return this;var oldSlide=this.find('.slide:eq('+this.current+')');var newSlide=this.find('.slide:eq('+index+')');var oldFinished=function(){$(this).removeClass('selected');if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
slideShow.elm.find('.navigation .page:eq('+slideShow.current+')').addClass('selected');if(!slideShow.mouse.over){slideShow.auto();}}
var newFinished=function(){if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
if(slideShow.current>=0){slideShow.elm.find('.navigation .page:not(:eq('+slideShow.current+'))').removeClass('selected');}
$(this).addClass('selected');}
if(!(slideShow=$(this).data('slideShow'))){var slideShow=this;}
slideShow.stopAuto();if(typeof(this.options.gotoSlide)=='function'){this.options.gotoSlide(slideShow,index);}
if(noanimation){oldSlide.hide(1,oldFinished);newSlide.show(1,newFinished);}else{if(typeof(this.options.transition.mode)=='function'){this.call(this.options.transition.mode,newSlide,oldSlide);}else{switch(this.options.transition.mode){default:case'fade':oldSlide.fadeOut(this.options.transition.speed,oldFinished);newSlide.fadeIn(this.options.transition.speed,newFinished);break;case'slide':if(this.current==-1){oldSlide.hide(0,oldFinished);newSlide.show();}else{oldSlide.animate({},{});oldSlide.animate({width:'hide'},this.options.transition.speed,oldFinished);newSlide.animate({width:'show'},this.options.transition.speed,newFinished);}
break;}}}
this.find('.slides').animate({height:newSlide.height()});this.last=this.current;this.current=index;return this;};return this.init();}})(jQuery);