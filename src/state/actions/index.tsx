export enum ActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    REGISTER = "REGISTER",
    ADDTOCART = "ADDTOCART",
    REMOVEFROMCART = "REMOVEFROMCART",
    ADDTOTAGS = "ADDTOTAGS",
    REMOVEFROMTAGS = "REMOVEFROMTAGS"
};

export interface UserState {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    cart: RecipeState[],
    tags: string[]
};

export interface RecipeState {
    id: number,
    img: string,
    name: string,
    description: string,
    ingredients: string[],
    directions: string[],
    price: number,
    tags: string[]
}

interface LoginAction {
    type: ActionTypes.LOGIN,
    payload: UserState
};

interface LogoutAction {
    type: ActionTypes.LOGOUT
};

interface RegisterAction {
    type: ActionTypes.REGISTER,
    payload: UserState
};

interface AddToCartAction {
    type: ActionTypes.ADDTOCART,
    payload: RecipeState
}

interface RemoveFromCartAction {
    type: ActionTypes.REMOVEFROMCART,
    payload: RecipeState
}

interface AddtoTagsAction {
    type: ActionTypes.ADDTOTAGS,
    payload: string
}

interface RemoveFromTagsAction {
    type: ActionTypes.REMOVEFROMTAGS,
    payload: string
}

type Actions = LoginAction | LogoutAction | RegisterAction | AddToCartAction | RemoveFromCartAction | AddtoTagsAction | RemoveFromTagsAction;

export default Actions;