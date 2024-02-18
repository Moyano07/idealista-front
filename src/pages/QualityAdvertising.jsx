import { useLoaderData } from "react-router-dom";
import CardQualityAdvertising from "../components/CardQualityAdvertising/CardQualityAdvertising";

const QualityAdvertising = () => {
    const {data} = useLoaderData();

    return (
        <div className="container">
                <div className="row">
            {data.length > 0 ? (data.map((element) =>(
                
                <CardQualityAdvertising element={element}/>
                
            ) )
            ) : <h3> No Advertising found</h3>
            
            }
               </div>
        </div>
    );

}

export default QualityAdvertising;
