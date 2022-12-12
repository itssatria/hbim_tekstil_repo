import Client from "../Auth";
//import axios from "axios"

const Autodesk = window.Autodesk;

var getToken = {accessToken: Client.getAccesstoken()};
var viewer;

function launchViewer(div, urn){
  getToken.accessToken.then((token) =>{
    // console.log('token',token);
    var options = {
      'env' : 'AutodeskProduction',
      'accessToken' : token.access_token
    };

    Autodesk.Viewing.Initializer(options, function() {

      var htmlDiv = document.getElementById(div);
      viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
      var startedCode = viewer.start();
      if (startedCode > 0) {
          console.error('Failed to create a Viewer: WebGL not supported.');
          return;
      }
  
      // console.log('Initialization complete, loading a model next...');
  
  });

    var documentId = urn;
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);

    function onDocumentLoadSuccess(viewerDocument) {
        var defaultModel = viewerDocument.getRoot().getDefaultGeometry();
        viewer.loadDocumentNode(viewerDocument, defaultModel);
    }

    function onDocumentLoadFailure() {
        console.error('Failed fetching Forge manifest');
    }

  })
}

export default launchViewer;