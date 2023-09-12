import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
AlbumItems.propTypes = {
    album: PropTypes.object.isRequired,
};

function AlbumItems({ album }) {
    return (
        <div className='album'>
            <div className='album_img'>
                <img src={album.img} alt={album.name} />
            </div>
            <p className='album_name'>{album.name}</p>
            <button>Click để nghe</button>
        </div>
    );
}

export default AlbumItems;