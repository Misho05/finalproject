
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form submitted:", { name, email, message });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="static-page">
        <h2>გმადლობთ!</h2>
        <p>თქვენი შეტყობინება მიღებულია. ჩვენ მალე დაგიკავშირდებით.</p>
      </div>
    );
  }

  return (
    <div className="static-page contact-page">
      <h2>დაგვიკავშირდით</h2>
      <p>
        გაქვთ შეკითხვები? გთხოვთ, შეავსოთ ქვემოთ მოცემული ფორმა და 
        ჩვენი გუნდი დაგიკავშირდებათ უმოკლეს დროში.
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">თქვენი სახელი</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">ელ. ფოსტა</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">შეტყობინება</label>
          <textarea 
            id="message" 
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">გაგზავნა</button>
      </form>
    </div>
  );
}

export default Contact;