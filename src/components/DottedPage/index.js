import { Image, StyleSheet, View } from '@react-pdf/renderer';
import Dots from '../Dots';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '32mm',
    width: '20mm',
  },
});

const DottedPage = () => {
  return (
    <View style={{ position: 'relative', height: '100%' }}>
      <Dots columns={24} dots={32} height="188mm" padding="0 0 0 0" />
      <Image style={styles.footer} src="/images/flower4.jpg" alt="" />
    </View>
  );
};

export default DottedPage;
