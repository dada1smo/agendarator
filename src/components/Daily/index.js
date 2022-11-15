import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { Fragment } from 'react';
import { colors } from '../../../styles/styles';
import Dots from '../Dots';
import FooterCientista from '../Footers/Cientista';
import Logo from '../Logo';

const stylesA5 = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    flexWrap: 'nowrap',
  },
  month: {
    fontFamily: 'Learning Curve',
    fontSize: '28pt',
    lineHeight: 1.1,
    color: colors.black60,
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '12mm',
    width: '24mm',
  },
  dailyRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  dailyColumn: {
    height: '100%',
    width: '50%',
  },
  dailyHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '1mm',
  },
  day: {
    fontFamily: 'Inter',
    fontSize: '28pt',
    lineHeight: 1.1,
    fontWeight: 'medium',
    color: colors.black60,
  },
  weekDay: {
    fontFamily: 'Inter',
    fontSize: '10pt',
    lineHeight: 1.1,
    color: colors.black60,
    textAlign: 'right',
  },
  holiday: {
    fontFamily: 'Inter',
    fontSize: '8pt',
    lineHeight: 1.1,
    color: colors.black60,
  },
  line: {
    height: '1pt',
    width: '100%',
    backgroundColor: colors.black30,
    marginBottom: '6mm',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '13mm',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    fontFamily: 'Inter',
    fontSize: '20pt',
    lineHeight: 1.1,
    fontWeight: 'bold',
    color: colors.black30,
    marginLeft: '4mm',
  },
});

const stylesA4 = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    flexWrap: 'nowrap',
  },
  month: {
    fontFamily: 'Learning Curve',
    fontSize: '28pt',
    lineHeight: 1.1,
    color: colors.black60,
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '12mm',
    width: '24mm',
  },
  dailyRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  dailyColumn: {
    height: '100%',
    width: '50%',
  },
  dailyHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '1mm',
  },
  day: {
    fontFamily: 'Inter',
    fontSize: '28pt',
    lineHeight: 1.1,
    fontWeight: 'medium',
    color: colors.black60,
  },
  weekDay: {
    fontFamily: 'Inter',
    fontSize: '10pt',
    lineHeight: 1.1,
    color: colors.black60,
    textAlign: 'right',
  },
  holiday: {
    fontFamily: 'Inter',
    fontSize: '8pt',
    lineHeight: 1.1,
    color: colors.black60,
  },
  line: {
    height: '1pt',
    width: '100%',
    backgroundColor: colors.black30,
    marginBottom: '5.5mm',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '13mm',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    fontFamily: 'Inter',
    fontSize: '20pt',
    lineHeight: 1.1,
    fontWeight: 'bold',
    color: colors.black30,
    marginLeft: '4mm',
  },
});

const linesA5 = [...Array(19).keys()];
const linesA4 = [...Array(28).keys()];

function Daily({ month, days, year, format, columns, theme }) {
  const lines = format === 'A5' ? linesA5 : linesA4;
  const styles = format === 'A5' ? stylesA5 : stylesA4;
  console.log(days);

  return (
    <View style={{ position: 'relative', height: '100%' }}>
      <View style={styles.header}>
        <Text style={styles.month}>{month}</Text>
        <Dots columns={15} dots={1} padding={'2mm 24mm 0 6mm'} />
        <Image style={styles.image} src="/images/flower3.jpg" alt="" />
      </View>
      <View style={styles.dailyRow}>
        {days.map((day, index, arr) => {
          return (
            <Fragment key={index}>
              <View
                style={{
                  ...styles.dailyColumn,
                  width: columns === 2 ? styles.dailyColumn.width : '100%',
                  padding: index === 0 ? '0 4mm 0 0' : '0 0 0 4mm',
                }}
              >
                <View style={styles.dailyHeader}>
                  <Text style={styles.day}>{day.day}</Text>
                  <Text style={styles.weekDay}>{day.weekDay}</Text>
                </View>
                {lines.map((line, lineIndex) => {
                  return (
                    <View
                      key={line}
                      style={{
                        ...styles.line,
                        marginBottom:
                          lineIndex === lines.length - 1
                            ? 0
                            : styles.line.marginBottom,
                      }}
                    />
                  );
                })}
                <Text
                  style={{
                    ...styles.holiday,
                    textAlign: index === 0 ? 'left' : 'right',
                  }}
                >
                  {day.holiday}
                </Text>
              </View>
              {arr.length % 2 !== 0 &&
                index === arr.length - 1 &&
                columns !== 1 && (
                  <View
                    style={{
                      ...styles.dailyColumn,
                      padding: index === 0 ? '0 4mm 0 0' : '0 0 0 4mm',
                    }}
                  >
                    <Dots
                      columns={11}
                      dots={format === 'A5' ? 28 : 32}
                      height={format === 'A5' ? '128mm' : '172mm'}
                      padding="10mm 2mm 0 2mm"
                    />
                  </View>
                )}
            </Fragment>
          );
        })}
      </View>
      {theme === 'cientista' ? (
        <FooterCientista year={year} />
      ) : (
        <View style={styles.footer}>
          <Logo />
          <Text style={styles.year}>{year}</Text>
          <Dots columns={18} dots={1} padding={'0 0 0 6mm'} />
        </View>
      )}
    </View>
  );
}

export default Daily;
