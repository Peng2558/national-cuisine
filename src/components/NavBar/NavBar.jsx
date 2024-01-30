import {Link} from 'react-router-dom';
import * as userSrvice from '../../utilities/users-service'
export default function NavBar({user,setUser}){
    function handleLogOut(){
       userSrvice.logOut();
        setUser(null);
    }

return (

  <nav>
   {/* <Link to="/orders">Order History</Link>
     &nbsp; | &nbsp;
  <Link to="/orders/new">New Order</Link>
  &nbsp;| &nbsp; */}
  Welcome {user.name.toUpperCase()}
  &nbsp;| &nbsp;
  &nbsp;&nbsp;<Link to="#" onClick={handleLogOut}>Log Out</Link>
 </nav>
)
}