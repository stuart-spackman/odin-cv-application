export default function LeftEducation({ schoolName, titleOfStudy, graduationDate, handleSubmission }) {
    return (
        <div className="leftEducation">
            <form action="#">
                <label htmlFor="schoolName"> School Name: {' '}
                    <input type="text" id='schoolName' defaultValue={schoolName} />
                </label>
                <br />
                <label htmlFor="titleOfStudy"> Area of Study: {' '}
                    <input type="text" id="titleOfStudy" defaultValue={titleOfStudy} />
                </label>
                <br />
                <label htmlFor="graduationDate"> Graduation Date: {' '}
                    <input type="text" id='graduationDate' defaultValue={graduationDate} />
                </label>
                <br />
                <button type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmission();
                    }}
                >
                    Update
                </button>
            </form>
        </div>
    )
}