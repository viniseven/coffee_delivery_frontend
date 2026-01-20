import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import CartContextProvider from "./contexts/CartContext"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CartContextProvider>
			<App />
		</CartContextProvider>
	</StrictMode>
)
