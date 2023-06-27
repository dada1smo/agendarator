import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { colors } from '../../../styles/styles';
import Dots from '../Dots';
import Page from '../Formats/A5';

function Planner({ month, monthNumber, weeks, calendarDays, format, theme }) {
  const styles = handleStyles(format, theme);
  const dots = handleDots(format, theme);

  calendarDays.forEach((day) => {
    if (day[0].position < day[0].day && day[0].day !== '') {
      day.unshift({
        day: '',
        position: day[0].position,
        weekDay: day[0].weekDay,
      });
    }

    if (day.length < weeks) {
      day.push({ day: '', position: day[day.length - 1].position });
    }
  });

  const weekDays = calendarDays.map((column) => column[0].weekDay);

  const defineBorders = (index, arrayLength, parentIndex, parentLength) => {
    if (parentIndex === parentLength - 1) {
      if (index === 0) {
        return {
          borderTop: `1.2pt solid ${colors.black30}`,
          borderRight: `1.2pt solid ${colors.black30}`,
          borderBottom: `1.2pt solid ${colors.black30}`,
        };
      }

      return {
        borderRight: `1.2pt solid ${colors.black30}`,
        borderBottom: `1.2pt solid ${colors.black30}`,
      };
    }

    if (parentIndex === 0) {
      if (index === 0) {
        return {
          border: `1.2pt solid ${colors.black30}`,
        };
      }

      return {
        borderRight: `1.2pt solid ${colors.black30}`,
        borderLeft: `1.2pt solid ${colors.black30}`,
        borderBottom: `1.2pt solid ${colors.black30}`,
      };
    }

    if (index === 0) {
      return {
        borderTop: `1.2pt solid ${colors.black30}`,
        borderRight: `1.2pt solid ${colors.black30}`,
        borderBottom: `1.2pt solid ${colors.black30}`,
      };
    }

    return {
      borderRight: `1.2pt solid ${colors.black30}`,
      borderBottom: `1.2pt solid ${colors.black30}`,
    };
  };

  return (
    <View style={styles.planner}>
      <View style={styles.row}>
        {weekDays.map((day) => {
          return (
            <View key={day} style={styles.column}>
              <Text
                style={{
                  ...styles.weekDay,
                  textAlign:
                    day && (theme !== 'neutral') === 'domingo'
                      ? 'left'
                      : 'center',
                }}
              >
                {day}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.calendarRow}>
        {calendarDays.map((column, index) => {
          return (
            <View style={styles.calendarColumn} key={index}>
              {column.map((day, dayIndex) => {
                return (
                  <View
                    style={{
                      ...styles.calendarCell,
                      ...defineBorders(
                        dayIndex,
                        column.length,
                        index,
                        calendarDays.length
                      ),
                      backgroundColor:
                        day.position === 1 || day.position === 7
                          ? colors.black15
                          : '',
                    }}
                    key={dayIndex}
                  >
                    <Text style={styles.calendarDay}>{day.day}</Text>
                    <Text style={styles.calendarHoliday}>{day.holiday}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
        {calendarDays.length === 3 && (
          <View style={styles.calendarColumn}>
            <Text style={styles.calendarMonthNumber}>
              {monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`}
            </Text>
            <Text style={styles.calendarMonth}>{month}</Text>
            <Dots {...dots} />
            {theme !== 'neutral' && (
              <Image style={styles.image} src="/images/flower2.jpg" alt="" />
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const defaultStyles = {
  planner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    width: '25%',
  },
  weekDay: {
    fontFamily: 'Learning Curve',
    fontSize: '28pt',
    lineHeight: 1.1,
    color: colors.black60,
  },
  calendarRow: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  calendarColumn: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  calendarCell: {
    height: '100%',
    width: '100%',
    paddingHorizontal: '6pt',
    paddingVertical: '4pt',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  calendarDay: {
    fontFamily: 'Inter',
    fontSize: '10pt',
    lineHeight: 1.1,
    color: colors.black60,
    textAlign: 'right',
  },
  calendarHoliday: {
    fontFamily: 'Inter',
    fontSize: '8pt',
    lineHeight: 1.1,
    color: colors.black60,
    textAlign: 'right',
  },
  calendarMonthNumber: {
    fontFamily: 'Inter',
    fontSize: '52pt',
    fontWeight: 'bold',
    lineHeight: 1.1,
    color: colors.black30,
    textAlign: 'center',
    letterSpacing: '-1pt',
    marginTop: '-24pt',
    marginRight: '-4pt',
  },
  calendarMonth: {
    fontFamily: 'Inter',
    fontSize: '10pt',
    fontWeight: 'bold',
    lineHeight: 1.5,
    color: colors.black30,
    textAlign: 'center',
    letterSpacing: '1pt',
    textTransform: 'uppercase',
    marginLeft: '10pt',
  },
  image: {
    position: 'absolute',
    bottom: '-2mm',
    right: '-2mm',
    height: '48mm',
    width: '29.5mm',
  },
};

function handleStyles(format, theme) {
  return StyleSheet.create({
    ...defaultStyles,
    weekDay: {
      ...defaultStyles.weekDay,
      fontFamily:
        theme === 'neutral' ? 'Inter' : defaultStyles.weekDay.fontFamily,
      fontSize: theme === 'neutral' ? '10pt' : defaultStyles.weekDay.fontSize,
      textTransform: theme === 'neutral' ? 'uppercase' : 'lowercase',
      fontWeight: theme === 'neutral' ? 'bold' : 'normal',
      textAlign: theme === 'neutral' ? 'center' : '',
      paddingBottom: theme === 'neutral' ? '2mm' : '0',
      letterSpacing: theme === 'neutral' ? '1mm' : '0',
    },
  });
}

function handleDots(format, theme) {
  if (format === 'A5' && theme === 'neutral') {
    return {
      columns: 7,
      dots: 38,
      height: '160mm',
    };
  }

  return {
    columns: 7,
    dots: 24,
    height: '100mm',
  };
}

export default Planner;
