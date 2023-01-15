import React, { createContext, useContext, useReducer } from "react";

const actions = {
    SET_USER: "SET_USER",
    GET_USER: "GET_USER",
    DELETE_USER: "DELETE_USER",
};

const initialState = {
    user: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        case actions.GET_USER:
            return state;

        case actions.DELETE_USER:
            return {
                ...state,
                user: false,
            };

        default:
            return state;
    }
};

const UserContext = createContext({ state: initialState, dispatch: () => {} });

function useUserState() {
    const { userState, userDispatch } = useContext(UserContext);

    return [userState, userDispatch];
}

function UserStateProvider({ children }) {
    const [userState, userDispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ userState, userDispatch }}>{children}</UserContext.Provider>
    );
}

export { useUserState, UserStateProvider };
