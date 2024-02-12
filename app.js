require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/Editor",
  "esri/identity/OAuthInfo",
  "esri/identity/IdentityManager",
], function(esriConfig, WebMap, MapView, Legend, Editor, OAuthInfo, esriId) {

  //Create a new OAuthInfo object.
  const info = new OAuthInfo({
    appId: "lgmq6kIt5EthgVBO", // Replace with your actual App ID
    authNamespace: "portal_oauth_inline",
    popup: true // Use true to have OAuth login in a separate popup
  });

  // Register the OAuthInfo with the IdentityManager.
  esriId.registerOAuthInfos([info]);

  esriId.checkSignInStatus(info.portalUrl + "/sharing").then(
    function() {
      console.log("User is signed in");
      loadMap();
    }
  ).catch(
    function() {
      console.log("User is not signed in");
      esriId.getCredential(info.portalUrl + "/sharing").then(
        function() {
          loadMap();
        }
      );
    }
  );

  function loadMap() {
    const webmap = new WebMap({
      portalItem: {
        id: "6446eddb7c284d63a72073626e0a8312" // Replace with your WebMap ID
      }
    });

    const view = new MapView({
      container: "viewDiv",
      map: webmap
    });

    view.when(function() {
      // Add widgets here
      var legend = new Legend({
        view: view
      });

      view.ui.add(legend, "bottom-left");

      var editor = new Editor({
        view: view
      });

      view.ui.add(editor, "top-right");
    });
  }
});
