export default class Calendar<T> {
  private date: Date;
  private cursor: number;

  constructor(private readonly presenter: (date: Date) => T) {
    this.date = new Date();
    this.cursor = 0;
  }

  private setMonth() {
    const date = new Date();
    date.setMonth(date.getMonth() + this.cursor);
    this.date = date;
  }

  nextPage() {
    this.cursor += 1;
    this.setMonth();
    return this.presenter(this.date);
  }

  prevPage() {
    this.cursor -= 1;
    this.setMonth();
    return this.presenter(this.date);
  }

  currentPage() {
    this.cursor = 0;
    this.setMonth();
    return this.presenter(this.date);
  }
}
