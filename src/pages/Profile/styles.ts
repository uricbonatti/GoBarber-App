import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Form } from '@unform/mobile';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px 110px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
  text-align: left;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const AdjustedForm = styled(Form)`
  width: 100%;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  height: 186px;
  width: 186px;
  border-radius: 93px;
  align-self: center;
`;
