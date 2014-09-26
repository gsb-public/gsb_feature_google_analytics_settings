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

        // Top Stories
        $(".content .node-idea-story .group-right .top-stories-wrapper a").click(function() {
          alert('click top story');
        });        

        // Explore More
        $(".content .node-idea-story .group-left .explore-more-content .field-name-title a").click(function() {
          alert('click explore more');
        });        

        // Related Content
        $(".content .node-idea-story .group-right .field-name-field-related-faculty a").click(function() {
          alert('click related content faculty');
        });        

        $(".content .node-idea-story .group-right .field-name-field-related-idea-story a").click(function() {
          alert('click related content idea story');
        });        

        $(".content .node-idea-story .group-right .field-collection-item-field-related-other-unlimited a").click(function() {
          alert('click related content other');
        });        

        // Top Key Taxonomy Terms
        $(".content .node-idea-story .group-left .group_wrapper_header .field-name-field-key-taxonomy a").click(function() {
          alert('click top key taxonomy');
        });        

        // Bottom Taxonomy
        $(".content .node-idea-story .group-left .group_wrapper_taxonomy a").click(function() {
          alert('click bottom key taxonomy');
        });        

      }); // end document.ready 
    } // end attach
  }; // end Drupal.behaviors.gsb_feature_google_analytics_settings

}(jQuery));
