import React from "react";

class Index extends React.Component {
    render() {
        return (
            <section className="hero">
                <video autoPlay muted loop>
                    <source src="/src/assets/Skoglofi.mp4" type="video/mp4" />
                </video>
                <div className="hero-content">
                    <h1>Din trygga partner inom service och produktutveckling</h1>
                    <button
                        className="cta"
                        onClick={() => (window.location.href = 'kontakt')}
                    >
                        Kontakta oss
                    </button>
                </div>
            </section>
        );
    }
}

export default Index;
