import React from 'react';
import Item from './Item';
function Items({element}){
	return(
         element.map((element,id)=><Item key={id} element={element}/>)
		);
}

export default Items;