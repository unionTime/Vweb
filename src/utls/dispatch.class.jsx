import 'whatwg-fetch';
import Verification from './verification.class'
class Dispatch{
  constructor(){
     this.url='#'
  }
  fetch_get(path, start, success, error){
      return dispatch => { dispatch(start(path));
          return fetch(this.url+path, {mode: 'cors', 'Content-Type': 'application/json'})
              .then(response => dispatch(Verification(response, success, error)))
              .catch(e => dispatch(error(e)))
      }
  }
  fetch_post(path, data, start, success, error){
      return dispatch => {dispatch(start(path));
            return fetch(this.url + path, { method: 'POST',headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'},body: JSON.stringify(data) })
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
                  'Access-Control-Allow-Origin': '*'
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
                  'Access-Control-Allow-Origin': '*'
              }
          })
              .then(response => dispatch(Verification(response, success, error)))
              .catch(e => dispatch(error(e)))
      }
  }
}
export default Dispatch