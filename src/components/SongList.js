import React from 'react';
import {connect} from 'react-redux';
import selectSong from '../actions';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {//get and pam songs from STATE
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}> Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui devided list">{this.renderList()}</div>
        )
    }

}

const getMyStore = (state) => {//get State and pass it to the CONNECT function->now we have a access to entire STORE(STATE)          
    return { songs: state.songs };
}  

export default connect(getMyStore, {selectSong})(SongList);//connect(getMyStore, {imported action creator})(and name of this class)
