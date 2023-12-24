import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import './styles/AppLeft.css'
import './styles/AppRight.css'

import LeftInfo from "./components/LeftInfo";
import LeftEducation from "./components/LeftEducation";
import LeftExperience from "./components/LeftExperience";


const initialGeneralInformation = {
    firstName: 'First', lastName: 'Last', email: 'first.last@website.com', phoneNumber: '(666) 666-6666'
}
const initalEducationalExperience = {
    schoolName: 'Radom University', titleOfStudy: 'Random Major', graduationDate: 'Month Year'
}
const initalPracticalExperience = {
    companyName: 'Random Company', positionTitle: 'Random Title',
    responsibilities: ['responsibility 1', 'responsibility 2', 'responsibility 3'],
    startDate: 'Month Year',
    endDate: 'Month Year'
}

export default function App() {
    const [info, setInfo] = useState(initialGeneralInformation)
    const [infoDisplay, setInfoDisplay] = useState(false)

    const [education, setEducation] = useState(initalEducationalExperience)
    const [educationDisplay, setEducationDisplay] = useState(false)

    const [experience, setExperience] = useState(initalPracticalExperience)
    const [experienceDisplay, setExperienceDisplay] = useState(false)

    let fullName = info.firstName + ' ' + info.lastName;

    function handleInfoUpdate() {
        const firstName = document.getElementById('first').value
        const lastName = document.getElementById('last').value
        const email = document.getElementById('email').value
        const phoneNumber = document.getElementById('tel').value
        setInfo(
            { firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber }
        )
    }
    function handleEducationUpdate() {
        const schoolName = document.getElementById('schoolName').value
        const titleOfStudy = document.getElementById('titleOfStudy').value
        const graduationDate = document.getElementById('graduationDate').value
        setEducation(
            { schoolName: schoolName, titleOfStudy: titleOfStudy, graduationDate: graduationDate }
        )
    }
    function handleExperienceUpdate() {
        const companyName = document.getElementById('companyName').value;
        const responsibilities1 = document.getElementById('responsibilities1').value
        const responsibilities2 = document.getElementById('responsibilities2').value
        const responsibilities3 = document.getElementById('responsibilities3').value
        const startDate = document.getElementById('startDate').value
        const endDate = document.getElementById('endDate').value
        setExperience(
            {
                companyName: companyName,
                responsibilities: [responsibilities1, responsibilities2, responsibilities3],
                startDate: startDate,
                endDate: endDate
            }
        )
    }

    return (
        <>
            <div className="left">
                <h1>CV Application (made using React!!)</h1>
                <div className="heading">
                    <button onClick={() => setInfoDisplay(!infoDisplay)}>
                        {infoDisplay ? '-' : '+'}
                    </button>
                    <h2>
                        General Information
                    </h2>
                </div>
                {
                    infoDisplay
                    &&
                    <LeftInfo
                        firstName={info.firstName}
                        lastName={info.lastName}
                        email={info.email}
                        phoneNumber={info.phoneNumber}
                        handleSubmission={handleInfoUpdate}
                    />
                }
                <div className="heading">
                    <button onClick={() => setEducationDisplay(!educationDisplay)}>
                        {educationDisplay ? '-' : '+'}
                    </button>

                    <h2>
                        Education
                    </h2>
                </div>
                {
                    educationDisplay
                    &&
                    <LeftEducation
                        schoolName={education.schoolName}
                        titleOfStudy={education.titleOfStudy}
                        graduationDate={education.graduationDate}
                        handleSubmission={handleEducationUpdate}
                    />
                }
                <div className="heading">
                    <button onClick={() => setExperienceDisplay(!experienceDisplay)}>
                        {experienceDisplay ? '-' : '+'}</button>
                    <h2>
                        Work Experience
                    </h2>
                </div>
                {
                    experienceDisplay
                    &&
                    <LeftExperience
                        companyName={experience.companyName}
                        responsibilities={experience.responsibilities}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        handleSubmission={handleExperienceUpdate}
                    />
                }
            </div >
            <div className="right">
                <div className="rightInfo">
                    <h2>{fullName}</h2>
                    <h3>Email: {info.email}</h3>
                    <h3>Phone: {info.phoneNumber}</h3>
                </div>
                <div className="rightEducation">
                    <h2>Education</h2>
                    <h3>School Name: {education.schoolName}</h3>
                    <h3>Area of Study: {education.titleOfStudy}</h3>
                    <p>Graduation Date: {education.graduationDate}</p>
                </div>
                <div className="rightExperience">
                    <h2>Experience</h2>
                    <h3>Company Name: {experience.companyName}</h3>
                    <h3>Responsibilites:</h3>
                    <p>Start Date: {experience.startDate}</p>
                    <p>End Date: {experience.endDate}</p>
                    <ul>
                        {experience.responsibilities.map((responsibility) => {
                            return <li key={uuidv4()}>{responsibility}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}