import {useLoaderData} from 'react-router-dom'
import CardPublicAdvertising from '../components/CardPublicAdvertising/CardPublicAdvertising';

const AdvertisingAll = () => {
    const {data} = useLoaderData();

    return (
        
        <div className="container">
                <div className="row">
            {data.length > 0 ? (data.map((element) =>(
                
                <CardPublicAdvertising element={element}/>
                
            ) )
            ) : <h3> No Advertising found</h3>
            
            }
               </div>
        </div>
    );

}

export default AdvertisingAll;
