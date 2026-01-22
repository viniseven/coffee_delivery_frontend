import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import CartContextProvider from "./contexts/CartContext"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CartContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CartContextProvider>
	</StrictMode>
)
