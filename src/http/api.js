import { req } from "./config";

import { worksaddress } from './address'

import { translate } from "./address";

import { engNews } from "./address";




// 封装单词查询接口
export const getValrequest = (params) => { return req('get', `${worksaddress}`,params) };


//封装翻译接口
export const getTranslate = (params) => { return req('get', `${translate}`,params) };


//封装英语文章接口
export const getEngNews = (params) => { return req('get', `${engNews}`,params)}
