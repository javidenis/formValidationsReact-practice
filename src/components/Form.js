import Name from "./Name";
import Email from "./Email";
// import Phone from "./Phone";
// import Staff from "./Staff";
// import Bio from "./Bio";

import { useState } from 'react';

function Form () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [phoneType, setPhoneType] = useState("");
  // const [comments, setComments] = useState("");
  // const [validationErrors, setValidationErrors] = useState([]);
  // const [hasSubmitted, setHasSubmitted] = useState(false);
  return (
    <form>
      <Name name={name} setName={setName}/>
      <Email email={email} setEmail={setEmail}/>
      {/* <Phone />
      <Staff />
      <Bio /> */}
    </form>
  )
}

export default Form;