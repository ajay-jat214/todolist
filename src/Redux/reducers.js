import {CHANGE_EMAIL,CHANGE_PASSWORD} from './constants.js';
const initialstate={
	email:'',
	password:''
}

export const setEmail=(state=initialstate,action={} )=>{
	switch(action.type)
	{
      case CHANGE_EMAIL:
      return Object.assign({},state,{ email: action.payload});
      default:
      return state;
	}

}

export const setPassword=(state=initialstate,action={} )=>{
	switch(action.type)
	{
      case CHANGE_PASSWORD:
      return Object.assign({},state,{ password: action.payload});
      default:
      return state;
	}

}