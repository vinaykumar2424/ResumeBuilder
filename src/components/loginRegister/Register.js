import SideImage from "./SideImage";
import "./loginRegister.css"
import fillImg from '../images/fillit.svg'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()
    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()  // stop refreshing the page
        // console.log(e.target[0].value)
        let displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const user = res.user;
            // console.log(res.user)
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName,
                email,
            });
            navigate("/")
        } catch (err) {
            console.log(err)
            setErr(true)
        }
    }
    return (
        <>
            <div className="registerPage">
                <span className="left-grid" style={{position:'relative',bottom:"10vh"}}>
                    <img src={fillImg} alt='fill' className='fillImg' />
                    <span className="registerPage-grid1">
                        <div className="registerForm">
                            <form onSubmit={handleSubmit}>
                                <div style={{ color: "#0B2D36", fontSize: "22px", fontFamily: "fantasy", marginBottom: "30px" }}>Make your Resume</div>
                                <input type="text" className="input" placeholder="Enter your Name" />
                                <input type="email" className="input" placeholder="Enter your Email" />
                                <input type="password" className="input" placeholder="Enter passowrd" />
                                <button className="Signup-btn">Signup</button>
                                {err && <span>Something went Wrong</span>}
                                <div style={{ marginTop: "10px", fontSize: "12px" }}>Already have account ? <Link to="/login" style={{ cursor: "pointer" }}>Login</Link></div>
                            </form>
                        </div>
                    </span>
                </span>
                <span className="registerPage-grid2">
                    <SideImage />
                </span>
            </div>
        </>
    )
}
export default Register;