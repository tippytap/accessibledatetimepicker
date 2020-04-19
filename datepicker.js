(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define(['buoy'], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(require('buoy'));
	} else {
		root.myPlugin = factory(root, root.buoy);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

    // Plugin stuff...
    'use strict';

    /**
     * SETUP
     */
    var a11yDateTimePicker = {};

    // !! is the truthy value. Two bangs determines the opposite of the truthy/falsy value and then reverses it
    //    so you know whether it actually exists or not. Neat!
    var supports = !!document.querSelector && !!root.addEventListener;

    // we will fill this later
    var settings; 

    // we will fill this later
    // with public methods. This is the returned object from the regular revealing module pattern
    var defaults = {
        stubVar: "",
        initClass: "js-a11yDateTimePicker",
        callBackBefore: function(){},
        callBackAfter: function(){}
    };


    /**
     * METHODS
     */

    // events
    var eventHandler = function(e){

    };

    // destroy
    a11yDateTimePicker.destroy = function(){

        if(!settings) return;

        document.documentElement.classList.remove(settings.initClass);

        //
        // TODO undo any init work
        //

        document.removeEventListener('click', eventHandler, false);

        // reset all vars
        settings = null;

    };
    

});