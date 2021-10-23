import { createContext, useEffect, useState } from "react"

export const DarkModeContext = createContext(false)

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            setIsDarkMode(e.matches)
        })
    }, [])

    return (
        <DarkModeContext.Provider value={isDarkMode}>
            { children }
        </DarkModeContext.Provider>
    )
}
