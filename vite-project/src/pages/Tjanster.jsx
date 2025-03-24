import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function useInView() {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element) => {
                const elementOffset = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementOffset < windowHeight) {
                    element.classList.add('visible'); // Lägg till "visible" när elementet är synligt
                } else {
                    element.classList.remove('visible'); // Ta bort "visible" om elementet är utom synhåll
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();  // Kontrollera initialt om elementet är synligt när sidan laddas

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isInView;
}

const Tjanster = () => {
    // Använd vår useInView hook
    const isInView = useInView();

    return (
        <main>
            {/* Första sida */}
            <div className="rubrik">
                <h1>Service, underhåll <br /> och innovationer</h1>
                <h3>Till skog, gruv och industriföretag runtom landet</h3>
            </div>

            {/* Skogstjänst */}
            <div className="fade-in">
                <div className="skog">
                    <img src="src/assets/skogservice.jpg" alt="skogservice" />
                    <div className="text">
                        <h1>SERVICE TILL SKOGSFÖRETAG</h1>
                        <p>
                            Vi erbjuder service och reparationer av skogs- och jordbruksmaskiner –
                            allt från innovation till servicearbete direkt i din vardag.
                            En specialitet är tillverkning av lastutrymmen till olika fabrikat.
                            Vi monterar maskiner, servar och reparerar Stihl-produkter och hjälper till med slangbyten.
                        </p>
                        <Link to="/kontakt" className="cta">Kontakta oss</Link>
                    </div>
                </div>
            </div>

            {/* Gruvtjänst */}
            <div className="fade-in">
                <div className="gruv">
                    <div className="text">
                        <h1>SERVICE TILL GRUVINDUSTRIN</h1>
                        <p>
                            Vi har djup kunskap inom service, underhåll och tillverkning av exempelvis borrplattformar.
                            Som verkstadsföretag löser vi problem och bistår med kundanpassad tillverkning av produkter.
                        </p>
                        <Link to="/kontakt" className="cta">Kontakta oss</Link>
                    </div>
                    <img src="src/assets/gruvservice.jpg" alt="gruvservice" />
                </div>
            </div>

            {/* Industritjänst */}
            <div className="fade-in">
                <div className="industri">
                    <img src="src/assets/industriservice.jpg" alt="industriservice" />
                    <div className="text">
                        <h1>SERVICE TILL INDUSTRIFÖRETAG</h1>
                        <p>
                            Vi står till tjänst med specialbyggen, entreprenad- och ritningstjänster.
                            Vi byter och servar transportband och tillhandahåller professionella CAD-tjänster.
                            Prata med oss om våra förmånliga service- och underhållsavtal.
                        </p>
                        <Link to="/kontakt" className="cta">Kontakta oss</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Tjanster;
