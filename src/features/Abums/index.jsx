import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Ký ức',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/f/8/bff88f5ab647e1f2242067b24df02f2a.jpg'
        },
        {
            id: 2,
            name: 'Lofi chill gây nghiện',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg'
        },
        {
            id: 3,
            name: 'Bình yên bên nhau thôi',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/d/c/b/cdcba8f6026e4e90e33f2d4d4604d515.jpg'
        },
        {
            id: 4,
            name: 'Giai điệu chữa lành',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg'
        },
        {
            id: 5,
            name: 'Vpod',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/2/9/e/d29e2bf9f6601a2ff93dbd5d011d8321.jpg'
        }
    ]
    return (
        <div>
            <h1>List albumList</h1>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;