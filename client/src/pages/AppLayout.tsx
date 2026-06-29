import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"

const AppLayout = () => {
  return (
   <div className="min-h-screen flex flex-col">
    <Banner />
    <p>navbar</p>
    <main className="flex-1">
        <Outlet />
    </main>
    <p>footer</p>
    <p>cartsidebar</p>
   </div>
  )
}

export default AppLayout