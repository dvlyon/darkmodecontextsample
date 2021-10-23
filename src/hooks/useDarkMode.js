import { useContext } from "react"
import { DarkModeContext } from "../contexts/DarkModeContext"

const useDarkMode = () => useContext(DarkModeContext)

export default useDarkMode
