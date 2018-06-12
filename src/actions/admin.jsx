import Dispatch from '../utls/dispatch.class'
const dispath = new Dispatch()
/* *
 * 账号登陆
 *  */
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
const login_start = (path) => {
   return {
       type: LOGIN_START,
       path
   }
}
const login_success = (path) => {
    return {
        type: LOGIN_SUCCESS,
        path
    }
}
const login_error = (path) => {
    return {
        type: LOGIN_ERROR,
        path
    }
}
export const login = (path, data) => {
    dispath.fetch_post(path, data, login_start, login_success, login_error)
}
/* *
 * 注册管理员账号
 *  */
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'
const register_start = (path) => {
    return {
        type: REGISTER_START,
        path
    }
}
const register_success = (path) => {
    return {
        type: REGISTER_SUCCESS,
        path
    }
}
const register_error = (path) => {
    return {
        type: REGISTER_ERROR,
        path
    }
}
export const register = (path, data) => {
    dispath.fetch_post(path, data, register_start, register_success, register_error)
}
/* *
 * 修改密码
 *  */
export const UPDATE_PWD_START = 'UPDATE_PWD_START'
export const UPDATE_PWD_SUCCESS = 'UPDATE_PWD_SUCCESS'
export const UPDATE_PWD_ERROR = 'UPDATE_PWD_ERROR'
const update_pwd_start = (path) => {
    return {
        type: UPDATE_PWD_START,
        path
    }
}
const update_pwd_success = (path) => {
    return {
        type: UPDATE_PWD_SUCCESS,
        path
    }
}
const update_pwd_error = (path) => {
    return {
        type: UPDATE_PWD_ERROR,
        path
    }
}
export const update_pwd = (path, data) => {
    dispath.fetch_put(path, data, update_pwd_start, update_pwd_success, update_pwd_error)
}