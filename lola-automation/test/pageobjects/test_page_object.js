class TestPageObject {
  openDEVURL() {
    browser.url(process.env.appEnv);
  }
}
export default new TestPageObject();
