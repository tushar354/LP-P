import React, { useState } from 'react'
import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onsubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }


    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize='24px' />} />
                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize='24px' />} />
                </div>
                <Button isOutline={true}
                    text="VIA EMAIL FORM" icon={<HiMail fontSize='24px' />}
                />


                <form
                    onSubmit={onsubmit}
                >
                    <div className={styles.form_control}>
                        <label htmlFor=" name "> NAME</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor=" email "> EMAIL</label>
                        <input type="email" name='email' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor=" text "> TEXT</label>
                        <textarea name='text' rows="8" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: "end", }}>
                        <Button
                            text="SUBMIT"
                        />
                    </div>
                    <div>
                        {name + " " + email + " " + text}
                    </div>

                </form>




            </div>
            <div className={styles.contactImage}>
                <img src="/images/contact.svg" alt="" srcset="" />
            </div>
        </section>
    )
}

export default ContactForm
