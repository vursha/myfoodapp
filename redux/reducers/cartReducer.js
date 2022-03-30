let defaultState ={
    selectedItems:{items:[] , restaurantName: ''}
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'ADD_TO_CART' : {
            let newState = {...state};
            if(action.payload.checkboxValue){
            console.log("action.payload.restaurantName :",action.payload.restaurantName)
            const temp = state.selectedItems.items.filter(obj => obj.id === action.id)
            console.log("temp.length :", temp)
            if(!temp.length){
                newState.selectedItems = {
                    items : [...newState.selectedItems.items,{...action.payload.food,count: 1 }],
                    
                    restaurantName: action.payload.restaurantName
                };
            }else{
                const vurhsa = temp.map(obj => {
                    obj={
                        ...obj,
                        count: temp.length +1
                    }
                    return obj;
                })

                const jenny = newState.selectedItems.items.map(obj => {
                    if(obj => obj.id === action.id){
                        obj ={
                            ...obj,
                            count: temp.length +1
                        }
                        return obj
                    }
                   
                })
                newState.selectedItems = {
                    items : jenny,
                    restaurantName: action.payload.restaurantName
                };

            }

            
            return newState;
        }else{
            //console.log("REMOVE FROM CART");
            newState.selectedItems={
                items:[
                    ...newState.selectedItems.items.filter((item) => item.title !== action.payload.title ),

                ],
                restaurantName: action.payload.restaurantName,
            };
        }
         //console.log(newState,"hi");
            return newState;
    }
        default:
            return state;
    }
}


export default cartReducer;