import Immutable from 'immutable'
import { PLANTS_START, PLANTS_SUCCESS, PLANTS_ERROR,
    PLANT_START, PLANT_SUCCESS, PLANT_ERROR,
    PLANT_CREATE_START, PLANT_CREATE_SUCCESS, PLANT_CREATE_ERROR,
    PLANT_CREATE_FILE_START, PLANT_CREATE_FILE_SUCCESS, PLANT_CREATE_FILE_ERROR,
    PLANT_UPDATE_START, PLANT_UPDATE_SUCCESS, PLANT_UPDATE_ERROR,
    PLANT_DELETE_START, PLANT_DELETE_SUCCESS, PLANT_DELETE_ERROR } from '../actions/plants';
const initialState = Immutable.fromJS({ data: {}, success: false, isFail: false });

export const plants = (state = initialState, action = {}) => {
    switch (action.type) {
        case PLANTS_START:
            return state;
        case PLANTS_SUCCESS:
            return Immutable.Map({ data: action.json, success: true, isFail: false });
        case PLANTS_ERROR:
            return Immutable.Map({ data: {}, success: false, isFail: true });
        default:
            return state;
    }
}
export const plant = (state = initialState, action = {}) => {
    switch (action.type) {
        case PLANT_START:
            return state;
        case PLANT_SUCCESS:
            return Immutable.Map({ data: action.json, success: true, isFail: false });
        case PLANT_ERROR:
            return Immutable.Map({ data: {}, success: false, isFail: true });
        default:
            return state;
    }
}
export const plant_create = (state = initialState, action = {}) => {
    switch (action.type) {
        case PLANT_CREATE_START:
            return state;
        case PLANT_CREATE_SUCCESS:
            return Immutable.Map({ data: action.json, success: true, isFail: false });
        case PLANT_CREATE_ERROR:
            return Immutable.Map({ data: {}, success: false, isFail: true });
        default:
            return state;
    }
}
export const plant_create_file = (state = initialState, action = {}) => {
    switch (action.type) {
        case PLANT_CREATE_FILE_START:
            return state;
        case PLANT_CREATE_FILE_SUCCESS:
            return Immutable.Map({ data: action.json, success: true, isFail: false });
        case PLANT_CREATE_FILE_ERROR:
            return Immutable.Map({ data: {}, success: false, isFail: true });
        default:
            return state;
    }
}
export const plant_update = (state = initialState, action = {}) => {
    switch (action.type) {
        case PLANT_UPDATE_START:
            return state;
        case PLANT_UPDATE_SUCCESS:
            return Immutable.Map({ data: action.json, success: true, isFail: false });
        case PLANT_UPDATE_ERROR:
            return Immutable.Map({ data: {}, success: false, isFail: true });
        default:
            return state;
    }
}
export const plant_delete = (state = initialState, action = {}) => {
    switch (action.type) {
        case PLANT_DELETE_START:
            return state;
        case PLANT_DELETE_SUCCESS:
            return Immutable.Map({ data: action.json, success: true, isFail: false });
        case PLANT_DELETE_ERROR:
            return Immutable.Map({ data: {}, success: false, isFail: true });
        default:
            return state;
    }
}