import React from 'react';
import styles from './Main.module.scss';
import plant from 'assets/img/Plantator1.jpg';
import { connect } from 'react-redux';
import { addPhoto } from 'redux/actions/photo';


const Main = props => {

    const { data, addPhoto } = props;

    const loadButton = React.createRef();
    const newLoadButtonClick = () => {
      loadButton.current.click();
    };

    const onPhotoSelected = async event => {
      const targetFile = event.target.files[0];
    const newData = {
        photo: targetFile
      };
      addPhoto(newData);
    };
    return (
        <div className={styles.block}>
            {/* <h2 className={styles.title}>рослини </h2>
        <div className={styles.cardBlock}>
            <div className={styles.text}>
                <span>Природа займає величезне місце в серці кожної людини. Дуже приємно прислухатися до шелесту беріз, милуватися зелененьким листям, яке ледь розпустилося. Прогулюватися по алеї у парку, де ростуть величні дуби. Навіть запахи квітучих рослин здаються нам рідними. Який приємний аромат мають яблуні, бузок та конвалії! Нічого немає рідніше. Отже, природа — найбільший скарб людини. Бережіть її!</span>
            </div>
            <div className={styles.img}>
                <img alt='Plant' src={plant} />
            </div>
        </div>
            <div className={styles.cardAlbum}>
                
            </div> */}
            <button onClick={newLoadButtonClick} className={`${styles.button} ${styles.text}`}>Оберіть фото</button>
                <div>
              <input
                type="file"
                onChange={onPhotoSelected}
                style={{ display: 'none' }}
                ref={loadButton}
              />
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    console.log(state.photo);
    return {
      data: state.photo.data,
    };
  };
  
  export default connect(
    mapStateToProps,
    { addPhoto },
  )(Main);