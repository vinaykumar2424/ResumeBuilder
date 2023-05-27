import "./loginRegister.css"
import fillImg from '../images/fillit.svg'
import SideImage from "./SideImage";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()  // stop refreshing the page
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (err) {
            console.log(err)
            setErr(true)
        }
    }
    return (
        <div className="registerPage">
            <span style={{position:'relative',bottom:"10vh"}}>
            <img src={fillImg} alt='fill' className='fillImg' />
            <span className="registerPage-grid1">
                <div className="registerForm">
                    <form onSubmit={handleSubmit}>
                        <div style={{color:"#0B2D36",fontSize:"22px",fontFamily:"fantasy",marginBottom:"30px"}}>Make your Resume</div>
                        <input type="email" className="input" placeholder="Enter your Email" />
                        <input type="password" className="input" placeholder="Enter passowrd" />
                        <button className="Signup-btn">Login</button>
                        {err && <span>Something went Wrong</span>}
                        <div style={{marginTop:"10px",fontSize:"12px"}}>Don't have account ? <Link style={{cursor:"pointer"}} to="/register">Signup</Link> </div>
                    </form>
                </div>
            </span>
            </span>
            <span className="registerPage-grid2">
                <SideImage />
            </span>
        </div>
    )
}
export default Login;