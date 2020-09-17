import * as React from "react";
import { defer } from "underscore";

import api from "../../../helpers/api";
import store from "../../index";

describe("actions", () => {
  let promiseHelper;

  beforeEach(() => {
    const fakePromise = new Promise((resolve, reject) => {
      promiseHelper = {
        resolve,
      };
    });
    spyOn(api, "post").and.returnValue(fakePromise);
  });

  it(`login and save user in store`, () => {
    store.auth.login();
    expect(api.post).toHaveBeenCalledWith("/auth/login");
    const expectedUser = { name: "Test", username: "Test2" };
    promiseHelper.resolve({ data: { name: "Test", username: "Test2" } });
    defer(() => {
      expect(store.auth.context.user).toEqual(expectedUser);
    });
  });
});
