(function ($) {

  Drupal.behaviors.gsb_feature_google_analytics_settings = {
    attach: function (context, settings) {
      $(document).ready(function() {
        
        // config scroll depth 

        if ($.scrollDepth) {
          $.scrollDepth({
            minHeight: 2000,
          });
        }

        // config riveted (time tracking)

        if (riveted) {
          riveted.init({
            reportInterval: 10,  // Default: 5
            idleTimeout: 20,      // Default: 30
            nonInteraction: true  // Default: true
          });
        }                

        // config event clicks

        /***************************************************************
         * Idea Story
         ***************************************************************/

        // Top Stories
        $(".node-type-idea-story .top-stories-wrapper a").click(function() {
          console.log('click top story');
        });

        // Explore More Title
        $(".node-type-idea-story .explore-more-wrapper .field-name-title a").click(function() {
          console.log('click explore more');
        });

        // Explore More Taxomony
        $(".node-type-idea-story .explore-more-wrapper .field-name-field-key-taxonomy a").click(function() {
          console.log('click explore more');
        });

        // Related Content
        $(".node-type-idea-story .field-name-field-related-faculty a").click(function() {
          console.log('click related content faculty');
        });

        $(".node-type-idea-story .field-name-field-related-idea-story a").click(function() {
          console.log('click related content idea story');
        });

        $(".node-type-idea-story .field-collection-item-field-related-other-unlimited a").click(function() {
          console.log('click related content other');
        });

        $(".node-type-idea-story .field-name-field-link-unlimited a").click(function() {
          console.log('click related content other');
        });

        // Top Key Taxonomy Terms
        $(".node-type-idea-story  .group_wrapper_header .field-name-field-key-taxonomy a").click(function() {
          console.log('click top key taxonomy');
        });

        // Bottom Taxonomy
        $(".node-type-idea-story .group_wrapper_taxonomy a").click(function() {
          console.log('click bottom key taxonomy');
        });

      }); // end document.ready 
    } // end attach
  }; // end Drupal.behaviors.gsb_feature_google_analytics_settings

}(jQuery));
