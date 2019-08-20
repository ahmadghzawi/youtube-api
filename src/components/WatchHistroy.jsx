import React, { Component } from 'react';
import ListItem from './ListItem';

class WatchHistory extends Component {

    state = {
        toggleHistory : false
    }

    handleHistory = (toggleHistory) => {
        this.setState({toggleHistory: !toggleHistory})
    }

    render(props) {

        const items = this.props.watchedVideos.map(video =>  
            <ListItem 
                selectedVideo={this.props.selectedVideo}
                handleSelect={this.props.handleSelect}
                key={video.etag}
                video={video}
            />
        )
        return (
            <div className = 'col-md-2 toggle-history'>
                <button 
                    style={{width: "75%"}}
                    className="toggle-history"
                    onClick={() => this.handleHistory(this.state.toggleHistory)}
                >
                    <h4 style={{float: "left"}}>Watch History</h4>
                    {this.state.toggleHistory ? 
                        <i className="fa fa-sort-up" style={{float: "right", fontSize: 25}}></i> : 
                        <i className="fa fa-sort-down" style={{float: "right", fontSize: 25}}></i> 
                    }
                </button>
                <div style = {{ maxHeight: 700, overflow: "auto"}}>
                    {this.state.toggleHistory ? items : null}
                </div>
            </div>
        )
    }

}
 
export default WatchHistory;