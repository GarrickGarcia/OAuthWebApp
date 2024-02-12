require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/Editor",
  // "esri/identity/OAuthInfo",
  // "esri/identity/IdentityManager"
], function(esriConfig, WebMap, MapView, Legend, Editor) {

  esriConfig.apiKey = "AAPKbf70a5e7fff643aba4086899bea30df3C74r6D4ccA7QYb9fEd340y95U0Px-hJW9N7gkH3sMf5MuKGKAn27wvOnuJc9QV71";

  const webmap = new WebMap({
    portalItem: {
      id: "6446eddb7c284d63a72073626e0a8312" // ID of the web map
    }
  });

  const view = new MapView({
    container: "viewDiv",
    map: webmap
  });

  view.when(function() {
    // Create the Legend
    var legend = new Legend({
      view: view
    });

    // Add the legend to the bottom right corner of the view
    view.ui.add(legend, "bottom-left");

    // Create the Editor
    var editor = new Editor({
      view: view
    });

    // Add the editor to the top right corner of the view
    view.ui.add(editor, "top-right");
  });

});