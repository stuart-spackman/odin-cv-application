export default function LeftInfo({ firstName, lastName, email, phoneNumber, handleSubmission }) {
    return (
        <div className="leftInfo">
            <form action="#">
                <label htmlFor="first"> First name:{' '}
                    <input type="text" id='first' defaultValue={firstName} />
                </label>
                <br />
                <label htmlFor="last"> Last name:{' '}
                    <input type="text" id='last' defaultValue={lastName} />
                </label>
                <br />
                <label htmlFor="email"> Email:{' '}
                    <input type="email" id='email' defaultValue={email} />
                </label>
                <br />
                <label htmlFor="tel">Phone number:{' '}
                    <input type="tel" id='tel' defaultValue={phoneNumber} />
                </label>
                <br />
                <button
                    type='submit'
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
