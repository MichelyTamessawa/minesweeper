import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import params from '../params';
import Flag from './Flag';
import Mine from './Mine';

export default props => {
  const {mined, opened, nearMines, exploded, flagged} = props;
  const styleField = [styles.field];

  if (opened) {
    styleField.push(styles.opened);
  }

  if (exploded) {
    styleField.push(styles.exploded);
  }

  if (flagged) {
    styleField.push(styles.flagged);
  }

  if (!opened && !exploded) {
    styleField.push(styles.regular);
  }

  let color = null;

  switch (nearMines) {
    case 1:
      color = '#2A28D7';
      break;
    case 2:
      color = '#2B520F';
      break;
    case 3:
      color = '#F9060A';
      break;
    case 4:
      color = '#F9060A';
      break;
    case 5:
      color = '#F9060A';
      break;
    case 6:
      color = '#F221A9';
      break;
    case 7:
      color = '#F221A9';
      break;
    case 8:
      color = '#F221A9';
      break;
  }

  return (
    <TouchableWithoutFeedback
      onPress={props.onOpen}
      onLongPress={props.onSelect}>
      <SafeAreaView style={styleField}>
        {!mined && opened && nearMines > 0 ? (
          <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
        ) : (
          false
        )}

        {mined && opened ? <Mine /> : false}

        {flagged && !opened ? <Flag /> : false}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});
