/* Copyright (c) 2006-2011 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the Clear BSD license.  
 * See http://svn.openlayers.org/trunk/openlayers/license.txt for the
 * full text of the license. */

var OpenLayers = {
    /**
     * Constant: VERSION_NUMBER
     */
    VERSION_NUMBER: "Release 2.11",

    /**
     * Constant: singleFile
     * TODO: remove this in 3.0 when we stop supporting build profiles that
     * include OpenLayers.js
     */
    singleFile: true
};

(function() {
    var scriptName = "OpenLayers.js";
    var r = new RegExp("(^|(.*?\\/))(" + scriptName + ")((\\.[a-zA-Z]+)?\\?.*|$)"),
        s = document.getElementsByTagName('script'),
        src, m, path = "", suffix = "";
    for(var i=0, len=s.length; i<len; i++) {
        src = s[i].getAttribute('src');
        if(src) {
            var m = src.match(r);
            if(m) {
                path = m[1];
                suffix = m[4];
                break;
            }
        }
    }

    /**
      * Method: _getScriptLocation
      * Return the path to this script. This is also implemented in
      * OpenLayers/SingleFile.js
      *
      * Returns:
      * {String} Path to this script
      */
    OpenLayers._getScriptLocation = function() {
        return path;
    };

    /**
      * Method: fullPathTo
      * Return the full path to a specified file, including the suffix from the original 
      * OpenLayers.js file
      *
      * Returns:
      * {String} File with full path and suffix
      */
    OpenLayers.fullPathTo = function(file) {
        return path + file + suffix;
    }
})();