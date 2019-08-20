import React, { Component } from 'react';

class ListItem extends Component {

    render(props) { 
        const isAnyVideoSelected = this.props.selectedVideo;
        return ( 
            <div className = {isAnyVideoSelected ? "" : "col-md-4"} >
                <div
                    className = "card mb-3 related-videos border-0" 
                    onClick={ () => this.props.handleSelect(this.props.video) }

                >
                    <div   
                        className = "row no-gutters"
                    >
                        <div 
                            className = "col-md-4"   
                        >
                            <img 
                                style={isAnyVideoSelected ? {maxWidth: 200} : {}} 
                                className = "card-img"
                                src={this.props.video.snippet.thumbnails.default.url}
                                alt={this.props.video.snippet.title}    
                            />
                        </div>
                        <div className="col-md-8 d-flex align-items-start">
                            <div className="Card-body ml-2" style={{overflow: "hidden"}}>
                                <p className = {isAnyVideoSelected ? "card-title" : "card-title font-weight-bold"}>{this.props.video.snippet.title}</p>
                                <p className = "card-text">{isAnyVideoSelected ? "" : this.props.video.snippet.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {isAnyVideoSelected ? <hr /> : null}
            </div>
         );
    }
    
}
 
export default ListItem;
