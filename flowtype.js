/*
* If you create a derivative, please leave this text intact:
*
* FlowType.JS 1.0
* Copyright 2013, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under a Creative Commons Attribution-ShareAlike
* 3.0 Unported License. Learn more about this license at:
* http://creativecommons.org/licenses/by-sa/3.0/deed.en_US
*/

(function($) {
   $.fn.flowtype = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35,
         lineRatio : 1.45
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            fontBase = width / settings.fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;

         $el.css({
            'font-size'   : fontSize + 'px',
            'line-height' : fontSize * settings.lineRatio + 'px'
         });
      };

// Make the magic visible
// ======================
      return this.each(function() {
         
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
         
      // Set changes on load
         changes(this);
      });
   };
}(jQuery));