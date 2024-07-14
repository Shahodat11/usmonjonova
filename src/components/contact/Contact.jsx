import React, { useState } from "react";
import "../contact/contact.css";
const BOT_TOKEN = "6984566422:AAG5nhhEld31kVuP7AhU4bA8sZ8NE6-J6Ok";
const CHAT_ID = "-4274456470";
const USER_ID = "1427172949";

let initialState = {
  fullname: "",
  email: "",
};
const Contact = () => {
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Buyurtma %0A%0A";
    text += `Ismi: <b>${data.fullname}</b> %0A`;
    text += `Tel: <b>${data.telefon}</b> %0A`;
    text += `Email: ${data.email} %0A`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };
  return (
    <>
      <div className="contakt">
        <div className="container">
          <h2 className="about-h2">CONTACT</h2>
          <p className="home-p">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className="contact-page">
            <div className="contact1" onChange={(e) => console.log(e.target)}>
              <form onSubmit={handleSubmit} action="">
                <div className="contact__form-field">
                  <label htmlFor="Name">
                    <p className="contact__form-label">Name</p>
                    <input
                      className="contact__form-input"
                      value={data.fullname}
                      onChange={(e) =>
                        setData((p) => ({ ...p, fullname: e.target.value }))
                      }
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </label>
                </div>
                <div className="contact__form-field">
                  <label htmlFor="Phone">
                    <p className="contact__form-label">Phone</p>
                    <input
                      className="contact__form-input"
                      value={data.telefon}
                      onChange={(e) =>
                        setData((p) => ({ ...p, telefon: e.target.value }))
                      }
                      type="number"
                      placeholder="Enter Your Phone"
                    />
                  </label>
                </div>
                <div className="contact__form-field">
                  <label htmlFor="Email">
                    <p className="contact__form-label">Email</p>
                    <input
                      className="contact__form-input"
                      value={data.email}
                      onChange={(e) =>
                        setData((p) => ({ ...p, email: e.target.value }))
                      }
                      type="email"
                      placeholder="Email Enter Your Email"
                    />
                  </label>
                </div>
                <button className="contact__btn">Buy now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
