import Header1 from "./Components/header";
import SideTab from "./Components/sideTab";
import NewProject from "./Components/newProject"
import { createBrowserRouter, Outlet } from "react-router-dom";
import Forums from "./Components/forums";





const App= ()=>{ 


// const [projectLogin, setProjectLogin]= useState(true);

// function projectChange(){
//   setProjectLogin(!projectLogin);
  
// }
// function manageProjectChange(){
//   if(projectLogin){
//     return <NewProject/>
//   }
// }





  return(
<>
  <Header1/>
  <Outlet/>
{/* {manageProjectChange()} */}

</>
  
  )
}

const appRouter= createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
            
            path:"/",
            element:<SideTab />
        },
      {
        path:"/newProject",
        element:<NewProject/>
      },
      {
        path:"/forums",
        element:<Forums/>
      }
      ]
    }
  ]
)

export default appRouter;