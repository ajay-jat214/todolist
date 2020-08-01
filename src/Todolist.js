import React from 'react' ;
import Items from './Items';
export default class Todolist extends React.Component{
   constructor(){
   	super()
   	this.state={
   		variable:'',
   		element:[],
   		value:''
   	};
   }
 
   onAdd=(event)=>{
     this.setState({variable:event.target.value});
     this.setState({value:event.target.value})
   }

   onclick=(e)=>{
    
   	var code=e.keyCode||e.which;
   	if(code==13){
   		//e.preventDefault();
   		this.setState({value:''})
   	   	this.setState({element:[...this.state.element,this.state.variable]})
   	   	console.log(this.state.element)
   	   	}//console.log(this.state.element)
   }
	render(){
	 return(
	 	<div>
	 	<div className="">
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="To-Do" 
          value={this.state.value}
          name="ToDoList"  
          onChange={this.onAdd}
          onKeyUp={this.onclick}
      
          />
         </div>
          <Items element={this.state.element}/>
         </div>
	  );
	}
}