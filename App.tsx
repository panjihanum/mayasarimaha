import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Animated,
  BackHandler,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const ViewAnimation = props => {
  const {isFadeIn, delay = 0, duration = 1000, style} = props;
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isFadeIn) {
      setTimeout(() => {
        fadeIn();
      }, delay);
    } else {
      fadeOut();
    }
  }, [isFadeIn]);

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      {...props}
      style={[
        {
          opacity: fadeAnimation,
        },
        style,
      ]}
    />
  );
};

const UcapanPertama = props => {
  const {isVisible} = props;
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHide(!isVisible);
    }, 1000);
  }, [isVisible]);

  return (
    <View style={[{flex: 1}, isHide && {display: 'none'}]}>
      <ViewAnimation isFadeIn={isVisible} duration={1000}>
        <Image
          source={require('./src/assets/images/background_ultah.jpg')}
          style={styles.backgroundHeader}
        />
      </ViewAnimation>
      <View style={styles.nameMayaWrapper}>
        <ViewAnimation
          isFadeIn={isVisible}
          delay={1000}
          duration={1000}
          style={styles.nameMayaBox}>
          <Text style={styles.nameMaya}>Mayasari Maha</Text>
        </ViewAnimation>
      </View>
      <View style={{marginTop: 50}}>
        <ViewAnimation isFadeIn={isVisible} duration={1000} delay={3000}>
          <Image
            source={require('./src/assets/images/flower.png')}
            style={styles.flowerMayaImageLeft}
          />
        </ViewAnimation>
        <ViewAnimation isFadeIn={isVisible} duration={1000} delay={2000}>
          <Image
            source={require('./src/assets/images/mayasari.jpeg')}
            style={styles.mayaImage}
          />
        </ViewAnimation>
        <ViewAnimation isFadeIn={isVisible} duration={1000} delay={3000}>
          <Image
            source={require('./src/assets/images/flower.png')}
            style={styles.flowerMayaImageRight}
          />
        </ViewAnimation>
      </View>
    </View>
  );
};

const UcapanKedua = props => {
  const {isVisible: _isVisible} = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(false);

  useEffect(() => {
    if (_isVisible) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisibleAnimation(true);
      }, 2000);
    } else {
      setIsVisibleAnimation(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
  }, [_isVisible]);

  return (
    <View style={[styles.containerInMiddle, !isVisible && {display: 'none'}]}>
      <ViewAnimation isFadeIn={isVisibleAnimation}>
        <Text style={styles.haiCantikText}>Hai Cantik</Text>
      </ViewAnimation>
      <ViewAnimation isFadeIn={isVisibleAnimation} delay={1000}>
        <Text style={styles.barakallahText}>Barakallah fii umrik</Text>
      </ViewAnimation>
      <ViewAnimation isFadeIn={isVisibleAnimation} delay={2000}>
        <View style={styles.rowBetween}>
          <Text style={styles.kutip}>``</Text>
          <Text style={styles.kutip}>``</Text>
        </View>
        <Text style={styles.ucapanUltah}>
          Semoga kamu menjadi pribadi yang jauh lebih baik.{'\n'}Semoga kamu
          selalu bahagia.{'\n'}Dan sukses selalu, serta tercapai semua cita-cita
          kamu.
        </Text>
        <View style={styles.rowBetween}>
          <Text style={styles.kutip}>``</Text>
          <Text style={styles.kutip}>``</Text>
        </View>
        <View style={{marginBottom: 200}} />
      </ViewAnimation>
    </View>
  );
};

