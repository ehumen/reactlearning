import React from "react"
import {create} from "react-test-renderer";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import {render} from "@testing-library/react";
import {unmountComponentAtNode} from "react-dom";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it("should status from props be in state", () => {
    // Arrange
    const props = {
        value: null
    }
    // Act
    const instance = render(<ProfileInfo {...props}/>,container);
    // Assert
    expect(instance.store.state('value')).toEqual(null);
})

