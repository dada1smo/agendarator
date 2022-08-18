import React from 'react';
import {
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from '@react-pdf/renderer';
import Page from '../Page';
import YearCover from '../YearPage';
import Planner from '../Planner';
import generateYearData from '../../utils/data';
import Daily from '../Daily';

Font.register({
  family: 'Learning Curve',
  src: '/fonts/learning_curve_regular.otf',
});

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: '/fonts/Inter-Regular.ttf',
    },
    {
      fontWeight: 'medium',
      src: '/fonts/Inter-Medium.ttf',
    },
    {
      fontWeight: 'bold',
      src: '/fonts/Inter-Bold.ttf',
    },
  ],
});

const styles = StyleSheet.create({
  viewer: {
    width: '100vw', //the pdf viewer will take up all of the width and height
    height: '100vh',
    border: 'none',
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Agenda = ({ year, holidays }) => {
  const yearData = generateYearData(year, holidays);

  const planner = yearData.map((month) => {
    return {
      month: month.month,
      monthNumber: month.number,
      weeks: Math.ceil((month.amount + month.days[0].position) / 7),
      pages: [
        [
          month.days.filter((day) => day.position === 1),
          month.days.filter((day) => day.position === 2),
          month.days.filter((day) => day.position === 3),
          month.days.filter((day) => day.position === 4),
        ],
        [
          month.days.filter((day) => day.position === 5),
          month.days.filter((day) => day.position === 6),
          month.days.filter((day) => day.position === 7),
        ],
      ],
    };
  });

  const daily = yearData.map((month) => {
    return {
      month: month.month,
      pages: month.days.reduce((result, value, index, array) => {
        if (index % 2 === 0) result.push(array.slice(index, index + 2));
        return result;
      }, []),
    };
  });

  console.log(daily);

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page>
          <YearCover year={year} />
        </Page>
        {planner
          .filter((item, index) => index < 2)
          .map((item) => {
            return item.pages.map((page, index) => {
              return (
                <Page key={`${item.month}${index + 1}`}>
                  <Planner
                    month={item.month}
                    monthNumber={item.monthNumber}
                    weeks={item.weeks}
                    calendarDays={page}
                  />
                </Page>
              );
            });
          })}
        {daily
          .filter((item, index) => index === 0)
          .map((item) => {
            return item.pages.map((page, index) => {
              return (
                <Page key={`${item.month}${index + 1}`}>
                  <Daily month={item.month} days={page} year={year} />
                </Page>
              );
            });
          })}
      </Document>
    </PDFViewer>
  );
};

export default Agenda;
