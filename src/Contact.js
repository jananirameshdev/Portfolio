function Contact() {
    return (
        <div className="contactBox" id="contact">
            <div className="cont">
                Contact Us
            </div>
            <div className="getintouch">
                <div className="touch">Get in touch</div>
                <form name="contectUs" netlify>
                    <div className="inputBox">
                        <input type="text" className="named" placeholder="Enter Your Name" required />
                        <input type="email" className="emails" placeholder="Email Id" required />
                        <input type="tel" className="phoneno" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div className="message">
                        <textarea className="txt" placeholder="Leave a message for me " required></textarea>
                    </div>
                    <button className="send" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;