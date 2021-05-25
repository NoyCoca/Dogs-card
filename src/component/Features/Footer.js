function Footer(props) {
    const {phone, city, email} = props;
    return (<div className = "footer"> 
<h3> Contact Us</h3>
<p> Phone: {phone}</p>
<p> City: {city}</p>
<p> Email: {email}</p>

    </div>)
}

export default Footer;