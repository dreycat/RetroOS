import sinon from 'sinon';
import Calendar from '../Calendar';
import presenter from '../presenter';

let clock: any;

beforeEach(() => {
  clock = sinon.useFakeTimers(new Date('2020-12-12').getTime());
});

afterEach(() => {
  clock.restore();
});

describe('calendar:', () => {
  it('should return correct format', () => {
    const calendar = new Calendar(presenter);
    const page = calendar.currentPage();

    expect(page.date.getFullYear()).toBe(2020);
    expect(page.date.getMonth()).toBe(11);
    expect(page.prevMonth).toHaveLength(2);
    expect(page.currentMonth).toHaveLength(31);
    expect(page.nextMonth).toHaveLength(9);
  });
});
