/* ***
 * Utility function for scrolling effect on the front page.
 */

const navigationScroll = {
  go: function() {
    $('a.scroll').click( ( e ) => {
      this.scroll( e );
    } );
  },

  scroll: function( e ) {
    e.preventDefault();

    const location = $( e.target ).attr( 'href' );
    const offset = ( $( window ).width() > 640 ) ? 50 : 86;

    $( 'html, body' ).animate( {
      scrollTop: $( location ).offset().top - offset
    }, 1000 );
  }
};

$( document ).ready( () => {
  navigationScroll.go();
} );
