"use strict";

/* Emoji Directive */

angular.module( "emoji", [] )
  .directive( "emoji", function () {
    return {
      restrict: "AE",
      link: function ( scope, element, attributes ) {
        var output = element.html().replace( /:([a-z0-1-+]+):/, function ( match, text ) {
          return "<i class=\"emoji--" + text + "\" title=\" " + text + "\">" + text + "</i>"
        } );
        element.html(output);
      }
    }
  } );
