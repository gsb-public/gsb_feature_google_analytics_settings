(function ($) {

  Drupal.behaviors.gsb_feature_google_analytics_settings = {
    attach: function (context, settings) {
      $(document).ready(function() {
        
        // config scroll depth 
        if ($.scrollDepth) {
          $.scrollDepth({
            minHeight: 2000,
            eventHandler: function(data) {
              if (typeof dataLayer !== "undefined") {
                dataLayer.push(data);
              }
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

      }); // end document.ready 
    } // end attach
  }; // end Drupal.behaviors.gsb_feature_google_analytics_settings

}(jQuery));
