import React from 'react'
// import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


// export const context = useContext()

function AppcontextProvider({children}) {

    navigate = useNavigate();

    const data = {
        navigate
    }

    // const data = {
    //     hi : "hello"
    // }

    return (
        < context.Provider value={data} >
            {children}
        </context.Provider>
    )
}

export default AppcontextProvider
export const useData = () => useContext(context);