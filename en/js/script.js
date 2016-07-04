/**
 * check element is exists, not null, not empty
 *
 * @param  {Element} $element element that you want to check
 * @return {Boolean}
 */


function isExists( $element ) {
  return $element.length > 0;
}

/**
 * check attr is exists
 *
 * @param  {Element} $element element that you want to check
 * @param  {String}  attrName attr name of element
 * @return {Boolean}
 */
function hasAttr( $element, attrName ) {
  var attr = $element.attr( attrName );
  
  // some browsers, `attr` is undefined
  // some browsers, `attr` is false
  if (typeof attr !== typeof undefined && attr !== false) {
    return true;
  } else {
    return false;
  }
}

/**
 * check attr 'data-*' is exists
 *
 * @param  {Element} $element     element that you want to check
 * @param  {String}  dataAttrName attr name that you want to check (e.g. 'test', function will looking for 'data-test')
 * @return {Boolean} 
 */
function hasDataAttr( $element, dataAttrName ) {
  return hasAttr( $element, 'data-' + dataAttrName );
}

jQuery( document ).ready(function() {
  
    $('#fav').click(function(e) {
    var bookmarkURL = window.location.href;
    var bookmarkTitle = document.title;

    if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
      // Mobile browsers
      addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
    } else if (window.sidebar && window.sidebar.addPanel) {
      // Firefox version < 23
      window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
      // Firefox version >= 23 and Opera Hotlist
      $(this).attr({
        href: bookmarkURL,
        title: bookmarkTitle,
        rel: 'sidebar'
      }).off(e);
      return true;
    } else if (window.external && ('AddFavorite' in window.external)) {
      // IE Favorite
      window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
      // Other browsers (mainly WebKit - Chrome/Safari)
      alert('Press ' + (/Mac/i.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
    }

    return false;
  });
    
  // declaration
  var $toTopBtn = $( '.to-top-btn' );

  /**
   * bind go to top function on the button
   */
  function setGoToTopBtn() {
    $toTopBtn.click(function( e ) {
      e.preventDefault();
      $( 'html, body' ).animate({ scrollTop: 0 }, 'slow' );
    });
  }

  /**
   * set preload then hide when load complete
   */
  function setPreload() {
    var $loading = $( '#loading' );
    var delayTime = 600;

    setTimeout(function(){
      $loading
        .delay( delayTime )
        .fadeOut( 'slow', function(){
          $( this ).remove();
        });

      $('body')
        .delay( delayTime * 2 )
        .attr('style', 'overflow: visible !important;');

    }, delayTime );
  }

  /**
   * set dynamic year of copyright on footer
   */
  function setDynamicCopyrightYear() {
      var anio = (new Date).getFullYear();
     $( '.copyright' ).find( 'span.year' ).text( anio );
  }

  /**
   * set all functions that have to check when you scroll
   */
  function setWindowScrollFunction() {
    var offset = $( window ).height() / 2;
    if ( $( this ).scrollTop() > offset ) {

      // go to top button show
      $toTopBtn
        .css( 'opacity', '1' )
        .css( 'cursor', 'pointer' );

       $( '#contact-section' ).css( 'top', '76px' );

    } else {

      // go to top button hide
      $toTopBtn
        .css( 'opacity', '0' )
        .css( 'cursor', 'default' );

      $( '#contact-section' ).css( 'top', '244px' );
    }
  }

  /**
   * initial all script functions
   */
  var initMainScript = new function() {
    
    setWindowScrollFunction();
    setGoToTopBtn();
    setDynamicCopyrightYear();

    setPreload();
  }

  /**
   * when window scroll
   */
  $( window ).scroll(function() {
    setWindowScrollFunction();
  });

  

  /**
   * when window resize
   */
  $( window ).resize(function() {
    
  });
});
