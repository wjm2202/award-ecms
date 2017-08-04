import { EcmsRnDPage } from './app.po';

describe('ecms-rn-d App', () => {
  let page: EcmsRnDPage;

  beforeEach(() => {
    page = new EcmsRnDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