const UcapanKetiga = props => {
  const {isVisible: _isVisible} = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(false);
  useEffect(() => {
    if (_isVisible) {
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      setTimeout(() => {
        setIsVisibleAnimation(true);
      }, 2000);
    } else {
      setIsVisibleAnimation(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
  }, [_isVisible]);
  return (
    <View style={[styles.containerInMiddle, !isVisible && {display: 'none'}]}>
      <ViewAnimation isFadeIn={isVisibleAnimation}>
        <Text style={styles.haiCantikText}>Selamat Ulang Tahun, Cantik</Text>
        <ViewAnimation isFadeIn={isVisible} duration={1000} delay={2000}>
          <Image
            source={require('./src/assets/images/mayasari.jpeg')}
            style={[styles.mayaImage, {top: 0, marginBottom: 15}]}
          />
        </ViewAnimation>
        <ViewAnimation isFadeIn={isVisible} delay={5000}>
          <Text style={styles.haiCantikText}>Kuucapkan Untukmu</Text>
        </ViewAnimation>
        <ViewAnimation isFadeIn={isVisible} delay={10000}>
          <Text style={[styles.haiCantikText, {fontSize: 12}]}>
            Btw,{'\n'}Tunggu Lagu nya Kelar ya {'\n'}Sambil lihat bidadari :p
          </Text>
        </ViewAnimation>
      </ViewAnimation>
    </View>
  );
};

const UcapanKeempat = (props: any) => {
  const {isVisible: _isVisible, onChangeToFive} = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(false);
  const [isFire, setIsFire] = useState(false);
  useEffect(() => {
    if (_isVisible) {
      setTimeout(() => {
        setIsFire(true);
        setIsVisible(true);
      }, 1000);
      setTimeout(() => {
        setIsVisibleAnimation(true);
      }, 2000);
    } else {
      setTimeout(() => {
        setIsFire(false);
        setIsVisible(false);
      }, 1000);
      setIsVisibleAnimation(false);
    }
    let whoosh: any;
    if (_isVisible) {
      whoosh = new Sound('tiuplilin.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // Play the sound with an onEnd callback
        whoosh.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      });
    }
    return () => whoosh && whoosh.setVolume(0);
  }, [_isVisible]);

  const handleFire = () => {
    setIsFire(false);
    setTimeout(() => {
      onChangeToFive();
    }, 4000);
  };
  return (
    <View style={[{flex: 1}, !isVisible && {display: 'none'}]}>
      <ViewAnimation isFadeIn={isVisibleAnimation} delay={2000}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Beautiful',
            textAlign: 'center',
            padding: 50,
          }}>
          Api nya ga bisa ditiup hihi, {'\n'}Klik Api nya ya, ga panas kok{' '}
          {'\n'}:p
        </Text>
      </ViewAnimation>
      <ViewAnimation
        isFadeIn={isVisibleAnimation}
        style={{
          position: 'absolute',
          bottom: 0,
          width,
          height: 150,
          backgroundColor: '#E3DEDE',
        }}
      />
      <ViewAnimation
        isFadeIn={isVisibleAnimation}
        style={{position: 'absolute', bottom: -20, left: -40}}
        delay={1000}>
        <Image
          source={require('./src/assets/images/kue.png')}
          style={{
            width: 500,
            height: 500,
          }}
        />
        <TouchableOpacity
          style={[
            {
              position: 'absolute',
              bottom: 395,
              left: 232,
              flexDirection: 'row',
            },
          ]}
          onPress={() => handleFire()}>
          <ViewAnimation isFadeIn={isFire} delay={2000}>
            <LottieView
              source={require('./src/assets/lottie/fire.json')}
              autoPlay
              loop
              style={{
                width: 40,
                height: 40,
              }}
            />
            <LottieView
              source={require('./src/assets/lottie/fire.json')}
              autoPlay
              loop
              style={{
                width: 40,
                height: 40,
                top: -18,
                left: 10,
              }}
            />
          </ViewAnimation>
        </TouchableOpacity>
      </ViewAnimation>
    </View>
  );
};

const UcapanKelima = (props: any) => {
  const {isVisible: _isVisible, onChangeToFive} = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(false);

  useEffect(() => {
    if (_isVisible) {
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      setTimeout(() => {
        setIsVisibleAnimation(true);
      }, 2000);
    }
  }, [_isVisible]);
  return (
    <ViewAnimation
      isFadeIn={isVisibleAnimation}
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 150,
        },
        !isVisible && {display: 'none'},
      ]}>
      <Text style={[styles.ucapanUltah, {fontSize: 20}]}>
        Cie udah niup lilinnya {'\n'}Eh Klik api lilinnya haha{'\n'}
      </Text>
      <Text style={[styles.ucapanUltah, {fontSize: 14}]}>
        But {'\n'}
        Makasih yak
      </Text>
      <Text style={[styles.ucapanUltah, {fontSize: 12}]}>
        Klik dibawah ini untuk balas sama-sama
      </Text>
      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: '#552423',
          borderRadius: 15,
        }}
        onPress={() => BackHandler.exitApp()}>
        <Text style={{color: '#FFFFFF', fontSize: 14}}>Sama-Sama</Text>
      </TouchableOpacity>
    </ViewAnimation>
  );
};

const integerToTime = (t: number) => {
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((t % (1000 * 60)) / 1000);
  return `${days >= 10 ? days : `0${days}`}:${
    hours >= 10 ? hours : `0${hours}`
  }:${mins >= 10 ? mins : `0${mins}`}:${secs >= 10 ? secs : `0${secs}`}`;
};

