function Hero(props) {

    console.log(props)
    return (
        <div className="card">
            <div className="card-img-section"> <img src={props.item.cardImage} className="card-img"></img></div>
            <div className="card-text">

              <div className="description"><img src={props.item.location.locationImg} className="location"></img><span className="country">{props.item.location.locationCountry}</span><span className="map"><a href={props.item.location.locationLink} className="map-text">{props.item.location.locationMap}</a></span> </div>  
                <h1>{props.item.cardTextTitle}</h1>
                <h3>{props.item.cardTextSubTitle}</h3>
                <p>{props.item.cardTextParagraph}</p>

            </div>
        </div>
    )
}


export default Hero