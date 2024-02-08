require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/identity/OAuthInfo",
  "esri/identity/IdentityManager"
], function(esriConfig, WebMap, MapView, OAuthInfo, esriId) {

  esriConfig.apiKey = "AAPK80a780885f4f481a89f82b83bce95a05mqojZ_fFWglSjUCDjuWKI23B5MKDU1lVv0dp9uf5-I-owKTQBtYD4haE-mvnbcpF";

  var info = new OAuthInfo({
    appId: "rwAuMzSzP8rsldzy",
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
        id: "a0cfe3407db94cdcb49d8fde98c87ff8"
      }
    });

    const view = new MapView({
      container: "viewDiv",
      map: webmap
    });
  }
});
