import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import App from "../App"
import HomePage from "../pages/Home/Homepage"
import AboutPage from "../pages/About/AboutPage"
import ContactPage from "../pages/Contact/ContactPage"
import ServicesPage from "../pages/Services/ServicesPage"
import SignInPage from "../pages/SignIn/SignInPage"
import SignOutPage from "../pages/SignOut/SignOutPage"


const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signout" element={<SignOutPage />} />

        </Route>
    )
)

export default AppRouter