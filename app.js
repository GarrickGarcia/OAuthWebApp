require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/Editor",
  "esri/identity/OAuthInfo",
  "esri/identity/IdentityManager",
  "esri/portal/Portal",
], function (WebMap, MapView, Legend, Editor, OAuthInfo, esriId, Portal) {
  // UI elements
  const signInButton = document.getElementById("sign-in-button");
  const navigationUser = document.getElementById("nav-user");
  signInButton.addEventListener("click", signInOrOut);
  navigationUser.addEventListener("click", signInOrOut);

  //Create a new OAuthInfo object.
  const info = new OAuthInfo({
    appId: "lgmq6kIt5EthgVBO", 
    popup: true,
  });

  // Register the OAuthInfo with the IdentityManager.
  esriId.registerOAuthInfos([info]);

  // Call the checkSignIn function to see if the user is already signed in.
  checkSignIn();

  function checkSignIn() {
    esriId
      .checkSignInStatus(info.portalUrl + "/sharing")
      .then(() => {
        navigationUser.hidden = false;
        signInButton.hidden = true;
        const portal = new Portal({
          authMode: "immediate",
        });

        portal.load().then(() => {
          navigationUser.fullName = portal.user.fullName;
          navigationUser.username = portal.user.username;
          // Load the map only after successful sign-in and portal loading
          loadMap();
        });
      })
      .catch(() => {
        signInButton.hidden = false;
        navigationUser.hidden = true;
      });
  }

  function signInOrOut() {
    esriId
      .checkSignInStatus(info.portalUrl + "/sharing")
      .then(esriId.destroyCredentials)
      .catch(() => {
        esriId.getCredential(info.portalUrl + "/sharing").then(checkSignIn);
      });
  }

  function loadMap() {
    const webmap = new WebMap({
      portalItem: {
        id: "6446eddb7c284d63a72073626e0a8312",
      },
    });

    const view = new MapView({
      container: "viewDiv",
      map: webmap,
    });

    view.when(() => {
      var legend = new Legend({
        view: view,
      });

      view.ui.add(legend, "bottom-left");

      var editor = new Editor({
        view: view,
      });

      view.ui.add(editor, "top-right");
    });
  }
});
