import React from 'react';
import PropTypes from 'prop-types';
import AlbumItems from '../AlbumItems';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
    return (
        <ul className='album-list'>
            {albumList.map(album => (
                <li key={album.id}>
                    <AlbumItems album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;