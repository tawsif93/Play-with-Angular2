import { GroceriesPage } from './app.po';

describe('groceries App', () => {
  let page: GroceriesPage;

  beforeEach(() => {
    page = new GroceriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
