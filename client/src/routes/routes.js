import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Projects from "../Pages/Projects/Projects"
import Services from "../Pages/Services/Services"
import ServiceDetail from "../Pages/Services/sub-services/ServiceDetail"

const routes = [
    {
        path: '/',
        element: < Home />
    },
    {
        path: '/about',
        element: < About />
    },
    {
        path: '/contact',
        element: < Contact />
    },
    {
        path: '/projects',
        element: < Projects/>
    },
    {
        path: '/services',
        element: < Services/>
    },
    {
        path: '/services/:slug',
        element: < ServiceDetail/>
    }
]


export default routes;