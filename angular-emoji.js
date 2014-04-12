"use strict";

/* Emoji Directive */

angular.module( "emoji", [] )
  .directive( "emoji", function () {
    return {
      restrict: "AE",
      scope: {
        source: "=emoji"
      },
      link: function ( scope, element, attributes ) {
        var input = scope.source || element.html();
        var output = input.replace( /:([a-z0-1-+]+):/, function ( match, text ) {
          return "<i class=\"emoji--" + text + "\" title=\" " + text + "\">" + text + "</i>"
        } );
        element.html(output);
      }
    }
  } );
