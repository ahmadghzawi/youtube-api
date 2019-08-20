import React, { Component } from 'react';
import ListItem from './ListItem';

class SearchResults extends Component {

    render(props) { 
        if(this.props.videos.length === 0) {
            return <div></div>
        } 

        const items = this.props.videos.map(video => 
            <ListItem 
                selectedVideo={this.props.selectedVideo}
                handleSelect={this.props.handleSelect}
                key={video.etag}
                video={video}
            />
        )
        return (
            <div>
                <h4>Search Results</h4>
                <div 
                    
                    className = "row "    
                >
                    {items}
                </div>
            </div>
        )
    }

}
 
export default SearchResults;