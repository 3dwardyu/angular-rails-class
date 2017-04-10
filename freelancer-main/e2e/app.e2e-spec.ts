import { FreelanceMainPage } from './app.po';

describe('freelance-main App', () => {
  let page: FreelanceMainPage;

  beforeEach(() => {
    page = new FreelanceMainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
