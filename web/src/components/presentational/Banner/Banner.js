import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './Banner.module.scss';
import { addPhoto } from 'redux/actions/photo';

import aloe from 'assets/img/aloe.jpg';
import apple from 'assets/img/apple.jpeg';
import aystra from 'assets/img/aystra.jpg';
import banana from 'assets/img/banana.jpg';
import bell from 'assets/img/Bell.jpg';
import cucumber from 'assets/img/cucumber.jpg';
import fuxia from 'assets/img/fuxia.jpg';
import georgina from 'assets/img/georgina.jpeg';
import hosta from 'assets/img/Hosta.jpg';
import iris from 'assets/img/iris.jpg';
import lileynik from 'assets/img/lileynik.jpg';
import lilia from 'assets/img/lilia.jpg';
import lomonos from 'assets/img/lomonos.jpg';
import molochai from 'assets/img/molochai.jpg';
import molodilo from 'assets/img/molodilo.jpg';
import pion from 'assets/img/pion.jpg';
import rosa from 'assets/img/rosa.jpg';
import shalphey from 'assets/img/shalphey.jpg';

const keysNames = {
0: 'Алое',
1: 'Яблуко',
2: 'Астра',
3: 'Банан',
4: 'Дзвіночок',
5: 'Огірок',
6: 'Молочай',
7: 'Фуксия',
8: 'Хоста',
9: 'Ірис',
10: 'Лілії',
11: 'Піон',
12: 'Роза',
13: 'Шалфей',
14: 'Молодило',
15: 'Ломонос',
16: 'Георгина',
17: 'Лилейник',
};

const keysPhotos = {
    0: aloe,
    1: apple,
    2: aystra,
    3: banana,
    4: bell,
    5: cucumber,
    6: molochai,
    7: fuxia,
    8: hosta,
    9: iris,
    10: lilia,
    11: pion,
    12: rosa,
    13: shalphey,
    14: molodilo,
    15: lomonos,
    16: georgina,
    17: lileynik,
    };


const Banner = props => {
    const [photo, getPrevPhoto] = useState(null);

    const { data, addPhoto } = props;

    const loadButton = React.createRef();

    const newLoadButtonClick = () => {
      loadButton.current.click();
    };

    const onPhotoSelected = async event => {
      const targetFile = event.target.files[0];
      console.log(targetFile);


      var fReader = new FileReader();
      fReader.readAsDataURL(event.target.files[0]);
      fReader.onloadend = function(event){
        getPrevPhoto(event.target.result);
      }

      
        const newData = {
            photo: targetFile
        };
      addPhoto(newData);
    };

    console.log(keysNames[data[0]]);

    return (
        <div className={styles.container}>
            {data.length === 0 ?(
                <div className={styles.titleBlock}>
                    <h1 className={`${styles.title} ${styles.text}`}>PLANTATOR</h1>
                    <h3 className={`${styles.subtitle} ${styles.text}`}>Найкращий помічник<br/> для твоїх рослин</h3>
                    <button onClick={newLoadButtonClick} className={`${styles.button} ${styles.text}`}>Оберіть фото</button>
                    <div>
                        <input
                          type="file"
                          onChange={onPhotoSelected}
                          style={{ display: 'none' }}
                          ref={loadButton}
                        />
                     </div>
                </div>) : (
                <div className={styles.resBlock}>
                    <h2 className={`${styles.title} ${styles.text}`}>PLANTATOR</h2>
                    <div className={styles.mainPart} >
                        <div className={styles.yourImgDiv}>
                            <h3 className={`${styles.subtitle} ${styles.resText}`}>Ваше фото:</h3>
                            <div>
                                <img src={photo} className={styles.yourImg} alt='YourImage' />
                            </div>
                            
                        </div>
                        <div className={styles.result}>
                            <h2 className={`${styles.subtitle} ${styles.resText}`}>Результат:</h2>
                            <div className={styles.res}> 
                                <div className={styles.resDiv}>
                                    <div className={styles.resItem}>
                                        <img src={keysPhotos[data[0]]} className={styles.resultImage} alt='YourImage' />
                                        <span>{keysNames[data[0]]}</span>
                                    </div>
                                   
                                </div>
                                <h3 className={`${styles.subtitle} ${styles.resText}`}>Можливо:</h3>
                                <div className={styles.resDiv}>
                                    <div className={styles.resItem}>
                                        <img src={keysPhotos[data[1]]} className={styles.resImg} alt='YourImage' />
                                        <span>{keysNames[data[1]]}</span>
                                    </div>
                                    <div className={styles.resItem}>
                                        <img src={keysPhotos[data[2]]} className={styles.resImg} alt='YourImage' />
                                        <span>{keysNames[data[2]]}</span>
                                    </div>
                                    <div className={styles.resItem}>
                                        <img src={keysPhotos[data[3]]} className={styles.resImg} alt='YourImage' />
                                        <span>{keysNames[data[3]]}</span>
                                    </div>
                                    <div className={styles.resItem}>
                                        <img src={keysPhotos[data[4]]} className={styles.resImg} alt='YourImage' />
                                        <span>{keysNames[data[4]]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href='/'>Спробувати ще раз</a>
                </div>)
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
      data: state.photo.data,
    };
  };
  
  export default connect(
    mapStateToProps,
    { addPhoto },
  )(Banner);
  