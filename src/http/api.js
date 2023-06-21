import { req } from "./config";
import { address } from './address'



// 封装汉字查询接口
export const getValrequest = (params) => { return req('get', `${address}`,params) };