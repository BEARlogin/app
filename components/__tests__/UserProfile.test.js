import * as React from "react";
import renderer from "react-test-renderer";

import store from "../../stores";
import { UserProfile } from "../UserProfile";

describe("UserProfile", () => {
  beforeEach(() => {
    spyOn(store.auth, "login");
  });

  it(`UserProfile has login button and click fires login action`, () => {
    const component = renderer.create(<UserProfile />);
    const tree = component.toJSON();
    tree.children[0].props.onClick();
    expect(store.auth.login).toHaveBeenCalled();
  });
});
