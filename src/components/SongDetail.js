import React from 'react';
import {connect} from 'react-redux';

const songDetail = (props) => {//get props(STATE) from getMyStore
    if(!props.selectedSong) {//if no props return some predefine JSX
        return <div>Select Some Song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {props.selectedSong.title}</p>
            <p>Duration: {props.selectedSong.duration}</p>
        </div>
    )
}

const getMyStore = (state) => {
    return {selectedSong: state.selectedSong}//we call to the specyfic place in STORE object
};
        

export default connect(getMyStore)(songDetail);