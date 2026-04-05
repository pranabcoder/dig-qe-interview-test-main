// import { $ } from "@wdio/globals";
// import Page from "./page.js";

class BasicAuthPage {
  get message() {
    return $(".example > p");
  }
  async login(username, password) {
    await this.open(username, password);
  }
  open(username, password) {
     console.log(`Logging in with username: ${username} and password: ${password}`);
     const authUrl = `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
     console.log(`Logged in: ${authUrl}`);
     return browser.url(authUrl);
  }
}

export default new BasicAuthPage();
