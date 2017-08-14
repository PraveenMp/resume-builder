import { ResumeBuilderPage } from './app.po';

describe('resume-builder App', () => {
  let page: ResumeBuilderPage;

  beforeEach(() => {
    page = new ResumeBuilderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
