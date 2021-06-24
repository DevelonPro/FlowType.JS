/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*
* Forked by DevelonPro and converted to pure JS
*/

class FlowType {
   constructor(element, options = {}) {
      this.element = document.querySelectorAll(element)
      this.options = { ...this.defaultOptions(), ...options }
      this.apply()
   }

   /**
    * Establish default settings/variables
    */
   defaultOptions() {
      return {
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35
      }
   }

   /**
    * Do the magic math
    */
   changes (element) {
      const elw = element.offsetWidth,
      width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
      fontBase = width / settings.fontRatio,
      fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
      element.style.fontSize = (fontSize + 'px')
   }

   /**
    * Applies on load/resize
    */
   apply () {
      if (this.element.length) {
         this.element.forEach(element => {
            this.changes(element)
            window.addEventListener('resize', () => this.changes(element))
            window.addEventListener('load', () => this.changes(element))
         })
      }
   }
}

export default FlowType
