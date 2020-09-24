import Calendar from '../Calendar';
import presenter from '../presenter';

describe('calendar:', () => {
  it('should return current page', () => {
    const calendar = new Calendar(presenter);
    const page = calendar.currentPage();

    expect(page).toEqual(
      expect.objectContaining({
        currentMonth: expect.any(Array),
        prevMonth: expect.any(Array),
        nextMonth: expect.any(Array),
      })
    );
  });
});
