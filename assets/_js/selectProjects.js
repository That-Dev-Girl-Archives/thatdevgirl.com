/* ***
 * Object for project selector in the tools section.
 */

const selectProjects = {
  go: function() {
    $( '#all, #css, #javascript, #utility' ).click( ( e ) => {
      this.show( e );
    } );
  },

  show: function( e ) {
    e.preventDefault();
    const id = e.target.id;

    if ( id == 'all' ) {
      // Show everything.
      $( '#tools .tool:not(:visible)' ).slideDown();
    } else {
      // Hide everything that is not the selected ID.
      $( '#tools .tool:not(.' + id + ')' ).slideUp();
      $( '#tools .tool.' + id ).slideDown();
    }

    $( '.selector a' ).removeClass( 'selected' );
    $( '#' + id ).addClass( 'selected' );
  }
};

$( document ).ready(function() {
	selectProjects.go();
});
