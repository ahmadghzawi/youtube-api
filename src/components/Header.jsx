import React, { Component } from 'react';

class Header extends Component {

    render() { 
        
        return ( 
            <header className = 'mt-3 d-flex align-items-center justify-content-center'>
                <img 
                    style = {{objectFit: "cover",width: 200,height: 50}}
                    src = "https://cdn2.hercampus.com/styles/hcxo_standard_large/s3/hero-images/2019/02/28/Youtube-Logo-Icon-Vector.jpg?timestamp=1551382060"
                    alt = "youtube logo"    
                />
            </header>
         );
    }
    
}
 
export default Header;