import Dispatch from '../utls/dispatch.class'
const dispath = new Dispatch()

/* *
 * 查询plants列表
 *  */
export const PLANTS_START = 'PLANTS_START'
export const PLANTS_SUCCESS = 'PLANTS_SUCCESS'
export const PLANTS_ERROR = 'PLANTS_ERROR'
const plants_start = (path) => {
    return {
        type: PLANTS_START,
        path
    }
}
const plants_success = (path,json) => {
    return {
        type: PLANTS_SUCCESS,
        path,
        json
    }
}
const plants_error = (path) => {
    return {
        type: PLANTS_ERROR,
        path
    }
}
export const plants = (path) => {
    return dispath.fetch_get(path, plants_start, plants_success, plants_error)
}
/* *
 * 查询单个plant
 *  */
export const PLANT_START = 'PLANT_START'
export const PLANT_SUCCESS = 'PLANT_SUCCESS'
export const PLANT_ERROR = 'PLANT_ERROR'
const plant_start = (path) => {
    return {
        type: PLANT_START,
        path
    }
}
const plant_success = (path, json) => {
    return {
        type: PLANT_SUCCESS,
        path,
        json
    }
}
const plant_error = (path) => {
    return {
        type: PLANT_ERROR,
        path
    }
}
export const plant = (path) => {
    return dispath.fetch_get(path, plant_start, plant_success, plant_error)
}
/* *
 * 新增植物 -- 单个对象
 *  */
export const PLANT_CREATE_START = 'PLANT_CREATE_START'
export const PLANT_CREATE_SUCCESS = 'PLANT_CREATE_SUCCESS'
export const PLANT_CREATE_ERROR = 'PLANT_CREATE_ERROR'
const plant_create_start = (path) => {
    return {
        type: PLANT_CREATE_START,
        path
    }
}
const plant_create_success = (path, json) => {
    return {
        type: PLANT_CREATE_SUCCESS,
        path,
        json
    }
}
const plant_create_error = (path) => {
    return {
        type: PLANT_CREATE_ERROR,
        path
    }
}
export const plant_create = (path,data) => {
    return dispath.fetch_post(path, data, plant_create_start, plant_create_success, plant_create_error)
}
/* *
 * 新增植物 -- 文件上传
 *  */
export const PLANT_CREATE_FILE_START = 'PLANT_CREATE_FILE_START'
export const PLANT_CREATE_FILE_SUCCESS = 'PLANT_CREATE_FILE_SUCCESS'
export const PLANT_CREATE_FILE_ERROR = 'PLANT_CREATE_FILE_ERROR'
const plant_create_file_start = (path) => {
    return {
        type: PLANT_CREATE_FILE_START,
        path
    }
}
const plant_create_file_success = (path, json) => {
    return {
        type: PLANT_CREATE_FILE_SUCCESS,
        path,
        json
    }
}
const plant_create_file_error = (path) => {
    return {
        type: PLANT_CREATE_FILE_ERROR,
        path
    }
}
export const plant_create_file = (path, data) => {
    return dispath.fetch_post(path, data, plant_create_file_start, plant_create_file_success, plant_create_file_error)
}
/* *
 * 修改植物信息
 *  */
export const PLANT_UPDATE_START = 'PLANT_UPDATE_START'
export const PLANT_UPDATE_SUCCESS = 'PLANT_UPDATE_SUCCESS'
export const PLANT_UPDATE_ERROR = 'PLANT_UPDATE_ERROR'
const plant_update_start = (path) => {
    return {
        type: PLANT_UPDATE_START,
        path
    }
}
const plant_update_success = (path, json) => {
    return {
        type: PLANT_UPDATE_SUCCESS,
        path,
        json
    }
}
const plant_update_error = (path) => {
    return {
        type: PLANT_UPDATE_ERROR,
        path
    }
}
export const plant_update = (path, data) => {
    return dispath.fetch_put(path, data, plant_update_start, plant_update_success, plant_update_error)
}
/* *
 * 删除植物
 *  */
export const PLANT_DELETE_START = 'PLANT_DELETE_START'
export const PLANT_DELETE_SUCCESS = 'PLANT_DELETE_SUCCESS'
export const PLANT_DELETE_ERROR = 'PLANT_DELETE_ERROR'
const plant_delete_start = (path) => {
    return {
        type: PLANT_DELETE_START,
        path
    }
}
const plant_delete_success = (path, json) => {
    return {
        type: PLANT_DELETE_SUCCESS,
        path,
        json
    }
}
const plant_delete_error = (path) => {
    return {
        type: PLANT_DELETE_ERROR,
        path
    }
}
export const plant_delete = (path) => {
    return dispath.fetch_delete(path, plant_delete_start, plant_delete_success, plant_delete_error)
}