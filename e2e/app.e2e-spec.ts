import { NuevoProyectoAngularPage } from './app.po';

describe('nuevo-proyecto-angular App', function() {
  let page: NuevoProyectoAngularPage;

  beforeEach(() => {
    page = new NuevoProyectoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
