export const SET_USER = 'SET_USER';

const appReducer = (state, action) => {
    switch (action.type) {
        case SET_USER:
            const { user } = action;
            
            return {
                ...state,
                user
            }
        default:
            return state;
            
           
    
        
            
    }
}

export default appReducer;