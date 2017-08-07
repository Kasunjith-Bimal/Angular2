import { RecipbookPage } from './app.po';

describe('recipbook App', function() {
  let page: RecipbookPage;

  beforeEach(() => {
    page = new RecipbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
