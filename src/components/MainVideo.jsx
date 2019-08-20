import React, { Component } from 'react';

class MainVideo extends Component {

    render(props) {
        if(!this.props.selectedVideo) {
            return null
        }

        const link = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}` 
        return ( 
            <div className = "col-md-7">
                <div >
                    <iframe
                        allowFullScreen
                        style={{width: "100%", height: 500}}  
                        src={link} 
                        title={this.props.selectedVideo.snippet.title}
                    />
                </div>
                <div>
                    <h5 className = 'font-weight-bold'>{this.props.selectedVideo.snippet.title}</h5>
                    <p>{this.props.selectedVideo.snippet.description}</p>
                </div>
            </div>
         );
    }
    
}
 
export default MainVideo;