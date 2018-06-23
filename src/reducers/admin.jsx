import Immutable from 'immutable'
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR,
    UPDATE_PWD_START, UPDATE_PWD_SUCCESS, UPDATE_PWD_ERROR
} from '../actions/admin'
const initialState = Immutable.fromJS({ data: {}, success: false, isFail: false });

export const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN_START:
            return state;
        case LOGIN_SUCCESS:
            return Immutable.Map({ data: action.json, success: true, isFail: false });
        case LOGIN_ERROR:
            return Immutable.Map({ data: {}, success: false, isFail: true });
        default:
            return state;
    }
}
export const register = (state = initialState, action = {}) => {
    switch (action.type) {
        case REGISTER_START:
            return state;
        case REGISTER_SUCCESS:
            return Immutable.Map({ data: action.json, success: true, isFail: false });
        case REGISTER_ERROR:
            return Immutable.Map({ data: {}, success: false, isFail: true });
        default:
            return state;
    }
}
export const update_pwd = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_PWD_START:
            return state;
        case UPDATE_PWD_SUCCESS:
            return Immutable.Map({ data: action.json, success: true, isFail: false });
        case UPDATE_PWD_ERROR:
            return Immutable.Map({ data: {}, success: false, isFail: true });
        default:
            return state;
    }
}