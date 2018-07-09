// action types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

//reducers

export default function (state, action) {
    if(!state){
        state ={comments: []}
    }
    switch (action.type){
        case "INIT_COMMENTS":
            return {comments:action.comments};
        case "ADD_COMMENT":
            return {
                comments:[...state.comments, action.comments]
            };
        case "DELETE_COMMENT":
            return {
                comments:[
                    ...state.comments.slice(0,action.commentIndex),
                    ...state.comments.slice(action.commentIndex+1)
                ]
            };
        default:
            return state;
    }
}

//action creator
export const initComments = (comments) =>{
    return {type:INIT_COMMENTS, comments}
};

export const addComments = (comment) =>{
    return {type:ADD_COMMENTS, comment}
};

export const deleteComment = (commentIndex) =>{
    return {type:DELETE_COMMENT, commentIndex}
};