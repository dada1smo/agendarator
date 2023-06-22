import { Text, View, Image, StyleSheet, Font } from '@react-pdf/renderer';
import { colors } from '../../../styles/styles';

const stylesA5 = StyleSheet.create({
  image: {
    position: 'absolute',
    top: '5mm',
    left: 0,
    height: '165mm',
    width: '118mm',
  },
  header: {
    marginTop: '68mm',
    marginLeft: '40mm',
  },
  year: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '72pt',
    lineHeight: 1,
    color: colors.black30,
  },
  yearNeutral: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '72pt',
    lineHeight: 1,
    color: colors.black30,
  },
  agenda: {
    fontFamily: 'Learning Curve',
    fontSize: '60pt',
    lineHeight: 1.2,
    color: colors.black60,
  },
  agendaNeutral: {
    fontFamily: 'Inter',
    fontSize: '28pt',
    lineHeight: 1.2,
    color: colors.black60,
    textTransform: 'capitalize',
    marginTop: '4mm',
  },
});

const stylesA4 = StyleSheet.create({
  image: {
    position: 'absolute',
    top: '-20mm',
    left: '-24mm',
    height: '231mm',
    width: '165mm',
  },
  header: {
    marginTop: '68mm',
    marginLeft: '40mm',
  },
  year: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '72pt',
    lineHeight: 1,
    color: colors.black30,
  },
  yearNeutral: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '72pt',
    lineHeight: 1,
    color: colors.black30,
  },
  agenda: {
    fontFamily: 'Learning Curve',
    fontSize: '60pt',
    lineHeight: 1.2,
    color: colors.black60,
  },
  agendaNeutral: {
    fontFamily: 'Inter',
    fontSize: '48pt',
    lineHeight: 1.2,
    color: colors.black60,
    textTransform: 'capitalize',
  },
});

function YearCover({ year, format, theme }) {
  const styles = format === 'A5' ? stylesA5 : stylesA4;

  return (
    <View>
      {theme !== 'neutral' && (
        <Image style={styles.image} src="/images/cover.jpg" alt="" />
      )}
      <View style={styles.header}>
        <Text style={theme === 'neutral' ? styles.yearNeutral : styles.year}>
          {year}
        </Text>
        <Text
          style={theme === 'neutral' ? styles.agendaNeutral : styles.agenda}
        >
          agenda
        </Text>
      </View>
    </View>
  );
}

export default YearCover;
