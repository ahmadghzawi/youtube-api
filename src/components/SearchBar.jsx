import React, { Component } from 'react';

class SearchBar extends Component {

    render(props) { 
        return ( 
            <div className='row mt-5 mb-3'>
                <div className="col-md-2"></div>
                <div className="col-md-8 input-group mb-3">
                    <input
                        type = 'text'
                        ref = {text => this.toProcessText = text}
                        className = 'form-control'
                        placeholder = 'Search for videos...'
                        onKeyDown = {event => {
                            if (event.key === 'Enter'){
                                const textToSend = event.target.value;
                                event.target.value = '';
                                this.props.handleText(textToSend)
                            }
                        }}
                    />
                    <div className = 'input-group-append'>
                        <button 
                            className = 'btn btn-danger'
                            onClick={() => {
                                const textToSend = this.toProcessText.value;
                                this.toProcessText.value= '';
                                this.props.handleText(textToSend)}
                                
                            }    
                        >
                            <i className = 'fa fa-search'></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
}
 
export default SearchBar;