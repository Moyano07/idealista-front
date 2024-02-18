import ImagenCard from "../Image/ImageCard";


const CardQualityAdvertising =  (props) => {

    const element = props.element;
    return (
            <div key={element.id} className="col-md-4 mt-4">
                    <div className="card" style={{width: '18rem', height: '30rem', margin:'0 auto'}}>
                        <ImagenCard pictureUrls={element.pictureUrls}></ImagenCard>
                    <div className="card-body">
                        <div className="row">
                        <h5 className="card-title col-md-6" style={element.score < 40 ? { color: 'red' } : {}}> {element.score}</h5>
                            <h5 className="card-title col-md-6">{element.irrelevantSince}</h5>
                        </div>
                        <h5 className="card-title">{element.typology}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{element.houseSize} m²</h6>
                        <p className="card-text">{element.gardenSize}</p>
                        <p className="card-text">{element.description}</p>
                    </div>
                    </div>
                </div>
    );
}

export default CardQualityAdvertising;