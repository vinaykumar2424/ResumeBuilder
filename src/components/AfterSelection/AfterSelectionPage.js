import Resume1 from "../Resumes/Resume1";
import './afterselection.css'

import camera from '../images/camera.png'
import { useState } from "react";


const AfterSelectionPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        profile: '',
        idImage: '',
        mobileNo: '',
        email: '',
        address: '',
        ProfileData: '',
        skills: [""],
        experience: ''
    });

    const handleChnage = (e, index) => {
        const { name, value, files } = e.target;
        if (name === "idImage") {
            const file = files[0];
            const imageURL = URL.createObjectURL(file);
            setFormData((prevData) => ({
                ...prevData,
                idImage: imageURL
            }));
        }
        else if (name === "skills") {
            const skillsArray = [...formData.skills]; // create a copy of the skills array
            skillsArray[index] = value; // update the specific skill at the index
            setFormData((prevData) => ({
                ...prevData,
                skills: skillsArray, // update the skills array in the state
            }));
        }
        else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    const addSkillInput = () => {
        setFormData((prevData) => ({
            ...prevData,
            skills: [...prevData.skills, ""], // add an empty skill to the skills array
        }));
    };

    const removeSkillInput = (index) => {
        setFormData((prevData) => {
            const skillsArray = [...prevData.skills]; // create a copy of the skills array
            skillsArray.splice(index, 1); // remove the skill at the index
            return {
                ...prevData,
                skills: skillsArray, // update the skills array in the state
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const name = e.target.name.value
        // const formDataArray = Object.entries(formData);
        // console.log(formDataArray);
        // console.log(name)
    }

    return (
        <div className="afterSelectionPage">
            <div className="afterSelectionPageform">
                <form onSubmit={handleSubmit} onChange={handleSubmit}>
                    <div className="fillformtext" >Fill The Form</div>
                    <div className="inputDiv">
                        <div className="MarginTopInput">
                            <div>
                                <input type="text" className="forminput" placeholder="Enter Your Name (ex. VINAY)" name="name" onChange={handleChnage} />
                            </div>
                            <div>
                                <input type="text" className="forminput" placeholder="Enter Your Profile (ex. WEB DEVELOPER)" name="profile" onChange={handleChnage} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", margin: "10px 5vw", padding: "0 15px", borderRadius: "5px" }}>
                                <label style={{fontSize:"2.2vmin",color:"gray",fontWeight:"400"}}>Select Your Id Image :</label>
                                <label htmlFor="file">
                                    <img src={camera} alt='cmaera-img' className="PersonPhoto" style={{ height: "4vmin", width: "4vmin", marginLeft: "2vmin",marginTop:"5px", cursor: 'pointer' }} />
                                </label>
                                <input type="file" style={{ display: "none" }} className="forminput" id="file" placeholder="Select Your Id Image" name="idImage" onChange={handleChnage} />
                            </div>
                        </div>
                        <div className="MarginBottomInput1">
                            <div>
                                <input type="number" className="forminput MarginBottomInputBox" placeholder="Enter Your Mobile No." name="mobileNo" onChange={handleChnage} />
                            </div>
                            <div>
                                <input type="text" className="forminput MarginBottomInputBox" placeholder="Enter Your Email" name="email" onChange={handleChnage} />
                            </div>
                            <div>
                                <input type="text" className="forminput MarginBottomInputBox" placeholder="Enter Your Address" name="address" onChange={handleChnage} />
                            </div>
                        </div>
                        <div className="MarginBottomInput2">
                            <div>
                                <textarea className="forminput MarginBottomInputBox MarginBottomInputBox2" placeholder="Write Something About You (Related to your Profile as shown in right side)" name="ProfileData" onChange={handleChnage} />
                            </div>
                        </div>
                        {/* <div className="MarginBottomInput3">
                            <div>
                                <input type="text" className="forminput MarginBottomInputBox" placeholder="Enter Your first Skill" name="skills" onChange={handleChnage} />
                            </div>
                            <div>
                                <input type="text" className="forminput MarginBottomInputBox" placeholder="Enter Your second Skill" name="skills" onChange={handleChnage} />
                            </div>
                            <div>
                                <input type="text" className="forminput MarginBottomInputBox" placeholder="Enter Your third Skill" name="skills" onChange={handleChnage} />
                            </div>
                            <div>
                                <input type="text" className="forminput MarginBottomInputBox" placeholder="Enter Your fourth Skill (Optional)" name="skills" onChange={handleChnage} />
                            </div>
                            <div>
                                <input type="text" className="forminput MarginBottomInputBox" placeholder="Enter Your fifth Skill (Optional)" name="skills" onChange={handleChnage} />
                            </div>
                            <div>
                                <input type="text" className="forminput MarginBottomInputBox" placeholder="Enter Your sixth Skill (Optional)" name="skills" onChange={handleChnage} />
                            </div>
                            <div>
                                <input type="text" className="forminput MarginBottomInputBox" placeholder="Enter Your seventh Skill (Optional)" name="skills" onChange={handleChnage} />
                            </div>
                        </div> */}
                        <div className="MarginBottomInput3">
                            {formData.skills.map((skill, index) => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        className="forminput MarginBottomInputBox"
                                        placeholder="Enter Your Skill"
                                        name="skills"
                                        value={skill}
                                        onChange={(e) => handleChnage(e, index)}
                                    />
                                    {index > 0 && (
                                        <button type="button" className="submitButton" onClick={() => removeSkillInput(index)}>
                                            Remove Skill Box
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button type="button" className="submitButton" onClick={addSkillInput}>
                                Add Skill Box
                            </button>
                        </div>
                        <div className="MarginBottomInput4">
                            <div>
                                <textarea className="forminput MarginBottomInputBox MarginBottomInputBox2" placeholder="Tell Us About Your Experience" name="experience" onChange={handleChnage} />
                            </div>
                        </div>
                    </div>
                    {/* <button className="submitButton">Submit Now</button> */}
                </form>
            </div>
            <div className="selectedResumeDiv">
                    <Resume1 formData={(formData)} />
            </div>
        </div>
    )
}
export default AfterSelectionPage;