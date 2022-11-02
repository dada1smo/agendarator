import { Text, View, Image, StyleSheet, Font } from '@react-pdf/renderer';
import { colors } from '../../../styles/styles';

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: '5mm',
    left: 0,
    height: '165mm',
    width: '118mm',
  },
  header: {
    marginTop: '54mm',
    marginLeft: '24mm',
  },
  year: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '128pt',
    lineHeight: 1,
    color: colors.black30,
    textAlign: 'center',
  },
  agenda: {
    fontFamily: 'Learning Curve',
    fontSize: '60pt',
    lineHeight: 1.2,
    color: colors.black60,
    textAlign: 'center',
  },
});

function MonthCover({ month, index }) {
  return (
    <View>
      <Image style={styles.image} src="/images/cover.jpg" alt="" />
      <View style={styles.header}>
        <Text style={styles.year}>
          {index < 9 ? `0${index + 1}` : `${index + 1}`}
        </Text>
        <Text style={styles.agenda}>{month}</Text>
      </View>
    </View>
  );
}

export default MonthCover;
