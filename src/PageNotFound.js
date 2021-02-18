import {NavLink} from "react-router-dom";

function PageNotFound(){
    return(

        <div>
            <h1>There is no page matching the address you entered</h1>
            <NavLink to={"/"}>Go to back to main</NavLink>
        </div>
    )

}
export default PageNotFound;