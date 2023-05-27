import { useNavigate } from 'react-router-dom'
import resumes from './images/resumes.svg'
import img from './images/page.png'
import './resumes.css'
import Resume1 from './Resumes/Resume1'
import Resume2 from './Resumes/Resume2'
import Resume3 from './Resumes/Resume3'


const Resumes = () => {
    const navigate = useNavigate()
    const click = () => {
        navigate('/afterselect')
    }
    let subChildProps = {
        name: "VINAY KUMAR",
        profile: "WEB DEVELOPER",
        idImage: "https://source.unsplash.com/1600x900/?person",
        mobileNo: 1234567890,
        email: "abc@gmail.com",
        address: "Jankapuri,Delhi",
        ProfileData: "I am qualified and experienced web developer with 2 years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail.",
        skills: ['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4', 'SKILL5', 'SKILL6', 'SKILL7'],
        experience: "I believe I would be an excellent fit for this role as a web developer because I have a strong background in web development and extensive experience with programming languages such as HTML, CSS, JavaScript and also have experience in React.js. I am passionate about staying up-to-date with emerging technologies and industry standards and have a track record of learning quickly and adapting to new technologies. I am committed to delivering high-quality work within tight deadlines and am confident that my attention to detail and ability to manage multiple projects simultaneously would make me a valuable asset to this organization",

    }
    // console.log(subChildProps)
    // let formData = formData;
    return (
        <div className='resumes'>
            <span className='Text1'>Select a Resume</span>
            <img src={resumes} alt='resumes' className='resumes-img' />
            <div className='resumes-div'>
                <div className='resume-image' onClick={click}>
                    <Resume1 formData={subChildProps} isVisible={true} />
                </div>
                <div className='resume-image' onClick={click}>
                    <Resume1 formData={subChildProps} isVisible={true} />
                </div>
                <div className='resume-image' onClick={click}>
                    <Resume1 formData={subChildProps} isVisible={true} />
                </div>
                <div className='resume-image' onClick={click}>
                    <Resume1 formData={subChildProps} isVisible={true} />
                </div>
                <div className='resume-image' onClick={click}>
                    <Resume1 formData={subChildProps} isVisible={true} />
                </div>
                <div className='resume-image' onClick={click}>
                    <Resume1 formData={subChildProps} isVisible={true} />
                </div>
            </div>
        </div>
    )
}
export default Resumes;