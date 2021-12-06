export enum ActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    REGISTER = "REGISTER",
    ADDTOCART = "ADDTOCART",
    REMOVEFROMCART = "REMOVEFROMCART"
};

export interface UserState {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
};

export interface RecipeState {
    id: number,
    img: string,
    name: string,
    description: string,
    ingredients: string[],
    directions: string[],
    price: number
}

export interface CartState {
    cart: RecipeState[]
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


type Actions = LoginAction | LogoutAction | RegisterAction | AddToCartAction | RemoveFromCartAction;

export default Actions;