import React from 'react';
import './sticky-bar.styles.css';

class StickyBar extends React.Component {
    render(){
        return (
            <div className='sticky-bar'>
                <div className='left-bar'>
                    <button aria-label='Navigation Toggle' className='nav-toggle-button'><i className="fas fa-align-left fa-2x"></i></button>
                   
                </div>
                {/*<div className='center-bar'></div>*/}
                <div className='right-bar'>
                    <div id='fullscreenButtonContainer'></div>
                    <div className='login-section-container'>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
    
}

export default StickyBar;