import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile Status Component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="It-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("It-kamasutra.com");
  });

  test("after creation <span> with status should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="It-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation <input> shouldn't be displayed with correct status", () => {
    const component = create(<ProfileStatus status="It-kamasutra.com" />);
    const root = component.root;
    // expect(input).not.toBeNull();
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });
  test("after creation <input> shouldn't be displayed with correct status", () => {
    const component = create(<ProfileStatus status="It-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).not.toBeNull();
  });
  test("input should be displayed in editmode insted of span", () => {
    const component = create(<ProfileStatus status="It-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("It-kamasutra.com");
  });
  test("callback should be called", () => {
   const mockCallback = jest.fn()
    const component = create(
      <ProfileStatus status="It-kamasutra.com" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