const App = () => {
  const [dateBirthday] = useState(new Date('2021-09-06'));
  dateBirthday.setHours(0);
  const [section, setSection] = useState('ucapan-pertama');
  const [remainingTime, setRemainingTime] = useState('00:00:00');
  let dateNow = new Date();
  const [isDateBirth, setIsDateBirth] = useState(
    dateBirthday.getTime() - dateNow.getTime() < 0,
  );

  useEffect(() => {
    let whoosh: any;
    let interval: any;
    if (isDateBirth) {
      whoosh = new Sound('ulangtahun.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // Play the sound with an onEnd callback
        whoosh.play((success: any) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      });
    } else {
      interval = setInterval(() => {
        dateNow = new Date();
        let _remainingTime = dateBirthday.getTime() - dateNow.getTime();
        if (_remainingTime < 0) {
          !isDateBirth && setIsDateBirth(true);
          interval && clearInterval(interval);
        }
        setRemainingTime(integerToTime(_remainingTime));
        _remainingTime = _remainingTime - 1;
      }, 1000);
      interval;
    }
    return () => {
      whoosh && whoosh.setVolume(0);
      interval && clearInterval(interval);
    };
  }, [isDateBirth]);

  useEffect(() => {
    if (isDateBirth && section === 'ucapan-pertama') {
      setTimeout(() => {
        setSection('ucapan-kedua');
      }, 12000);
    } else if (isDateBirth && section === 'ucapan-kedua') {
      setTimeout(() => {
        setSection('ucapan-ketiga');
      }, 13000);
    } else if (isDateBirth && section === 'ucapan-ketiga') {
      setTimeout(() => {
        setSection('ucapan-keempat');
      }, 30000);
    }
  }, [section, isDateBirth]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      {isDateBirth ? (
        <ScrollView
          contentContainerStyle={styles.containerScrollView}
          contentInsetAdjustmentBehavior="automatic">
          <UcapanPertama isVisible={section === 'ucapan-pertama'} />
          <UcapanKedua isVisible={section === 'ucapan-kedua'} />
          <UcapanKetiga isVisible={section === 'ucapan-ketiga'} />
          <UcapanKeempat
            isVisible={section === 'ucapan-keempat'}
            onChangeToFive={() => setSection('ucapan-kelima')}
          />
          <UcapanKelima isVisible={section === 'ucapan-kelima'} />
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Beautiful',
              color: '#552423',
              marginBottom: 50,
            }}>
            Tunggu Bentar Yaak
          </Text>
          <Text
            style={{
              fontSize: 40,
              color: '#552423',
            }}>
            {remainingTime}
          </Text>
        </View>
      )}

      <Image
        source={require('./src/assets/images/dried-flower-png.png')}
        style={[
          styles.backgroundBottom,
          section === 'ucapan-keempat' && {display: 'none'},
        ]}
      />
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  haiCantikText: {
    fontSize: 20,
    color: '#16141A',
    fontFamily: 'Beautiful',
    marginBottom: 15,
    textAlign: 'center',
  },
  barakallahText: {
    fontSize: 24,
    color: '#16141A',
    fontFamily: 'Cassandra',
    marginBottom: 100,
  },
  ucapanUltah: {
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
    fontFamily: 'Beautiful',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 120,
  },
  kutip: {
    fontSize: 20,
  },
  backgroundBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 94,
    height: 217,
  },
  flowerMayaImageLeft: {
    position: 'absolute',
    top: -20,
    left: 50,
    width: 120,
    height: 110,
    transform: [
      {
        rotate: '-25deg',
      },
    ],
  },
  flowerMayaImageRight: {
    position: 'absolute',
    width: 120,
    height: 110,
    bottom: -120,
    right: 50,
    transform: [
      {
        rotate: '155deg',
      },
    ],
  },
  mayaImage: {
    width: 167,
    height: 201.5,
    borderRadius: 80,
    alignSelf: 'center',
    top: 50,
  },
  nameMayaWrapper: {
    position: 'absolute',
    width,
    top: 195,
    alignItems: 'center',
  },
  nameMayaBox: {
    paddingHorizontal: 35,
    paddingVertical: 5,
    borderRadius: 35,
  },
  nameMaya: {
    fontSize: 25,
    fontFamily: 'Beautiful',
  },
  backgroundHeader: {
    width: width,
    height: 286,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerScrollView: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  containerInMiddle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  selamatUltah: {
    fontSize: 16,
  },
});

export default App;
