import * as React from 'react';
import Button from './Button';

export default {
  title: 'John/Button',
  component: Button,
};

export const BlueButton = () => <Button color={'blue'} />;
BlueButton.story = {
  name: 'BlueButton',
};

export const RedButton = () => <Button color={'red'} />;
RedButton.story = {
  name: 'RedButton',
};
