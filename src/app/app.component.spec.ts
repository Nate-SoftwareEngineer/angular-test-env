import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  })

  it('should have a title my-test-env', () => {
    expect(fixture.title).toEqual('my-test-env')
  })
})