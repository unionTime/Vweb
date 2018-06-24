import 'whatwg-fetch';
import Verification from './verification.class'
const verification = new Verification()
class Dispatch{
  constructor(){
      this.url =''
  }
  fetch_get(path, start, success, error){
      return dispatch => { dispatch(start(path));
          return fetch(this.url + path, { method: 'GET',headers: {
              'mode': 'cors',
             'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'X-HZG-USER-ID': window.XHZGUSERID,
              'Authorization': 'HZG ' + window.Authorization}})
              .then(response => verification.resStatus(response, res => dispatch(success(path, res)), e => dispatch(error(e))))
              .catch(e => dispatch(error(path)))
      }
  }
  fetch_post(path, data, start, success, error){
      
      return dispatch => {dispatch(start(path));
            return fetch(this.url + path, { method: 'POST',headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                 'Access-Control-Allow-Origin': '*',
                'X-HZG-USER-ID': window.XHZGUSERID,
                'Authorization': 'HZG '+ window.Authorization
                },body: JSON.stringify(data) })
                .then(response => verification.resStatus(response, res => dispatch(success(null, res)), e => dispatch(error(e))))
                .catch(e => dispatch(error(path)))
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
                  'X-HZG-USER-ID': window.XHZGUSERID,
                  'Authorization': 'HZG ' + window.Authorization
              }, body: JSON.stringify(data)
          })
              .then(response => verification.resStatus(response, res => dispatch(success(null, res)), e => dispatch(error(e))))
              .catch(e => dispatch(error(path)))
      }
  }
  fetch_delete(path,data, start, success, error){
      return dispatch => {
          dispatch(start(path));
          return fetch(this.url + path, {
              method: 'DELETE', headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'X-HZG-USER-ID': window.XHZGUSERID,
                  'Authorization': 'HZG ' + window.Authorization
              }, body: JSON.stringify(data)
          })
              .then(response => verification.resStatus(response, res => dispatch(success(null, res)), e => dispatch(error(e))))
              .catch(e => dispatch(error(path)))
      }
  }
}
export default Dispatch
