import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import PillModal from './src/modal/PillModal';

export default function App() {
  return (
    <View className='flex-[1] bg-white pt-8 justyfy-center items-center'>
      <StatusBar style="auto" />
      <PillModal/>
    </View>
  );
}

