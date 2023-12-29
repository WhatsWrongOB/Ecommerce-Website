const { createContext, useState } = require("react");

const AppContext = createContext()


const AppProvider = ({ children }) => {

    const [login, setLogin] = useState(true)

    return (
        <AppContext.Provider value={{ login, setLogin }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }