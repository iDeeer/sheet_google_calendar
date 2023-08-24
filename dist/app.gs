// Compiled using sheet_google_calendar 1.0.0 (TypeScript 4.9.5)
"use strict";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function syncCalendar() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();
    const calendarId = '';
    const calendar = CalendarApp.getCalendarById(calendarId);
    for (let i = 0; i < data.length; i++) {
        const eventTitle = data[i][0];
        const startDate = new Date(data[i][1]);
        const endDate = new Date(data[i][2]);
        calendar.createEvent(eventTitle, startDate, endDate);
    }
}
