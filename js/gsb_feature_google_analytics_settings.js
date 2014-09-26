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
          _gaq.push(['_trackEvent', 'Idea Story - Editors Pick', 'Click']);
        });

        // Explore More Title
        $(".node-type-idea-story .explore-more-wrapper .field-name-title a").click(function() {
          _gaq.push(['_trackEvent', 'Idea Story - Explore More Title', 'Click']);
        });

        // Explore More Taxomony
        $(".node-type-idea-story .explore-more-wrapper .field-name-field-key-taxonomy a").click(function() {
          _gaq.push(['_trackEvent', 'Idea Story - Explore More Taxonomy', 'Click']);
        });

        // Related Content
        $(".node-type-idea-story .field-name-field-related-faculty a").click(function() {
          _gaq.push(['_trackEvent', 'Idea Story - Related Faculty', 'Click']);
        });

        $(".node-type-idea-story .field-name-field-related-idea-story a").click(function() {
          _gaq.push(['_trackEvent', 'Idea Story - Related Idea Story', 'Click']);
        });

        $(".node-type-idea-story .field-collection-item-field-related-other-unlimited a").click(function() {
          _gaq.push(['_trackEvent', 'Idea Story - Related Other', 'Click']);
        });

        $(".node-type-idea-story .field-name-field-link-unlimited a").click(function() {
          _gaq.push(['_trackEvent', 'Idea Story - Related Link', 'Click']);
        });

        // Top Key Taxonomy Terms
        $(".node-type-idea-story  .group_wrapper_header .field-name-field-key-taxonomy a").click(function() {
          _gaq.push(['_trackEvent', 'Idea Story - Top Key Taxonomy', 'Click']);
        });

        // Bottom Taxonomy
        $(".node-type-idea-story .group_wrapper_taxonomy a").click(function() {
          _gaq.push(['_trackEvent', 'Idea Story - Bottom Key Taxonomy', 'Click']);
        });

      }); // end document.ready 
    } // end attach
  }; // end Drupal.behaviors.gsb_feature_google_analytics_settings

}(jQuery));
