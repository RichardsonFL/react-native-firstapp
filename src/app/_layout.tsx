import { Slot, SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const fontLoaded = true;
  if(fontLoaded) SplashScreen.hideAsync();
  
  return fontLoaded && <Slot />;
}
