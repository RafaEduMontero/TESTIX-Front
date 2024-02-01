import { BrowserRouter as Router,
    Route,
    Routes,
    } from "react-router-dom";
import Home from "../pages/HomePage";
import CollaboratorPage from "../pages/CollaboratorPage";
import AdministrationSkill from "../pages/AdministrationSkill";
import AdministrationUser from "../pages/AdministrationUser";

const RoutesPage = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/collaborator/:id" element={<CollaboratorPage/>}></Route>
                <Route path="/administrationSkills" element={<AdministrationSkill/>}></Route> 
                <Route path="/administrationUsers" element={<AdministrationUser/>}></Route>                
            </Routes>
        </Router>
    )
}

export default RoutesPage;