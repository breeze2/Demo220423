import React, {memo} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

interface IShadowViewProps {
  children: React.ReactNode;
  distance: number;
  style?: StyleProp<ViewStyle>;
}

function ShadowView(props: IShadowViewProps) {
  const {children, distance, style} = props;
  return distance > 0 ? (
    <Shadow viewStyle={style} distance={distance} safeRender={true}>
      {children}
    </Shadow>
  ) : (
    <View style={style}>{children}</View>
  );
}

export default memo(ShadowView);
