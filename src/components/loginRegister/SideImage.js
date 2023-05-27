import "./loginRegister.css"
import resume from'../images/page.svg'
import logo from'../images/reumeLogoImg.png'
const SideImage = ()=>{
    return (
        <div>
            <div className="page">
                <img src={logo} alt="logo" className="resume-logo" />
                <img src={resume} alt="resume" className="resume-img" />
            </div>
        </div>
    )
}
export default SideImage;