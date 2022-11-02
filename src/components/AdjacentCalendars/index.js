import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { colors } from '../../../styles/styles';
import generateYearData, { weekDays } from '../../utils/data';

const styles = StyleSheet.create({
  page: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  year: {
    fontFamily: 'Inter',
    fontSize: '10pt',
    lineHeight: 1.2,
    fontWeight: 'bold',
    color: colors.black30,
    borderBottom: `1pt solid ${colors.black30}`,
  },
  calendarRow: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '50%',
  },
  calendarGrid: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  calendar: {
    display: 'flex',
    width: '25%',
    flexDirection: 'column',
  },
  calendarMonth: {
    fontFamily: 'Inter',
    fontSize: '6pt',
    lineHeight: 1.2,
    color: colors.black60,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  calendarTable: {
    display: 'flex',
  },
  calendarTableRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarTableCell: {
    width: '14%',
    height: '3.5mm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1pt solid #ffffff',
  },
  calendarDay: {
    fontFamily: 'Inter',
    fontSize: '6pt',
    lineHeight: 1.1,
    color: colors.black60,
    textAlign: 'center',
  },
});

const AdjacentCalendars = ({ currentYear, lastYear, nextYear }) => {
  const calendarDays = (year, holidays) => {
    return generateYearData(year, holidays).map((month) => {
      if (month.days[0].position !== 1) {
        let i = month.days[0].position;
        while (i > 1) {
          month.days.unshift({ day: '' });
          i -= 1;
        }
      }

      return {
        month: month.month,
        days: month.days,
      };
    });
  };

  const handlePaddingCalendar = (index) => {
    const level = Math.ceil(index / 3);

    if ((index - 3 * (level - 1)) % 3 === 0) {
      return '0 0 0 2mm';
    }

    if ((index - 3 * (level - 1)) % 2 === 0) {
      return '0 1mm 0 1mm';
    }

    return '0 2mm 0 0';
  };

  const handlePaddingTable = (index) => {
    if (index > 9) return '0 0 0 0';
    return '0 0 0.5mm 0';
  };

  const calendars = [
    calendarDays(currentYear - 1, lastYear.holidays),
    calendarDays(currentYear + 1, nextYear.holidays),
  ];

  return (
    <View style={styles.page}>
      {calendars.map((year, index) => {
        return (
          <View key={index} style={styles.calendarRow}>
            <Text style={styles.year}>
              {index === 0 ? currentYear - 1 : currentYear + 1}
            </Text>
            <View style={styles.calendarGrid}>
              {year.map(({ month, days }) => {
                return (
                  <View
                    style={{
                      ...styles.calendar,
                      padding: handlePaddingCalendar(index + 1),
                    }}
                    key={month}
                  >
                    <Text
                      style={{
                        ...styles.calendarMonth,
                        paddingTop: index < 4 ? '1mm' : '0',
                      }}
                    >
                      {month}
                    </Text>
                    <View
                      style={{
                        ...styles.calendarTable,
                        padding: handlePaddingTable(index + 1),
                      }}
                    >
                      <View style={styles.calendarTableRow}>
                        {weekDays.map((day, index) => {
                          return (
                            <View key={index} style={styles.calendarTableCell}>
                              <Text
                                style={{
                                  ...styles.calendarDay,
                                  fontWeight: 'bold',
                                }}
                              >
                                {day}
                              </Text>
                            </View>
                          );
                        })}
                      </View>
                      <View style={styles.calendarTableRow}>
                        {days.map(({ day, holiday }, index) => {
                          return (
                            <View
                              key={index}
                              style={{
                                ...styles.calendarTableCell,
                                border: holiday
                                  ? `1pt solid ${colors.black15}`
                                  : '',
                                backgroundColor: holiday ? colors.black15 : '',
                              }}
                            >
                              <Text style={styles.calendarDay}>{day}</Text>
                            </View>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default AdjacentCalendars;
