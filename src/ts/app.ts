function syncCalendar(): void {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const calendarId: string = '';

  const calendar = CalendarApp.getCalendarById(calendarId);

  for (let i = 0; i < data.length; i++) {
    const eventTitle: string = data[i][0];
    const startDate: Date = new Date(data[i][1]);
    const endDate: Date = new Date(data[i][2]);
    const url = ''

    const event = calendar.createEvent(eventTitle, startDate, endDate);
  }
}