const selectSong = (song) => {//Action Creator

    return {//Action
        type: 'SONG_SELECTED',
        payload: song
    };
};

export default selectSong;