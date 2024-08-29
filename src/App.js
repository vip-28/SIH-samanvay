import Header1 from "./Components/header";
import SideTab from "./Components/sideTab";
import NewProject from "./Components/newProject"
import { createBrowserRouter, Outlet } from "react-router-dom";
import Forums from "./Components/forums";
import { Provider } from "react-redux";
import store from "./Utilities/store";
import ProjectPage from "./Components/projectPage";
import NewQuery from "./Components/newQuery";





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
<Provider store={store}>
  <Header1/>
  <Outlet/>
{/* {manageProjectChange()} */}
</Provider>

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
      },{
        path:"/project/:id",
        element:<ProjectPage/>
      },{
        path:"/newQuery",
        element:<NewQuery/>
      }

      ]
    }
  ]
)

export default appRouter;