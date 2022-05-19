import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";
import Staff from "./Staff";
import Bio from "./Bio";
import Notifications from "./Notifications";

import { useState, useEffect } from 'react';

function Form () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [bio, setBio] = useState("");
  const [staff, setStaff] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // validations
  useEffect(() => {
    const errors = [];
    // name must exist
    if (!name.length) errors.push("Please enter your Name");

    // email must exist and be properly formatted
    let emailRegex = /^[\w]?@[\w]?\.[\w]?/g;
    if (!email.length) errors.push("Please enter your Email");
    else if (!email.match(emailRegex)) errors.push("Please enter a valid Email");

    // phone number properly formatted
    // phone type should be selected if there is a phone number
    if(phone) {
      let phoneRegex = /[\d]{3}-[\d]{3}-[\d]{4}/g;
      if(!phone.match(phoneRegex)) errors.push("Please enter a valid Phone Number");
      if(!phoneType) errors.push("Must provide a Phone Type");
    }

    // bio has a limit of 280 characters
    if(bio.length > 280) errors.push("Bio may not exceed 280 characters");

    setValidationErrors(errors);
  }, [name, email, phone, phoneType, bio]);

  function submitForm(e) {
    e.preventDefault();
    
    setHasSubmitted(true);

    // if it passes validations, console log
    if (!validationErrors.length) {
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

      console.log(formData);

      // reset form
      setName("");
      setEmail("");
      setPhone("");
      setPhoneType("");
      setBio("");
      setStaff("");
      setNotifications(false)
      setValidationErrors([]);
      setHasSubmitted(false);
    }
  }

  return (
    <div>
      <h2>Sign Up Form</h2>
      {
        hasSubmitted && validationErrors.length > 0 && (
          <div>
            The following errors were found:
            <ul>
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )
      }
      <form onSubmit={submitForm}>
        <Name name={name} setName={setName}/>
        <Email email={email} setEmail={setEmail}/>
        <Phone phone={phone} setPhone={setPhone} phoneType={phoneType} setPhoneType={setPhoneType}/>
        <Staff staff={staff} setStaff={setStaff}/>
        <Bio bio={bio} setBio={setBio}/>
        <Notifications notifications={notifications} setNotifications={setNotifications}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;