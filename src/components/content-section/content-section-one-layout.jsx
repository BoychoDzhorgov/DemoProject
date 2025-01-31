import "./content-section-one-layout.scss"

export default function ContentSectionOneLayout() {
    return (
        <div className="content-section-one-layout">
            <div className="content-section-one-layout__title-container">
            <h2 className="content-section-one-layout__title-container__title"><span className="content-section-one-layout__title-container__title__decoration">Здрави и Красиви</span> Крака</h2>
            <p className="content-section-one-layout__title-container__subtitle"> Резултатът настъпва след преминаване на пълноценен курс на употреба</p>
            </div>
            <div className="content-section-one-layout__grid-wrapper">
                <div className="content-section-one-layout__grid-wrapper__grid">
                        <p className="content-section-one-layout__grid-wrapper__grid__tick"><span className="content-section-one-layout__grid-wrapper__grid__description">Освобождава</span> от видимите сиптоми на варикоза</p>
                        <p className="content-section-one-layout__grid-wrapper__grid__tick"><span className="content-section-one-layout__grid-wrapper__grid__description">Предотвратява</span> прогресирането на варикозата</p>
                        <p className="content-section-one-layout__grid-wrapper__grid__tick"><span className="content-section-one-layout__grid-wrapper__grid__description">Премахва</span> болката и тежестта в краата</p>
                        <p className="content-section-one-layout__grid-wrapper__grid__tick"> Съдържа <span className="content-section-one-layout__grid-wrapper__grid__description">безопасни</span> и натурални съставки</p>
                </div>
            </div> 
            <div className="content-section-one-layout__order">
                        <p className="content-section-one-layout__order__old-price">Стара цена: 150лв</p>
                        <p className="content-section-one-layout__order__new-price">Нова Цена:75лв</p>
                        <button className="content-section-one-layout__order__btn">Поръчай</button>
                </div>
        </div>
    )
}