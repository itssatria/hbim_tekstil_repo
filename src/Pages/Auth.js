import axios from "axios"

export function getAccesstoken() {
    return new Promise((resolve) => {
      resolve(axios({
          method: 'POST',
          url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
                client_id : 'sGpt8EJPOow7cC3Ra4QOsAIKe4iJABDh',
                client_secret : 'z60asSELAAlHfGhz',
                grant_type : 'client_credentials',
                scope : 'viewables:read'
          }
        })
        .then((res)=> {
          return res.data;
        })
        .catch((err) => {
        })
      )
    })
  }

const Client = {getAccesstoken};
export default Client;