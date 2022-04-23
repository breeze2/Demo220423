import React, {memo} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import LeftArrow from '../assets/icons/left-arrow.svg';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 48,
  },
  title: {
    color: '#2D2F33',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 48,
    textAlign: 'center',
  },
  back: {
    position: 'absolute',
    top: 6,
    left: 12,
  },
});

interface IHeaderProps {
  title: string;
  returnable?: boolean;
}

function Header(props: IHeaderProps) {
  const {title, returnable} = props;
  return (
    <View style={styles.wrapper}>
      {returnable && (
        <TouchableHighlight>
          <LeftArrow style={styles.back} width={36} height={36} />
        </TouchableHighlight>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default memo(Header);
