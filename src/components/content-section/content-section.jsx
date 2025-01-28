import Image1 from "../../static/images/img4-1.jpg"
import Image2 from "../../static/images/img4-2.jpg"
import Image3 from "../../static/images/img4-3.jpg"
import Image4 from "../../static/images/img4-4.jpg"
import Image5 from "../../static/images/img4-5.jpg"
import Image6 from "../../static/images/img4-6.jpg"
import "./content-section.scss"

export default function ContentSection() {
    return (
        <div className="content-section">
            <h2 className="content-section__title">Рискови фактори за развитие на верикозно разширени вени:</h2>
            <div className="content-section__grid-wrapper">
                <div className="content-section__grid-wrapper__grid">
                    <img src={Image1} />
                    <img src={Image2} />
                    <img src={Image3} />
                    <img src={Image4} />
                    <img src={Image5} />
                    <img src={Image6} />
                </div>
            </div> 
        </div>
    )
}