export const RESET_STATE = "RESET_STATE"
export const SET_USER = "SET_USER"
export const SET_WELCOME_MESSAGE = "SET_WELCOME_MESSAGE"

export const resetState = () => ({
    type: RESET_STATE
}) 

export const setUser = (value) => ({
    type: SET_USER,
    value
})

export const setWelcomeMessage = (value) => ({
    type: SET_WELCOME_MESSAGE,
    value
})