import { SummaryPipe } from "./card-info.pipe";

describe('SummaryPipe', () => {
  it('create an instance', () => {
    const pipe = new SummaryPipe();
    expect(pipe).toBeTruthy();
  });
});
