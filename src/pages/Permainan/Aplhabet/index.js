import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Sound from 'react-native-sound';
import {useEffect} from 'react/cjs/react.development';
import {Background} from '../../../assets';
import IcoAlphabet from '../../../components/IcoAlphabet';

const Alphabet = () => {
  let sound_01,
    sound_02,
    sound_03,
    sound_04,
    sound_05,
    sound_06,
    sound_07,
    sound_08,
    sound_09,
    sound_10,
    sound_11,
    sound_12,
    sound_13,
    sound_14,
    sound_15,
    sound_16,
    sound_17,
    sound_18,
    sound_19,
    sound_20,
    sound_21,
    sound_22,
    sound_23,
    sound_24,
    sound_25,
    sound_26;

  useEffect(() => {
    Sound.setCategory('Playback', true); // true = mixWithOthers
    return () => {
      if (sound_01) {
        sound_01.release();
      }
      if (sound_02) {
        sound_02.release();
      }
      if (sound_03) {
        sound_03.release();
      }
      if (sound_04) {
        sound_04.release();
      }
      if (sound_05) {
        sound_05.release();
      }
      if (sound_06) {
        sound_06.release();
      }
      if (sound_07) {
        sound_07.release();
      }
      if (sound_08) {
        sound_08.release();
      }
      if (sound_09) {
        sound_09.release();
      }
      if (sound_10) {
        sound_10.release();
      }
      if (sound_11) {
        sound_11.release();
      }
      if (sound_12) {
        sound_12.release();
      }
      if (sound_13) {
        sound_13.release();
      }
      if (sound_14) {
        sound_14.release();
      }
      if (sound_15) {
        sound_15.release();
      }
      if (sound_16) {
        sound_16.release();
      }
      if (sound_17) {
        sound_17.release();
      }
      if (sound_18) {
        sound_18.release();
      }
      if (sound_19) {
        sound_19.release();
      }
      if (sound_20) {
        sound_20.release();
      }
      if (sound_21) {
        sound_21.release();
      }
      if (sound_22) {
        sound_22.release();
      }
      if (sound_23) {
        sound_23.release();
      }
      if (sound_24) {
        sound_24.release();
      }
      if (sound_25) {
        sound_25.release();
      }
      if (sound_26) {
        sound_26.release();
      }
    };
  }, [
    sound_01,
    sound_02,
    sound_03,
    sound_04,
    sound_05,
    sound_06,
    sound_07,
    sound_08,
    sound_09,
    sound_10,
    sound_11,
    sound_12,
    sound_13,
    sound_14,
    sound_15,
    sound_16,
    sound_17,
    sound_18,
    sound_19,
    sound_20,
    sound_21,
    sound_22,
    sound_23,
    sound_24,
    sound_25,
    sound_26,
  ]);

  const playSound = index => {
    if (index === 0) {
      sound_01 = new Sound(
        require('../../../assets/sounds/alphabet/note_a.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_01.play(() => {
            sound_01.release();
          });
        },
      );
    } else if (index === 1) {
      sound_02 = new Sound(
        require('../../../assets/sounds/alphabet/note_b.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_02.play(() => {
            sound_02.release();
          });
        },
      );
    } else if (index === 2) {
      sound_03 = new Sound(
        require('../../../assets/sounds/alphabet/note_c.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_03.play(() => {
            sound_03.release();
          });
        },
      );
    } else if (index === 3) {
      sound_04 = new Sound(
        require('../../../assets/sounds/alphabet/note_d.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_04.play(() => {
            sound_04.release();
          });
        },
      );
    } else if (index === 4) {
      sound_05 = new Sound(
        require('../../../assets/sounds/alphabet/note_e.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_05.play(() => {
            sound_05.release();
          });
        },
      );
    } else if (index === 5) {
      sound_06 = new Sound(
        require('../../../assets/sounds/alphabet/note_f.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_06.play(() => {
            sound_06.release();
          });
        },
      );
    } else if (index === 6) {
      sound_07 = new Sound(
        require('../../../assets/sounds/alphabet/note_g.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_07.play(() => {
            sound_07.release();
          });
        },
      );
    } else if (index === 7) {
      sound_08 = new Sound(
        require('../../../assets/sounds/alphabet/note_h.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_08.play(() => {
            sound_08.release();
          });
        },
      );
    } else if (index === 8) {
      sound_09 = new Sound(
        require('../../../assets/sounds/alphabet/note_i.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_09.play(() => {
            sound_09.release();
          });
        },
      );
    } else if (index === 9) {
      sound_10 = new Sound(
        require('../../../assets/sounds/alphabet/note_j.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_10.play(() => {
            sound_10.release();
          });
        },
      );
    } else if (index === 10) {
      sound_11 = new Sound(
        require('../../../assets/sounds/alphabet/note_k.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_11.play(() => {
            sound_11.release();
          });
        },
      );
    } else if (index === 11) {
      sound_12 = new Sound(
        require('../../../assets/sounds/alphabet/note_l.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_12.play(() => {
            sound_12.release();
          });
        },
      );
    } else if (index === 12) {
      sound_13 = new Sound(
        require('../../../assets/sounds/alphabet/note_m.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_13.play(() => {
            sound_13.release();
          });
        },
      );
    } else if (index === 13) {
      sound_14 = new Sound(
        require('../../../assets/sounds/alphabet/note_n.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_14.play(() => {
            sound_14.release();
          });
        },
      );
    } else if (index === 14) {
      sound_15 = new Sound(
        require('../../../assets/sounds/alphabet/note_o.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_15.play(() => {
            sound_15.release();
          });
        },
      );
    } else if (index === 15) {
      sound_16 = new Sound(
        require('../../../assets/sounds/alphabet/note_p.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_16.play(() => {
            sound_16.release();
          });
        },
      );
    } else if (index === 16) {
      sound_17 = new Sound(
        require('../../../assets/sounds/alphabet/note_q.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_17.play(() => {
            sound_17.release();
          });
        },
      );
    } else if (index === 17) {
      sound_18 = new Sound(
        require('../../../assets/sounds/alphabet/note_r.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_18.play(() => {
            sound_18.release();
          });
        },
      );
    } else if (index === 18) {
      sound_19 = new Sound(
        require('../../../assets/sounds/alphabet/note_s.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_19.play(() => {
            sound_19.release();
          });
        },
      );
    } else if (index === 19) {
      sound_20 = new Sound(
        require('../../../assets/sounds/alphabet/note_t.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_20.play(() => {
            sound_20.release();
          });
        },
      );
    } else if (index === 20) {
      sound_21 = new Sound(
        require('../../../assets/sounds/alphabet/note_u.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_21.play(() => {
            sound_21.release();
          });
        },
      );
    } else if (index === 21) {
      sound_22 = new Sound(
        require('../../../assets/sounds/alphabet/note_v.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_22.play(() => {
            sound_22.release();
          });
        },
      );
    } else if (index === 22) {
      sound_23 = new Sound(
        require('../../../assets/sounds/alphabet/note_w.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_23.play(() => {
            sound_23.release();
          });
        },
      );
    } else if (index === 23) {
      sound_24 = new Sound(
        require('../../../assets/sounds/alphabet/note_x.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_24.play(() => {
            sound_24.release();
          });
        },
      );
    } else if (index === 24) {
      sound_25 = new Sound(
        require('../../../assets/sounds/alphabet/note_y.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_25.play(() => {
            sound_25.release();
          });
        },
      );
    } else if (index === 25) {
      sound_26 = new Sound(
        require('../../../assets/sounds/alphabet/note_z.mp3'),
        (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound_26.play(() => {
            sound_26.release();
          });
        },
      );
    }
  };

  return (
    <ImageBackground source={Background} style={styles.background}>
      <ScrollView>
        <View style={styles.grup}>
          <IcoAlphabet label="A" onPress={() => playSound(0)} />
          <IcoAlphabet label="B" onPress={() => playSound(1)} />
          <IcoAlphabet label="C" onPress={() => playSound(2)} />
          <IcoAlphabet label="D" onPress={() => playSound(3)} />
        </View>
        <View style={styles.grup}>
          <IcoAlphabet label="E" onPress={() => playSound(4)} />
          <IcoAlphabet label="F" onPress={() => playSound(5)} />
          <IcoAlphabet label="G" onPress={() => playSound(6)} />
          <IcoAlphabet label="H" onPress={() => playSound(7)} />
        </View>
        <View style={styles.grup}>
          <IcoAlphabet label="I" onPress={() => playSound(8)} />
          <IcoAlphabet label="J" onPress={() => playSound(9)} />
          <IcoAlphabet label="K" onPress={() => playSound(10)} />
          <IcoAlphabet label="L" onPress={() => playSound(11)} />
        </View>
        <View style={styles.grup}>
          <IcoAlphabet label="M" onPress={() => playSound(12)} />
          <IcoAlphabet label="N" onPress={() => playSound(13)} />
          <IcoAlphabet label="O" onPress={() => playSound(14)} />
          <IcoAlphabet label="P" onPress={() => playSound(15)} />
        </View>
        <View style={styles.grup}>
          <IcoAlphabet label="Q" onPress={() => playSound(16)} />
          <IcoAlphabet label="R" onPress={() => playSound(17)} />
          <IcoAlphabet label="S" onPress={() => playSound(18)} />
          <IcoAlphabet label="T" onPress={() => playSound(19)} />
        </View>
        <View style={styles.grup}>
          <IcoAlphabet label="U" onPress={() => playSound(20)} />
          <IcoAlphabet label="V" onPress={() => playSound(21)} />
          <IcoAlphabet label="W" onPress={() => playSound(22)} />
          <IcoAlphabet label="X" onPress={() => playSound(23)} />
        </View>
        <View style={styles.grupYZ}>
          <View style={styles.grupY}>
            <IcoAlphabet label="Y" onPress={() => playSound(24)} />
          </View>
          <View style={styles.grupZ}>
            <IcoAlphabet label="Z" onPress={() => playSound(25)} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Alphabet;

const win = Dimensions.get('screen');
const styles = StyleSheet.create({
  background: {
    width: win.width,
    height: 895 * (win.width / 414) - 100, //414 is actual widht of image
  },
  grup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  grupYZ: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  grupY: {
    marginRight: 10,
  },
  grupZ: {
    marginLeft: 10,
  },
});
