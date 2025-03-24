import React from "react";

class Butik extends React.Component {
    render() {
        return (
            <div>
                {/* Rubrik */}
                <main>
                    <div className="rubrik">
                        <h1>Varmt välkommen <br /> in till oss!</h1>
                        <h3>Här finns det mesta inom skogsvård, hem och trädgård.</h3>
                    </div>

                    {/* Tillbaka till toppen-knapp */}
                    <button id="scrollToTop">
                        <i className="fa fa-arrow-up"></i>
                    </button>
                </main>
                {/* Öppettider Tabell */}
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Dag</th>
                            <th>Öppettider</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Måndag - Fredag</td>
                            <td>07:00 - 16:00 <br />
                                <span className="lunch">(Lunch 12:00 - 13:00)</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* Google Map iframe */}
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674.324177982499!2d18.759416076672704!3d65.1875562291369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4679a715c80815bd%3A0xff0750b438554c55!2zTWFsw6UgU2tvZ3N0asOkbnN0IEFC!5e0!3m2!1ssv!2sse!4v1739790227339!5m2!1ssv!2sse"
                        width="100%"   // Gör iframe responsiv
                        height="450"  // Kan justeras för bättre passform
                        style={{ border: 0, borderRadius: '10px' }}  // Border och hörn-radius för bättre estetik
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </div>
        );
    }
}

export default Butik;
