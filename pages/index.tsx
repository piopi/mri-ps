import type { NextPage } from 'next';
import { ColorPicker, Group, Text } from '@mantine/core';
import { useState } from 'react';

const Home: NextPage = () => {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Group position="center" direction="column">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Group>
  );
};

export default Home;
