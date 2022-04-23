import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#2D2F33',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 36,
    marginLeft: 12,
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});

interface IUserAvatarProps {
  name: string;
  image?: string;
}

function UserAvatar(props: IUserAvatarProps) {
  const {name, image} = props;
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={
          /* istanbul ignore next */
          image ? {uri: image} : require('../../assets/images/default-user.png')
        }
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

export default memo(UserAvatar);
