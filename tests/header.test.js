const Page = require("./helpers/page");

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto("http://localhost:3000");
});

afterEach(async () => {
  await page.close();
});

test("the header has the correct text", async () => {
  const text = await page.getContentsOf("a.brand-logo");

  expect(text).toEqual("Blogster");
});

test("clicking login marks Oauth flow", async () => {
  await page.click(".right a");

  const url = await page.url();

  expect(url).toMatch(/accounts\.google\./);
});

test("when signed in, shows logout button", async () => {
  await page.login();
  const text = await page.getContentsOf('a[href="/auth/logout"]');

  expect(text).toEqual("Logout");
});

// class Greetings {
//   english() {
//     return "Hello";
//   }

//   spanish() {
//     return "Hola";
//   }
// }

// class MoreGreetings {
//   german() {
//     return "Hallo😍";
//   }

//   french() {
//     return "Bonjour";
//   }
// }

// const greetings = new Greetings();

// const moreGreetings = new MoreGreetings();

// const allGreetings = new Proxy(moreGreetings, {
//   get(target, prop) {
//     return target[prop] || greetings[prop];
//   },
// });
