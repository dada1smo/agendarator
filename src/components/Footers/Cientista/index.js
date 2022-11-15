import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { colors } from '../../../../styles/styles';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '32mm',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    opacity: 0.3,
  },
  year: {
    fontFamily: 'Inter',
    fontSize: '20pt',
    lineHeight: 1.1,
    fontWeight: 'bold',
    color: colors.black30,
  },
});

function FooterCientista({ year }) {
  return (
    <View style={styles.footer}>
      <Image style={styles.image} src="/images/logoCientista.jpeg" alt="" />
      <Text style={styles.year}>{year}</Text>
    </View>
  );
}

export default FooterCientista;
