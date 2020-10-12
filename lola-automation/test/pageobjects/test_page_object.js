class TestPageObject {
  openURL(url) {
    browser.url(url);
  }
}
export default new TestPageObject();
