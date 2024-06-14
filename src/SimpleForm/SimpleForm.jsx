
const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        console.log(event.target.number.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="number" name="number" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;