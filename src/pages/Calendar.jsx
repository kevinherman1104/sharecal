import headerLogo from "../assets/header_logo.png";
import Button from "../common/Button";
import "./Calendar.css"
import CalendarComponent from "./Calendar/CalendarComponent";

function Calendar(){
    return <div>
        <div className="header">
            <img className="header-logo" src={headerLogo} alt="header-logo"/>
            <div className="right-header">
                <Button name="+Add" />
                <Button name="Share" isBordered/>
            </div>

        </div>
        <div className="main-content-wrapper">
            <div className="main-content">
                <CalendarComponent />
            </div>
        </div>
    </div>
}

export default Calendar;