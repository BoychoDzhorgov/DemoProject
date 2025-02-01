import "./content-section-one-layout.scss"
import Product from "../../static/images/prod.png"

export default function ContentSectionOneLayout() {
    return (
        <div className="content-section-one-layout">
            <div className="content-section-one-layout__left-container">
                <h2 className="content-section-one-layout__left-container__title">
                    <span className="content-section-one-layout__title-container__title__decoration">Здрави и Красиви</span> Крака
                </h2>
                <p className="content-section-one-layout__left-container__subtitle"> Резултатът настъпва след преминаване на пълноценен курс на употреба</p>
                <div className="content-section-one-layout__left-container__text-container">
                    <div className="content-section-one-layout__left-container__text-container__text">
                        <p className="content-section-one-layout__left-container__text-container__text__tick">
                            <span className="content-section-one-layout__left-container__text-container__text__description">Освобождава</span> от видимите сиптоми на варикоза
                        </p>
                        <p className="content-section-one-layout__left-container__text-container__text__tick">
                            <span className="content-section-one-layout__left-container__text-container__text__description">Предотвратява</span> прогресирането на варикозата
                        </p>
                        <p className="content-section-one-layout__left-container__text-container__text__tick">
                            <span className="content-section-one-layout__left-container__text-container__text__description">Премахва</span> болката и тежестта в краката
                        </p>
                        <p className="content-section-one-layout__left-container__text-container__text__tick"> Съдържа
                            <span className="content-section-one-layout__left-container__text-container__text__description">безопасни</span> и натурални съставки
                        </p>
                    </div>
                </div> 
            </div>
            <div className="content-section-one-layout__order">
                <div className="content-section-one-layout__order__old-price">Стара цена: 150лв</div>
                <div className="content-section-one-layout__order__new-price">Нова Цена: 75лв</div>
                <button className="content-section-one-layout__order__btn">Поръчай</button>
            </div>
            <div className="content-section-one-layout__product-image">
                <img src={Product} />
                <div className="content-section-one-layout__product-image__sale">
                    <p className="content-section-one-layout__product-image__sale__text">50% Отстъпка</p>
                </div>
                <div className="content-section-one-layout__product-image__product"></div>
                <div className="content-section-one-layout__product-image__leaf"></div>
            </div>
        </div>
    )
}