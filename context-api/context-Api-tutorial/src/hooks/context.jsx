import { Children, createContext } from "react";

export const AppContext = createContext()

export const AppProvider = ({children})=>{
    const name = "Aryan"
    const age = 21

    return <AppContext.Provider value = {{name, age}}>
        {children}
    </AppContext.Provider>
}