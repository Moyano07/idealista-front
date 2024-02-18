import emptyImagen from "../../assets/empty.png";
import CarouselCard from "../CarouselCard/CarouselCard";
const ImagenCard = (props) => {
    const pictureUrls = props.pictureUrls;
    return (
        <>
            {
  pictureUrls.length < 1 ? (
    <img src={emptyImagen} style={{ width: '100%', height: '220px' }} />
  ) : null
}
{
  pictureUrls.length === 1 ? (
    <img src={pictureUrls[0]} style={{ width: '100%', height: '220px' }} />
  ) : null
}
{
  pictureUrls.length > 1 ? (
    <CarouselCard pictureUrls={pictureUrls}/>
  ) : null
}
            
        </>
    );
}


export default ImagenCard;