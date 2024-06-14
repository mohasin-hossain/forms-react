const ReusableForm = ({ formTitle, submitBtnText = "Submit", handleSubmit, children }) => {

  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleLocalSubmit}>
        <h1>{formTitle}</h1>
        {children}
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
