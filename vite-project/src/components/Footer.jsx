import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-content">
                    <div className="contact-info">
                        <p>Email: info@malaskogstjanst.se</p>
                        <p>Telefon: 0953-344 44</p>
                        <p>Adress: Industrivägen 14, 93931 Malå, Sweden</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2025 Malå Skogstjänst. Alla rättigheter reserverade.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
