import { MattAppPage } from './app.po';

describe('matt-app App', () => {
  let page: MattAppPage;

  beforeEach(() => {
    page = new MattAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
