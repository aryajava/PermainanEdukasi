import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IcoAlphabetA,
  IcoAlphabetB,
  IcoAlphabetC,
  IcoAlphabetD,
  IcoAlphabetE,
  IcoAlphabetF,
  IcoAlphabetG,
  IcoAlphabetH,
  IcoAlphabetI,
  IcoAlphabetJ,
  IcoAlphabetK,
  IcoAlphabetL,
  IcoAlphabetM,
  IcoAlphabetN,
  IcoAlphabetO,
  IcoAlphabetP,
  IcoAlphabetQ,
  IcoAlphabetR,
  IcoAlphabetS,
  IcoAlphabetT,
  IcoAlphabetU,
  IcoAlphabetV,
  IcoAlphabetW,
  IcoAlphabetX,
  IcoAlphabetY,
  IcoAlphabetZ,
} from '../../assets';
import {WARNA_UNGGU} from '../../utils/constant';

const IcoAlphabet = ({label, onPress}) => {
  const Icon = () => {
    if (label === 'A') {
      return <IcoAlphabetA />;
    }
    if (label === 'B') {
      return <IcoAlphabetB />;
    }
    if (label === 'C') {
      return <IcoAlphabetC />;
    }
    if (label === 'D') {
      return <IcoAlphabetD />;
    }
    if (label === 'E') {
      return <IcoAlphabetE />;
    }
    if (label === 'D') {
      return <IcoAlphabetD />;
    }
    if (label === 'F') {
      return <IcoAlphabetF />;
    }
    if (label === 'G') {
      return <IcoAlphabetG />;
    }
    if (label === 'H') {
      return <IcoAlphabetH />;
    }
    if (label === 'I') {
      return <IcoAlphabetI />;
    }
    if (label === 'J') {
      return <IcoAlphabetJ />;
    }
    if (label === 'K') {
      return <IcoAlphabetK />;
    }
    if (label === 'L') {
      return <IcoAlphabetL />;
    }
    if (label === 'M') {
      return <IcoAlphabetM />;
    }
    if (label === 'N') {
      return <IcoAlphabetN />;
    }
    if (label === 'O') {
      return <IcoAlphabetO />;
    }
    if (label === 'P') {
      return <IcoAlphabetP />;
    }
    if (label === 'Q') {
      return <IcoAlphabetQ />;
    }
    if (label === 'R') {
      return <IcoAlphabetR />;
    }
    if (label === 'S') {
      return <IcoAlphabetS />;
    }
    if (label === 'T') {
      return <IcoAlphabetT />;
    }
    if (label === 'U') {
      return <IcoAlphabetU />;
    }
    if (label === 'V') {
      return <IcoAlphabetV />;
    }
    if (label === 'W') {
      return <IcoAlphabetW />;
    }
    if (label === 'X') {
      return <IcoAlphabetX />;
    }
    if (label === 'Y') {
      return <IcoAlphabetY />;
    }
    if (label === 'Z') {
      return <IcoAlphabetZ />;
    }
    return <IcoAlphabetA />;
  };
  return (
    <View style={styles.pilihhan}>
      <TouchableOpacity onPress={onPress}>
        <Icon />
      </TouchableOpacity>
    </View>
  );
};

export default IcoAlphabet;

const styles = StyleSheet.create({
  pilihhan: {
    width: 75,
    height: 75,
    backgroundColor: WARNA_UNGGU,
    borderRadius: 13,
    elevation: 6,
  },
});
