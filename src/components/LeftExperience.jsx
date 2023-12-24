import { v4 as uuidv4 } from 'uuid';

export default function LeftExperience({
    companyName,
    responsibilities,
    startDate,
    endDate,
    handleSubmission
}) {
    return (
        <div className="leftExperience">
            <form action="#">
                <label htmlFor="companyName"> Company Name: {' '}
                    <input type="text" id='companyName' defaultValue={companyName} />
                </label>
                <br />
                <label htmlFor="startDate"> Start Date: {' '}
                    <input type="text" id='startDate' defaultValue={startDate} />
                </label>
                <br />
                <label htmlFor="endDate"> End Date: {' '}
                    <input type="text" id='endDate' defaultValue={endDate} />
                </label>
                <br />
                <ul>
                    {
                        responsibilities.map((responsibility, index) =>
                            <li key={uuidv4()}>
                                <label htmlFor={`responsibilities${index + 1}`}> {`Responsibility ${index + 1}: `}
                                    <input type="text" id={`responsibilities${index + 1}`} defaultValue={responsibility} />
                                </label>
                            </li>
                        )
                    }
                </ul>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmission();
                    }}
                >Update</button>
            </form>
        </div >
    )
}