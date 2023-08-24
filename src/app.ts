// eslint-disable-next-line @typescript-eslint/no-unused-vars
function syncCalendar(): void {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const calendarId = '';

  const calendar = CalendarApp.getCalendarById(calendarId);

  for (let i = 0; i < data.length; i++) {
    const eventTitle: string = data[i][0];
    const startDate: Date = new Date(data[i][1]);
    const endDate: Date = new Date(data[i][2]);
    calendar.createEvent(eventTitle, startDate, endDate);
  }
}
