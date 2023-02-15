import { useFonts } from 'expo-font';

export default function useCustomFonts() {
  let [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins2':require('./assets/fonts/Poppins-Bold.ttf'),
'Poppins3': require('./assets/fonts/Poppins-SemiBold.ttf'),
'Roboto': require('./assets/fonts/Roboto-Regular.ttf')
  });
  return fontsLoaded;
}
