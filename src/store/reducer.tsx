////////////////////////////////////////////////////////
//type.d.ts

interface IUser {
    id: number,
    username: string,
    password: string,
    email: string
}

type UserState = {
    user: IUser
}

type UserAction = {
    type: string,
}

// type DispatchType = (args: UserAction) => UserAction

////////////////////////////////////////////////////////
//store/actionTypes.ts

// const ADD_ARTICLE = "ADD_ARTICLE"
// const REMOVE_ARTICLE = "REMOVE_ARTICLE"

////////////////////////////////////////////////////////
//store/actionCreators.ts

////////////////////////////////////////////////////////

const initialState: UserState = {
    user: {
        id: 0,
        username: "",
        password: "",
        email: ""
    }
};

const reducer = (state: UserState = initialState, action: UserAction): UserState => {
    if (action.type === "increment") {
        const newState: UserState = {
            user: {
                ...state.user,
                id: state.user.id++
            }
        };
        return newState;
    }
    return state;
};

export default reducer;