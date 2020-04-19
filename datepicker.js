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





});