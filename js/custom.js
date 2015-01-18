/*
 * © 2015 Alexander Williams, Unscramble, MIT License
 * Custom JavaScript
 */

(function() {
  var deck = bespoke.from('#contributions', [
    bespoke.plugins.classes(),
    bespoke.plugins.keys(),
    bespoke.plugins.touch(),
    bespoke.plugins.progress(),
    bespoke.themes.cube()
  ]);

  var arrowListener = function() {
    $('#arrow-left').click(function() {
      return deck.prev();
    });
    $('#arrow-right').click(function() {
      return deck.next();
    });
  }
  arrowListener();
  hljs.initHighlightingOnLoad();
  $('[data-toggle="tooltip"]').tooltip();

}).call(this);
