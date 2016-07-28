import { WebGoatPage } from './app.po';

describe('web-goat App', function() {
  let page: WebGoatPage;

  beforeEach(() => {
    page = new WebGoatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
