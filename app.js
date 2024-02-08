/*
require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/identity/OAuthInfo",
  "esri/identity/IdentityManager"
], function(esriConfig, WebMap, MapView, OAuthInfo, esriId) {

  esriConfig.apiKey = "AAPKbf70a5e7fff643aba4086899bea30df3C74r6D4ccA7QYb9fEd340y95U0Px-hJW9N7gkH3sMf5MuKGKAn27wvOnuJc9QV71";

  var info = new OAuthInfo({
    appId: "lgmq6kIt5EthgVBO",
    popup: true // Use a popup for the OAuth dialog
  });
  esriId.registerOAuthInfos([info]);

  esriId.checkSignInStatus(info.portalUrl + "/sharing").then(
    function() {
      loadMap();
    }
  ).catch(function() {
    esriId.getCredential(info.portalUrl + "/sharing");
  });

  function loadMap() {
    const webmap = new WebMap({
      portalItem: {
        id: "6446eddb7c284d63a72073626e0a8312"
      }
    });

    const view = new MapView({
      container: "viewDiv",
      map: webmap
    });
  }
});
*/

require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView"
  // "esri/identity/OAuthInfo",
  // "esri/identity/IdentityManager"
], function(esriConfig, WebMap, MapView) {

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

});