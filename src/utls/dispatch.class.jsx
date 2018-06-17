import 'whatwg-fetch';
import Verification from './verification.class'
class Dispatch{
  constructor(){
     this.url='#'
  }
  fetch_get(path, start, success, error){
      return dispatch => { dispatch(start(path));
          return fetch(this.url + path, { method: 'GET',headers: {
              'mode': 'cors',
             'Content-Type': 'application/json',
              'X-HZG-USER-ID': '',
              'X-HZG-ACCESS-TOKEN': ''}})
              .then(response => dispatch(Verification(response, success, error)))
              .catch(e => dispatch(error(e)))
      }
  }
  fetch_post(path, data, start, success, error){
      return dispatch => {dispatch(start(path));
            return fetch(this.url + path, { method: 'POST',headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'X-HZG-USER-ID':'',
                  'X-HZG-ACCESS-TOKEN':''
                },body: JSON.stringify(data) })
              .then(response => dispatch(Verification(response, success, error)))
              .catch(e => dispatch(error(e)))
      }
  }
    fetch_put(path, data, start, success, error){
      return dispatch => {
          dispatch(start(path));
          return fetch(this.url + path, {
              method: 'PUT', headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'X-HZG-USER-ID': '',
                  'X-HZG-ACCESS-TOKEN': ''
              }, body: JSON.stringify(data)
          })
              .then(response => dispatch(Verification(response, success, error)))
              .catch(e => dispatch(error(e)))
      }
  }
  fetch_delete(path, start, success, error){
      return dispatch => {
          dispatch(start(path));
          return fetch(this.url + path, {
              method: 'DELETE', headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'X-HZG-USER-ID': '',
                  'X-HZG-ACCESS-TOKEN': ''
              }
          })
              .then(response => dispatch(Verification(response, success, error)))
              .catch(e => dispatch(error(e)))
      }
  }
}
export default Dispatch