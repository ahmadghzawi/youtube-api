import React, { Component } from 'react';
import ListItem from './ListItem';

class ListOfRelatedVideos extends Component {

    render(props) {
        let items = this.props.videos
        let index = items.indexOf(this.props.selectedVideo)
        items.splice(index, 1)
        
        const itemsToRender = items.map((video, index) => {
            if(index < 10) {
                return (
                    <ListItem 
                        selectedVideo={this.props.selectedVideo}
                        handleSelect={this.props.handleSelect}
                        key={video.etag}
                        video={video}
                    />
                )
            }
            return null   
        })
        items.splice(index, 0, this.props.selectedVideo)

        return (
            <div className = 'col-md-3'>
                <h4>Realated Videos</h4>
                <div style = {{ maxHeight: 700, overflow: "auto"}}>
                    {itemsToRender}
                </div>
            </div>
        )
    }

}
 
export default ListOfRelatedVideos;