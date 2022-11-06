import React from "react";
import "../styles/Participation.css"
import Content from "./Content";



function About(){
    return(
        <section className="participation">
            <Content>
                <div className="participation-container">
                    <div className="participation-image-wrapper">
                        <img src="./images/participation_image.png" alt="circulation"/>
                    </div>
                    <div className="participation-description">
                        <h2 className="title participation-title">Участвуйте в реферальной программе - зарабатывайте токены Uroboros</h2>
                        <p className="participation-text">На вашем аккаунте будет комиссия 1.4% + €0.25    с европейских платежей и 2.9% + €0.25 с платежей извне Европы (США и т.д.). 
                        </p>
                    </div>
                </div>
            </Content>
        </section>
    )
}



export default About