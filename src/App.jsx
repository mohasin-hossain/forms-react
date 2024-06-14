import "./App.css";
import HookForm from "./HookForm/HookForm";
import RefForm from "./RefForm/RefForm";
import ReusableForm from "./ReusableForm/ReusableForm";
import SimpleForm from "./SimpleForm/SimpleForm";
import StatefulForm from "./StatefullForm/StatefulForm";

function App() {
  // These code are only associated with the ReusableForm component
  const handleSignUpSubmit = (data) => {
    console.log(data);
  };

  const handleUpdateProfileSubmit = (data) => {
    console.log(data);
  };
  // These code are only associated with the ReusableForm component

  return (
    <>
      <h1>Simple Form</h1>
      <SimpleForm></SimpleForm>
      <h1>Stateful Form</h1>
      <StatefulForm></StatefulForm>
      <h1>Ref Form</h1>
      <RefForm></RefForm>
      <h1>Custom Hook Form</h1>
      <HookForm></HookForm>
      <h1>Reusable Form</h1>
      <hr /> <hr />
      <ReusableForm formTitle="Sign Up" handleSubmit={handleSignUpSubmit}>
        <h6>This is the Sign Up Form. Please Sign Up Now!</h6>
      </ReusableForm>
      <ReusableForm
        formTitle="Update Your Profile"
        submitBtnText="Update Now"
        handleSubmit={handleUpdateProfileSubmit}
      >
        <h6>One Click to Update Your Profile</h6>
      </ReusableForm>
    </>
  );
}

export default App;
