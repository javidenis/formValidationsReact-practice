import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";
import Staff from "./Staff";
import Bio from "./Bio";

import { useState } from 'react';

function Form () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [bio, setBio] = useState("");
  const [staff, setStaff] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  return (
    <form>
      <Name name={name} setName={setName}/>
      <Email email={email} setEmail={setEmail}/>
      <Phone phone={phone} setPhone={setPhone} phoneType={phoneType} setPhoneType={setPhoneType}/>
      <Staff staff={staff} setStaff={setStaff}/>
      <Bio bio={bio} setBio={setBio}/>
    </form>
  )
}

export default Form;