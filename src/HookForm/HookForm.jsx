import useInputState from "../hooks/useInputStae";

const HookForm = () => {
    const nameState = useInputState();
    const emailState = useInputState();
    const passState = useInputState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameState.value)
        console.log(emailState.value)
        console.log(passState.value)
    }


    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name="name" />
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input {...passState} type="number" name="number" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;