const months = [
  {
    month: 'janeiro',
    number: 0,
  },
  {
    month: 'fevereiro',
    number: 1,
  },
  {
    month: 'março',
    number: 2,
  },
  {
    month: 'abril',
    number: 3,
  },
  {
    month: 'maio',
    number: 4,
  },
  {
    month: 'junho',
    number: 5,
  },
  {
    month: 'julho',
    number: 6,
  },
  {
    month: 'agosto',
    number: 7,
  },
  {
    month: 'setembro',
    number: 8,
  },
  {
    month: 'outubro',
    number: 9,
  },
  {
    month: 'novembro',
    number: 10,
  },
  {
    month: 'dezembro',
    number: 11,
  },
];

function formatDay(day) {
  const weekDays = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
  ];

  return weekDays[day];
}

function checkHoliday(month, day, holidays) {
  if (holidays) {
    const result = holidays.find(
      (holiday) => holiday.month === month && holiday.day === day
    );

    return result ? result.holiday : '';
  }

  return '';
}

export default function generateYearData(year, holidays) {
  const daysInMonth = months
    .map((month) => {
      return {
        ...month,
        amount: new Date(year, month.number + 1, 0).getDate(),
      };
    })
    .map((month) => {
      return {
        ...month,
        number: month.number + 1,
        days: [...Array(month.amount).keys()].map((day) => {
          return {
            day: day + 1,
            weekDay: formatDay(new Date(year, month.number, day + 1).getDay()),
            holiday: checkHoliday(month.number + 1, day + 1, holidays),
            position: new Date(year, month.number, day + 1).getDay() + 1,
          };
        }),
      };
    });

  return daysInMonth;
}

export const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
