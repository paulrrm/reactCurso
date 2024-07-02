import { Fragment, ReactNode, lazy } from "react"
import { Route ,Outlet} from "react-router-dom"
interface RouteProps {
    path?: string;
    element?: React.LazyExoticComponent<() => JSX.Element> | null;
    layout?: React.LazyExoticComponent<(props:{children:ReactNode}) => JSX.Element> | null;
    children?: RouteProps[];
    
}
export const renderRoutes = () => {
    return routes.map((route)=>{
        const Component = route.element || Fragment;
        const Layout = route.layout || Fragment;
        return <Route 
                path={route.path} element= {<Layout>
                    {route.children ? <Outlet/>: <Component />}
                </Layout>} >
                    {route.children && renderRoutes()} 
            </Route>
    })
}

export const routes:RouteProps[] = [
    {

        layout: lazy(async()=>await import("../layouts/AppLayout")),
        children:[
            {
                path:'/',
                element: lazy(async()=>await import("../pages/Home")),
            },
            {
                path:'/about',
                element: lazy(async()=>await import("../pages/About")),
                
            },
            {
                path:'/contact',
                element: lazy(async()=>await import("../pages/Contact")),
                
            },
        ]
    },

    
];