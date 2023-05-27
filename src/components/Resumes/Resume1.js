import './resume1.css'

import phone from "../images/telephone.png"
import Email from "../images/email.png"
import location from "../images/location.png"

import JsPDF, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { useEffect } from 'react';
import { useRef } from 'react';
// import 'jspdf-autotable';
const Resume1 = ({ formData, isVisible }) => {
    // isVisible = true
    let { name, profile, idImage, mobileNo, email, address, ProfileData, skills, experience } = formData;
    if (name === "") {
        name = "VINAY KUMAR"
    }
    if (profile == "") {
        profile = "WEB DEVELOPER"
    }
    if (idImage == "") {
        idImage = "https://source.unsplash.com/1600x900/?person"
    }
    if (mobileNo == "") {
        mobileNo = 1234567890
    }
    if (email == "") {
        email = "abc@gmail.com"
    }
    if (address == "") {
        address = "Jankapuri,Delhi"
    }
    if (ProfileData == "") {
        ProfileData = "I am qualified and experienced web developer with 2 years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail."
    }
    if (skills == "") {
        skills = ['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4', 'SKILL5', 'SKILL6', 'SKILL7'];
    }
    if (experience == "") {
        experience = "I believe I would be an excellent fit for this role as a web developer because I have a strong background in web development and extensive experience with programming languages such as HTML, CSS, JavaScript and also have experience in React.js. I am passionate about staying up-to-date with emerging technologies and industry standards and have a track record of learning quickly and adapting to new technologies. I am committed to delivering high-quality work within tight deadlines and am confident that my attention to detail and ability to manage multiple projects simultaneously would make me a valuable asset to this organization"
    }
    // const input = document.getElementById('outerResume1Div');
    // const generatePDF = () => {

    //     const report = new JsPDF();
    //     report.html(document.querySelector('.resume1')).then(() => {
    //         report.save('resume.pdf');
    //     });
    // }

    const contentRef = useRef(null);

  const generatePDF = async () => {
    const contentElement = contentRef.current;

    // Ensure the element is attached to the document before capturing
    if (!document.body.contains(contentElement)) {
      document.body.appendChild(contentElement);
    }

    // Capture the screenshot using html2canvas
    const canvas = await html2canvas(contentElement, { allowTaint: true,useCORS: true,dpi: 600,scale: 3,letterRendering: true });

    // Convert the screenshot to a base64-encoded image
    const imgData = canvas.toDataURL('image/png');

    // Calculate the PDF dimensions based on the content
    const contentWidth = contentElement.offsetWidth;
    const contentHeight = contentElement.offsetHeight;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [contentWidth, contentHeight],
      dpi: 500,
    });

    // Calculate the translation adjustment for horizontal centering
    const centerAdjustment = (pdf.internal.pageSize.getWidth() - contentWidth) / 2;

    // Add the captured image to the PDF with the translation adjustment
    pdf.addImage(imgData, 'PNG', centerAdjustment, 0, contentWidth, contentHeight);

    // Save the PDF file
    pdf.save('output.pdf');
  };
    // const generatePDF = () => {
    //     const pdf = new jsPDF();
    //     const component = document.getElementsByClassName('resume1');
    //     const options = {
    //         pagesplit: true, // enable page splitting if necessary
    //         background: '#fff' // set background color if needed
    //     };

    //     pdf.setDisplayMode('fullwidth');
    //     pdf.setFillColor('#fff'); // set background color if needed
    //     pdf.setFont('Arial', 'normal');
    //     pdf.setFontSize(10);

    //     // Set viewport size to match the dimensions of your component
    //     const width = component.offsetWidth;
    //     const height = component.offsetHeight;
    //     pdf.setPage(1, 'auto', [width, height]);

    //     pdf.fromHTML(component, options, () => {
    //         pdf.save('your-file-name.pdf');
    //       });
    // };
    // const generatePDF = async () => {
    //     const pdf = new jsPDF();

    //     // Get the HTML component element
    //     const component = document.getElementsByClassName('resume1');

    //     // Convert the HTML component into a canvas
    //     const canvas = await html2canvas(component);

    //     // Get the canvas's data URL
    //     const imageData = canvas.toDataURL('image/jpeg');

    //     // Add the image to the PDF
    //     pdf.addImage(imageData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

    //     // Save the PDF
    //     pdf.save('your-file-name.pdf');
    //   };

    return (
        <div className='outerResume1Div'>
            <div className="resume1"  ref={contentRef}>
                <div className="topMargin">
                    <span className="personInfoBox">
                        <div className="personName">{name}</div>
                        <div className="personProfile">{profile}</div>
                    </span>
                    <span>
                        <img src={idImage} alt="personImg" className="personImage" />
                    </span>
                </div>
                <div className='bottomMargin'>
                    <div className='grid1'>
                        <span className='span1'>
                            <div className='subdiv'>
                                <img src={phone} alt='' className="icons-imgs" />
                                <p className='mobileNumber'>{mobileNo}</p>
                            </div>
                            <div className='subdiv'>
                                <img src={Email} alt='' className="icons-imgs" />
                                <p className='EmailId'>{email}</p>
                            </div>
                            <div className='subdiv'>
                                <img src={location} alt='' className="icons-imgs" />
                                <p className='homeAddress'>{address}</p>
                            </div>
                        </span>
                        <span className='span2'>
                            <p className='headings'>PROFILE</p>
                            <div className='profileText'>
                                {ProfileData}
                            </div>
                        </span>
                    </div>
                    <div className='grid2'>
                        <span className='span3'>
                            <p className='headings'>SKILLS</p>
                            <div className='listdiv' >
                                {(skills)?.map((skill, key) => (<li className={`skill skill${key + 1}`} key={key}>{skill}</li>))}
                            </div>
                        </span>
                        <span className='span4'>
                            <p className='headings'>EXPERIENCE</p>
                            <div className='experienceDiv'>{experience}</div>
                        </span>
                    </div>
                </div>
            </div>
            {!isVisible && <button onClick={generatePDF} className='downloadBtn' type="button">Export PDF</button>}
        </div>
    )
}

export default Resume1;