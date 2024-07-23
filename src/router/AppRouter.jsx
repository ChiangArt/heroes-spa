
import { LoginPages } from "../auth"
import { HeroesRoutes } from "../heroes"
import { Route, Routes } from "react-router"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"




export const AppRouter = () => {
  return (
    <>

        

          <Routes path="/*">

              <Route path="/login" element={

                <PublicRoute>

                  <LoginPages />

                </PublicRoute>
                
              }/>



              <Route path="/*" element={
                <PrivateRoute>

                  <HeroesRoutes/>

                </PrivateRoute>
                }/>

              <Route path="/*" element={<HeroesRoutes/>} />
              
          </Routes>

       
        

    
    </>
  )
}
