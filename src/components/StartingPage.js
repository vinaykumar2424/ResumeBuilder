import './startingpage.css'
import welcome from './images/welcome.svg'
import resumes from './images/chooseResume.svg'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
const StartingPage = () => {

    const navigate = useNavigate()
    const click = ()=>{
        navigate('/resumes')
    }

    return (
        <div className="startingPage">
            <span>
                <img src={resumes} alt='img' className='chooseResume-img' />
            </span>
            <span className='btn-span'>
                <img src={welcome} alt='img' className='welcome-img' />
                <button onClick={click} className='chooseBtn'>Choose Your resume &rarr;</button>
            </span>
                <button className='logOutBtn' onClick={() => { signOut(auth) }}>Log Out</button>
        </div>
    )
}
export default StartingPage;