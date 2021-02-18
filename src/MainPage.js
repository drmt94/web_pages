import {NavLink} from "react-router-dom";
import Countdown from 'react-countdown';
function MainPage(){

    return(
        <div>
            <h1>This is the main page</h1>
            <br/>
            <br/>
            <br/>
            <div>

                <h3 class> There is more: <Countdown date={'2021-03-23 08:00:00'} />  time until the state's fourth election </h3>

            </div>

        </div>
    );
}
export default MainPage;