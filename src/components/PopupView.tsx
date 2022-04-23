import React, {memo} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: 300,
  },
  border: {
    position: 'absolute',
    width: '100%',
    height: 300,
    paddingTop: 18,
    paddingLeft: 12,
    paddingRight: 12,
  },
  shadow: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  mask: {
    height: 240,
    position: 'absolute',
    top: -18,
    left: -12,
    right: -12,
  },
  content: {
    flex: 1,
    paddingTop: 18,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

interface IPopupViewProps {
  children?: React.ReactNode;
}

function PopupView(props: IPopupViewProps) {
  const {children} = props;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.wrapper}>
        <View style={styles.border}>
          <Shadow viewStyle={styles.shadow} sides={['left', 'right', 'top']}>
            <LinearGradient
              style={styles.mask}
              colors={['#FFFFFF00', '#FFFFFFFF']}
            />
          </Shadow>
        </View>
        <View style={styles.content}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default memo(PopupView);
