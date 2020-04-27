import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, clearCurrent, updateContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "Personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const clearAll = () => {
    clearCurrent();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) addContact(contact);
    else updateContact(contact);
    clearAll();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? "Edit Contact" : "Add Contact"}</h2>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="Enter Phone No."
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <p>Contact Type: </p>
      <div className="radioBtns">
        <input
          type="radio"
          name="type"
          value="Personal"
          checked={type === "Personal"}
          onChange={onChange}
        />{" "}
        <span>Personal</span>
        <input
          type="radio"
          name="type"
          value="Professional"
          checked={type === "Professional"}
          onChange={onChange}
        />{" "}
        <span>Professional</span>
      </div>
      <input type="submit" value={current ? "Update Contact" : "Add Contact"} />
      {current && (
        <div className="clearBtn">
          <button onClick={clearAll}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
