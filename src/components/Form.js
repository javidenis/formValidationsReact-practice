import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";
import Staff from "./Staff";
import Bio from "./Bio";
import Notifications from "./Notifications";

import { useState } from 'react';

function Form () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [bio, setBio] = useState("");
  const [staff, setStaff] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  // const [hasSubmitted, setHasSubmitted] = useState(false);

  function submitForm(e) {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      phoneType,
      staff,
      bio,
      notifications,
      submittedOn: new Date()
    };
    // validations
    // if it passes validations, console log
    console.log(formData)
  }

  return (
    <form onSubmit={submitForm}>
      <Name name={name} setName={setName}/>
      <Email email={email} setEmail={setEmail}/>
      <Phone phone={phone} setPhone={setPhone} phoneType={phoneType} setPhoneType={setPhoneType}/>
      <Staff staff={staff} setStaff={setStaff}/>
      <Bio bio={bio} setBio={setBio}/>
      <Notifications notifications={notifications} setNotifications={setNotifications}/>
      <button>Submit</button>
    </form>
  )
}

export default Form;