import { GithubUsernameFounderPage } from './app.po';

describe('github-username-founder App', () => {
  let page: GithubUsernameFounderPage;

  beforeEach(() => {
    page = new GithubUsernameFounderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
