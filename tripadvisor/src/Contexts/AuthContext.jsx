import React from "react"

export const AuthContext=React.createContext();

const AuthContextProvider=({children})=>{

    const [isAuth,setAuth]=React.useState(false)
    
    return (
        <AuthContext.Provider value={{isAuth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider