import { useState } from "react";

const Inquiry = () => {
  const [name, setName] = useState('');
  const [isNameErr, setIsNameErr] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailErr, setIsEmailErr] = useState(false);
  const [inquiry, setInquiry] = useState('');
  const [isInquiryErr, setIsInquiryErr] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length < 3) setIsNameErr(true);
    else setIsNameErr(false);
    console.log(name.length < 3);

    if (!new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$').test(email)) setIsEmailErr(true);
    else setIsEmailErr(false);
    console.log(!new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$').test(email));

    if (inquiry.length == 0) setIsInquiryErr(true);
    else setIsInquiryErr(false);
    console.log(inquiry.length == 0);

    if (!((name.length < 3) || (!new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$').test(email)) || (inquiry.length == 0))) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);

      setName('');
      setEmail('');
      setInquiry('');
    }

  }

  return <section>
    <form className="p-5" onSubmit={handleSubmit}>
      <h1 className="h3 mb-5 fw-normal fw-bold">Property Inquiry</h1>
      <div className="input-div mb-1">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" aria-describedby="nameError" onChange={(e) => setName(e.target.value)} value={name} required />
        <div id="nameError" className={isNameErr ? "form-text error-text display-error" : "form-text error-text"}>Minimum 3 characters required.</div>
      </div>

      <div className="input-div mb-1">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailError" onChange={(e) => setEmail(e.target.value)} value={email} required />
        <div id="emailError" className={isEmailErr ? "form-text error-text display-error" : "form-text error-text"}>Please enter a valid email.</div>
      </div>

      <div className="input-div mb-3">
        <label htmlFor="password" className="form-label">Inquiry</label>
        <textarea type="password" className="form-control" id="password" aria-describedby="passError" onChange={(e) => setInquiry(e.target.value)} value={inquiry} required />
        <div id="inquiryerror" className={isInquiryErr ? "form-text error-text display-error" : "form-text error-text"}>Review cannot be empty.</div>
      </div>

      <div className="d-flex align-items-end gap-3 ">
        <button type="submit" className="btn btn-primary mt-3 btn-info text-white fw-bold shadow">Submit</button>
        {isSubmitted && <span className="submit-success">Inquiry submitted 	&#10003;</span>}
      </div>
      <p></p>
    </form>
  </section>
}

export default Inquiry;