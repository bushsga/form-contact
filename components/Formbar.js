import React, { useState } from 'react';




const Formbar = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState(''); 
const [queryType, setQueryType] = useState('');
const [message, setMessage] = useState('');
const [agreement, setAgreement] = useState('');
const [successMessage, setSuccessMessage] = useState(null);
const [error, setError] = useState(null);
const [agreementError, setAgreementError] = useState('');
const [queryTypeError, setQueryTypeError] = useState('');
const [emailError, setEmailError] = useState('');


 const handleSubmit = (e) => {
  e.preventDefault();
 if (!firstName || !lastName || !message) {
  setSuccessMessage(null);
  setError("This field is required");
 }
 if (!email) {
  setEmailError("Please enter a valid email");
 }
 if (!queryType) {
  setQueryTypeError("Please select a query type");
 }
 if (!agreement) {
  setAgreementError("To submit this form, please consent to being contacted");
 }
  
 if (firstName && lastName && email && message && queryType && agreement) {
  setError(null);
  setEmailError(null);
  setQueryTypeError(null);
  setAgreementError(null);
  setFirstName('');
 setLastName('');
  setEmail('');
  setQueryType("");
    const radios = document.getElementsByName('query-type');
  Array.prototype.forEach.call(radios, radio => {
    radio.checked = false;
  });
 setMessage('');
 setAgreement('');
 document.getElementById('agreement').checked = false;
  setSuccessMessage("Thanks for completing the form, We'll be in touch soon");
 }
};

const handleCloseSuccessMessage = () => {
  setSuccessMessage(null);
}

  return (
    <div className='w-full sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-green-100 font-Karla'>
       {successMessage && (
      <div className='bg-green-950 max-w-md  mx-auto p-4 rounded-md'>
        <div className='flex space-x-3'>
        <button onClick={handleCloseSuccessMessage} className='text-red-500 space-x-3'><img src='https://img.icons8.com/?size=24&id=15478&format=png'/></button>
        <h2 className='text-white font-bold'>Message Sent!</h2>
        </div>
        <p className='text-white'>{successMessage}</p>
      </div>
     )}
     <div className='grid grid-cols-1 p-6 bg-white mx-auto md:mx-auto rounded-md gap-4'>
     <h2 className='text-3xl font-bold text-gray-900'>Contact Us</h2>
     <form onSubmit={handleSubmit}>
      
      <div className='grid md:grid-cols-2 sm:flex-col gap-4'>
      <div>
        <label className='block text-gray-900 font-bold  mb-2' htmlFor='first-name'>First Name *</label>
        <input autoComplete='given-name' type='text' id='first-name' value={firstName} onChange={(e) => setFirstName(e.target.value)} aria-required='true' aria-invalid={firstName === "" ? "true" : "false"} aria-errormessage={firstName === "" ? "please fill the input" : ""} className={`w-full p-2 pl-10 text-gray-900 border ${
          error && !firstName ? 'border-red-500' : 'border-gray-900'
        } focus:outline-none focus:ring-2 focus:ring-green-200 rounded shadow-sm`}/>
         {error && (
          <p className='text-red-500 txt-sm'>{error}</p>
         )}
      </div>
      <div>
        <label className='block text-gray-900 font-bold mb-2' htmlFor='last-name'>Last Name *</label>
        <input autoComplete='given-name' type='text' id='last-name' value={lastName} onChange={(e) => setLastName(e.target.value)} aria-required='true' aria-invalid={lastName === "" ? "true" : "false"} aria-errormessage={lastName === "" ? "please fill the input" : ""}  className={`w-full p-2 pl-10 text-gray-900 border ${
          error && !lastName ? 'border-red-500' : 'border-gray-900'
        } focus:outline-none focus:ring-2 focus:ring-green-200 rounded shadow-sm`}/>
        {error && (
          <p className='text-red-500 txt-sm'>{error}</p>
         )}
      </div>
      </div>


       <div className='mt-4'>
        <label className=' text-gray-900 font-bold mb-2' htmlFor='email'>Email Address *</label>
        <input autoComplete='given-name' type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} aria-required='true' aria-invalid={email === "" ? "true" : "false"} aria-errormessage={email === "" ? "please fill the input" : ""} className={`w-full p-2 pl-10 text-sm text-gray-900 border ${
          emailError && !email ? 'border-red-500' : 'border-gray-900'
        } focus:outline-none focus:ring-2 focus:ring-green-200 rounded shadow-sm`}/>
        {emailError && (
          <p className='text-red-500 txt-sm'>{emailError}</p>
         )}
       </div>


       <div className='mt-4'>
        <label className='block text-gray-900 font-bold mb-2' htmlFor='query-type'>Query Type *</label>
        <div className='grid md:grid-cols-2 gap-3'>
          <div className='flex space-x-3 border border-grey-900  pl-4 pt-2 rounded-2xl shadow-sm'>
            <input autoComplete='given-name' type='radio' id='general-enquiry' name='query-type' value='general-enquiry' onChange={(e) => setQueryType(e.target.value)}  className={`w-4 h-4 text-white  focus:ring-black`}/>
            <label className='block text-gray-900 font-bold mb-2' htmlFor='general-enquiry'>General Enquiry</label>
          </div>
          <div className=' flex space-x-3 border border-grey-900  pl-4 pt-2 rounded-2xl sm:ml-0 ml-4'>
            <input autoComplete='given-name' type='radio' id='support-request' name='query-type' value='support-request' onChange={(e) => setQueryType(e.target.value)}  className={`w-4 h-4 text-white   focus:ring-black`}/>
            <label className='block text-gray-900 font-bold mb-2' htmlFor='support-request'>Support Request</label>
          </div>
        </div>
        {queryTypeError && (
          <p className='text-red-500 txt-sm'>{queryTypeError}</p>
         )}
       </div>


       <div className='mt-4'>
        <label className='block text-gray-900 font-bold mb-2' htmlFor='message'>Message *</label>
        <textarea autoComplete='given-name' id='message' value={message} onChange={(e) => setMessage(e.target.value)} aria-required='true' aria-invalid={message === "" ? "true" : "false"} aria-errormessage={message === "" ? "please fill the input" : ""}  className={`w-full p-2 pl-10 text-sm text-gray-900 border ${
          error && !firstName ? 'border-red-500' : 'border-gray-900'
        } focus:outline-none focus:ring-2 focus:ring-green-200 shadow-md rounded`}/>
        {error && (
          <p className='text-red-500 txt-sm'>{error}</p>
         )}
       </div>

       <div className='mt-4'>
        <div className='flex space-x-6'>
         <input autoComplete='given-name' type='checkbox' id='agreement' value={agreement} onChange={(e) => setAgreement(e.target.checked)} aria-required='true' aria-invalid={agreement === "" ? "true" : "false"} aria-errormessage={agreement === "" ? "please check" : ""}  className='w-4 h-4 text-green-600 border border-gray-900 focus:ring-2 focus:ring-green-200'/>
         <label className='block text-gray-900 font-bold mb-2' htmlFor='agreement'>I consent to being contacted by the team *</label>
        </div>
          
          {agreementError && (
            <p className='text-red-500 txt-sm'>{agreementError}</p>
          )}
       </div>

       <button  type='submit'className='w-full bg-green-900 mt-4 hover:bg-green-600 text-white font-bold py-2  px-4 rounded'>Submit</button>
     </form>
     </div>
    </div>
  )
}

export default Formbar
