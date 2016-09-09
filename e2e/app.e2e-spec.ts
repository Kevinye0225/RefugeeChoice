import { RefugeesPage } from './app.po';

describe('refugees App', function() {
  let page: RefugeesPage;

  beforeEach(() => {
    page = new RefugeesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
