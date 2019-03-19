import React from 'react';
import './HomePhotos.css';

const imageUrls = [
  'https://cdn.nba.net/nba-drupal-prod/styles/landscape_1045w/s3/2018-08/leaguev3.jpeg?itok=b1Ef6wg9',
  'https://www.vrandfun.com/wp-content/uploads/2016/10/nba-in-vr-schedule.jpeg',
  'https://s3.amazonaws.com/nikeinc/assets/74326/Nike_NBA_Event_Launch_Group_Photo_hd_1600.jpg?1505546249',
  'http://oregonsportsnews.com/wp-content/uploads/2017/10/NBA.jpg',
  'https://icdn2.digitaltrends.com/image/5-apps-all-nba-basketball-fans-need-on-their-phones-2-720x720.jpg?ver=1.jpg',
  'https://theundefeated.com/wp-content/uploads/2016/10/nba_white.jpg?w=1350',
  'https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2019-02/kenny-anderson-nets-drive-iso.jpg?itok=B9Kt-HpA',
  'https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/bcfu4xdizlj4uear7xwl/kd-paul',
  'https://sa.kapamilya.com/absnews/abscbnnews/media/2018/sports/05/31/nba-finals-players-2018.jpg',
];

const randomArray = [];

const getRandom = list => {
  while (list.length > 0) {
    const randomIndex = Math.floor(Math.random() * list.length);
    console.log(list[randomIndex]);
    randomArray.push(list[randomIndex]);
    list.splice(randomIndex, 1);
    console.log(list);
  }
};

const HomePhotos = () => {
  getRandom(imageUrls);
  return (
    <div className='col-6'>
      {randomArray.map(imageUrl => (
        <img key={imageUrl} src={imageUrl} />
      ))}
    </div>
  );
};

export default HomePhotos;
