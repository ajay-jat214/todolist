import {CHANGE_EMAIL} from './constants.js';
import {CHANGE_PASSWORD} from './constants.js'
export const setEmail = (text) =>{

 return({
 	type: CHANGE_EMAIL,
 	payload:text
 })
}

export const setPassword = (text) =>{

 return({
 	type: CHANGE_PASSWORD,
 	payload:text
 })
}