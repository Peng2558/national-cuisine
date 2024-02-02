import {Link} from 'react-router-dom';
import * as userSrvice from '../../utilities/users-service';
import './NavBar.css';
export default function NavBar({user,setUser}){
    function handleLogOut(){
       userSrvice.logOut();
        setUser(null);
    }

return (

  <nav>
    <span className="welcome-message">Welcome {user.name.toUpperCase()}</span>
    &nbsp;&nbsp;<Link to="#" onClick={handleLogOut}>Log Out</Link>
 </nav>
)
}