import Theme from "@app/providers/ThemeProvider"
import Router from "@app/routes"
import { StrictMode } from "react"


function App() {
    return (
        <>
            <StrictMode>
                <Theme>
                    <Router />
                </Theme>
            </StrictMode>
        </>
    )
}

export default App
