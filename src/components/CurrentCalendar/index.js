import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { colors } from '../../../styles/styles';
import { weekDays } from '../../utils/data';
import Dots from '../Dots';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    flexWrap: 'nowrap',
  },
  year: {
    fontFamily: 'Inter',
    fontSize: '20pt',
    lineHeight: 1.4,
    fontWeight: 'bold',
    color: colors.black30,
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '12mm',
    width: '24mm',
  },
  calendarGrid: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  calendar: {
    display: 'flex',
    width: '33.33%',
    flexDirection: 'column',
  },
  calendarMonth: {
    fontFamily: 'Inter',
    fontSize: '10pt',
    lineHeight: 1.4,
    color: colors.black60,
    textAlign: 'left',
    textTransform: 'capitalize',
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
    height: '4mm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1pt solid #ffffff',
  },
  calendarDay: {
    fontFamily: 'Inter',
    fontSize: '8pt',
    lineHeight: 1.1,
    color: colors.black60,
    textAlign: 'center',
  },
  footer: {
    marginTop: '12mm',
    paddingTop: '4mm',
    borderTop: `1pt solid ${colors.black30}`,
  },
  holidays: {
    fontFamily: 'Inter',
    fontSize: '10pt',
    lineHeight: 1.4,
    color: colors.black60,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  holiday: {
    fontFamily: 'Inter',
    fontSize: '8pt',
    lineHeight: 1.4,
    color: colors.black60,
    textAlign: 'left',
    textTransform: 'capitalize',
    width: '50%',
    paddingRight: '4mm',
  },
});

const CurrentCalendar = ({ year, yearData, holidays, theme }) => {
  const calendarDays = yearData.map((month) => {
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

  const handlePaddingCalendar = (index) => {
    const level = Math.ceil(index / 3);

    if ((index - 3 * (level - 1)) % 3 === 0) {
      return '0 0 0 4mm';
    }

    if ((index - 3 * (level - 1)) % 2 === 0) {
      return '0 2mm 0 2mm';
    }

    return '0 4mm 0 0';
  };

  const handlePaddingTable = (index) => {
    return index > 10 ? '0 0 0 0' : '0 0 8m 0';
  };

  return (
    <View style={{ position: 'relative', height: '100%' }}>
      <View style={styles.header}>
        <Text style={styles.year}>{year}</Text>
        {theme !== 'neutral' && (
          <>
            <Dots columns={15} dots={1} padding="2mm 24mm 0 6mm" />
            <Image style={styles.image} src="/images/flower3.jpg" alt="" />
          </>
        )}
      </View>
      <View style={styles.calendarGrid}>
        {calendarDays.map(({ month, days }, index) => {
          return (
            <View
              style={{
                ...styles.calendar,
                padding: handlePaddingCalendar(index + 1),
              }}
              key={month}
            >
              <Text style={styles.calendarMonth}>{month}</Text>
              <View
                style={{
                  ...styles.calendarTable,
                  padding: handlePaddingTable(index + 1),
                }}
              >
                <View
                  style={{
                    ...styles.calendarTableRow,
                    borderBottom: `1pt solid ${colors.black30}`,
                  }}
                >
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
                          border: holiday ? `1pt solid ${colors.black15}` : '',
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
      <View style={styles.footer}>
        <View
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {holidays.map((holiday, index) => {
            return (
              <Text key={index} style={styles.holiday}>
                <Text style={{ fontWeight: 'bold' }}>
                  {holiday.day} {calendarDays[holiday.month - 1].month}
                </Text>{' '}
                {holiday.holiday}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CurrentCalendar;
