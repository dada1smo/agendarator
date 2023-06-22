import React, { Fragment, useState } from 'react';
import { Document, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import A5Page from '../../Formats/A5';
import YearCover from '../../YearPage';
import Planner from '../../Planner';
import generateYearData from '../../../utils/data';
import Daily from '../../Daily';
import DottedPage from '../../DottedPage';
import CurrentCalendar from '../../CurrentCalendar';
import AdjacentCalendars from '../../AdjacentCalendars';
import PersonalData from '../../PersonalData';
import MonthCover from '../../MonthCover';
import Credits from '../../Credits';
import Loading from '../../Loading';

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

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  viewer: {
    width: '100vw',
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

const finalPages = [...Array(29).keys()];

const AgendaA5 = ({ year, holidays, lastYear, nextYear, theme = '' }) => {
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

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loading />}
      <PDFViewer style={styles.viewer}>
        <Document onRender={() => setLoading(false)}>
          <A5Page>
            <YearCover year={year} format="A5" theme={theme} />
          </A5Page>
          <A5Page />
          <A5Page>
            <PersonalData format="a5" theme={theme} />
          </A5Page>
          <A5Page>
            <DottedPage theme={theme} />
          </A5Page>
          <A5Page>
            <DottedPage theme={theme} />
          </A5Page>
          <A5Page>
            <CurrentCalendar
              year={year}
              yearData={yearData}
              holidays={holidays}
              theme={theme}
            />
          </A5Page>
          <A5Page>
            <AdjacentCalendars
              currentYear={year}
              lastYear={lastYear}
              nextYear={nextYear}
            />
          </A5Page>
          {planner.map((item) => {
            return item.pages.map((page, index) => {
              return (
                <A5Page key={`${item.month}${index + 1}`}>
                  <Planner
                    month={item.month}
                    monthNumber={item.monthNumber}
                    weeks={item.weeks}
                    calendarDays={page}
                  />
                </A5Page>
              );
            });
          })}
          <A5Page>
            <DottedPage theme={theme} />
          </A5Page>
          {daily.map((item, index) => {
            return (
              <Fragment key={index}>
                <>
                  <A5Page>
                    <MonthCover
                      theme={theme}
                      month={item.month}
                      index={index}
                      format="A5"
                    />
                  </A5Page>
                  <A5Page>
                    <DottedPage theme={theme} />
                  </A5Page>
                </>
                {item.pages.map((page, index, arr) => {
                  return (
                    <A5Page key={`${item.month}${index + 1}`}>
                      <Daily
                        month={item.month}
                        days={page}
                        year={year}
                        format="A5"
                        theme={theme}
                      />
                    </A5Page>
                  );
                })}
                {item.pages.length % 2 !== 0 && (
                  <A5Page>
                    <DottedPage theme={theme} />
                  </A5Page>
                )}
              </Fragment>
            );
          })}
          {finalPages.map((page) => {
            return (
              <A5Page key={page}>
                <DottedPage theme={theme} />
              </A5Page>
            );
          })}
          <A5Page>
            <Credits year={year} />
          </A5Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default AgendaA5;
