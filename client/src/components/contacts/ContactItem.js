import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="contactCard">
      <h2>
        {name}{" "}
        <span className={type === "Professional" ? "greenBadge" : "blueBadge"}>
          {type}
        </span>
      </h2>
      {email && (
        <p>
          <i className="fa fa-envelope-open"></i>
          {email}
        </p>
      )}
      {phone && (
        <p>
          <i className="fa fa-phone"></i>
          {phone}
        </p>
      )}
      <div className="cardBtns">
        <button onClick={() => setCurrent(contact)}>Edit</button>
        <button style={{ background: "#ff3a44" }} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
//
