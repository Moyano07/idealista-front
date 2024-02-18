
import Navbar from '../Navbar/Navbar';

const Header = () => {
    
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-7'>
                        <figure >
                            <a href="/"> <img alt="idealista" src="https://st3.idealista.com/static/common/img/idealista.svg" title="idealista"/></a>
                        </figure>
                    </div>
                    <Navbar></Navbar>
                 </div>
            </div>
        </>
    );
}

export default Header;