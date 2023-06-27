import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../../../styles/styles';

function MonthCover({ month, index, format, theme }) {
  const styles = handleStyles(format, theme);

  return (
    <View>
      {theme !== 'neutral' && (
        <Image style={styles.image} src="/images/cover.jpg" alt="" />
      )}
      <View style={styles.header}>
        <Text style={styles.year}>
          {index < 9 ? `0${index + 1}` : `${index + 1}`}
        </Text>
        <Text style={styles.agenda}>{month}</Text>
      </View>
    </View>
  );
}

const defaultStyles = {
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
};

function handleStyles(format, theme) {
  if (format === 'A5' && theme === 'neutral') {
    return StyleSheet.create({
      ...defaultStyles,
      header: {
        ...defaultStyles.header,
        marginLeft: '0',
        width: '100%',
      },
      year: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: '128pt',
        lineHeight: 1,
        color: colors.black30,
        letterSpacing: '-2mm',
        textAlign: 'center',
      },
      agenda: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: '18pt',
        lineHeight: 1.2,
        letterSpacing: '1mm',
        color: colors.black60,
        textTransform: 'uppercase',
        marginLeft: '4mm',
        marginTop: '4mm',
        textAlign: 'center',
      },
    });
  }

  if (format === 'A4') {
    return StyleSheet.create({
      image: {
        position: 'absolute',
        top: '-20mm',
        left: '6mm',
        height: '198mm',
        width: '142mm',
      },
      header: {
        marginTop: '36mm',
        marginLeft: '24mm',
      },
      year: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: '148pt',
        lineHeight: 1,
        color: colors.black30,
        textAlign: 'center',
      },
      yearNeutral: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: '148pt',
        lineHeight: 1,
        color: colors.black30,
      },
      agenda: {
        fontFamily: 'Learning Curve',
        fontSize: '80pt',
        lineHeight: 1.2,
        color: colors.black60,
        textAlign: 'center',
      },
      agendaNeutral: {
        fontFamily: 'Inter',
        fontSize: '48pt',
        lineHeight: 1.2,
        color: colors.black60,
        textTransform: 'capitalize',
      },
    });
  }

  return StyleSheet.create(defaultStyles);
}

export default MonthCover;
