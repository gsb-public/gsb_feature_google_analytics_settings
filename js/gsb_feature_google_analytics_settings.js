(function ($) {

  Drupal.behaviors.gsb_feature_google_analytics_settings = {
    attach: function (context, settings) {
      $(document).ready(function() {
        
        // config scroll depth 
        if ($.scrollDepth) {
          $.scrollDepth({
            minHeight: 2000,
            eventHandler: function(data) {
              dataLayer.push(data);
            }
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

        // config event clicks for Idea Story

        // Top Stories
        $(".node-type-idea-story .top-stories-wrapper a").click(function() {
          ga('send', 'event', 'Idea Story - Editor\'s Picks', 'click');
        });

        // Explore More Title
        $(".node-type-idea-story .explore-more-wrapper .field-name-title a").click(function() {
          ga('send', 'event', 'Idea Story - Explore More Title', 'click');
        });

        // Explore More Taxomony
        $(".node-type-idea-story .explore-more-wrapper .field-name-field-key-taxonomy a").click(function() {
          ga('send', 'event', 'Idea Story - Explore More Taxonomy', 'click');
        });

        // Related Content
        $(".node-type-idea-story .field-name-field-related-faculty a").click(function() {
          ga('send', 'event', 'Idea Story - Related Faculty', 'click');
        });

        $(".node-type-idea-story .field-name-field-related-idea-story a").click(function() {
          ga('send', 'event', 'Idea Story - Related Idea Story', 'click');
        });

        $(".node-type-idea-story .field-collection-item-field-related-other-unlimited a").click(function() {
          ga('send', 'event', 'Idea Story - Related Other', 'click');
        });

        $(".node-type-idea-story .field-name-field-link-unlimited a").click(function() {
          ga('send', 'event', 'Idea Story - Related Link', 'click');
        });

        // Top Key Taxonomy Terms
        $(".node-type-idea-story  .group_wrapper_header .field-name-field-key-taxonomy a").click(function() {
          ga('send', 'event', 'Idea Story - Top Key Taxonomy', 'click');
        });

        // Bottom Taxonomy
        $(".node-type-idea-story .group_wrapper_taxonomy a").click(function() {
          ga('send', 'event', 'Idea Story - Bottom Key Taxonomy', 'click');
        });

      }); // end document.ready 
    } // end attach
  }; // end Drupal.behaviors.gsb_feature_google_analytics_settings

}(jQuery));
