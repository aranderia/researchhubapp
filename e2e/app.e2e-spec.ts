import { ResearcherHubPage } from './app.po';

describe('researcher-hub App', () => {
  let page: ResearcherHubPage;

  beforeEach(() => {
    page = new ResearcherHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
