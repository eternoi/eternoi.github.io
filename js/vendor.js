jQuery( document ).ready(function () {

  /**
   * set tooltip by bootstrap
   */
  function setBootstrapTooltip() {
    if ( $.fn.tooltip ) {
      $( '[data-toggle="tooltip"]' ).tooltip();
    }
  }

  /**
   * set ripple effect by Waves
   * work on chrome only
   */
  function setRippleEffect() {
    if ( Waves.displayEffect() ) {
      Waves.displayEffect();  
    }
  }

  /**
   * set lightbox by MagnificPopup
   */
  function setLightbox() {
    if ( $.fn.magnificPopup ) {
      $( '.mfp-zoom' ).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
          verticalFit: true
        }
      });
    }
  }

 
  /**
   * set google map
   *
   * @param {Number} la latitude 
   * @param {Number} ln longitude
   */
  function setGoogleMap( la, ln, zoomLevel ) {
    var map;
    map = new GMaps({
      el: '#gmap',
      lat: la,
      lng: ln,
      zoom: zoomLevel,
      //  Subtle Grayscale
      styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],
      zoomControl : true,
      zoomControlOpt: {
        style : 'SMALL',
        position: 'TOP_LEFT'
      },
      panControl : false,
      streetViewControl : false,
      scrollwheel: false,
      mapTypeControl: false,
      overviewMapControl: false
    });
  }

  /**
   * set easy pie chart
   *
   * @param {Selector} selector selector of pie chart element
   */
  function setPieChart( selector ) {
    $( selector ).easyPieChart({
      barColor: '#6AC293',
      trackColor: '#ededed',
      lineCap: 'square',
      lineWidth: '4',
      scaleColor: '#fff',
      onStep: function( from, to, percent ) {
        $( this.el ).find( '.percent' ).text( Math.round( percent ) );
      }
    });
  }

  /**
   * initial all vendor functions
   */
  var initialVendorScript = new function () {
    
    setBootstrapTooltip();
    setPieChart( '.pie-chart' );
    setRippleEffect();
    setLightbox();
  
    
    // setGoogleMap( 40.712784, -74.005941, 13 ); // New York
    setGoogleMap( -34.556318,-58.7511911,17 ); // San Miguel
  }
});
