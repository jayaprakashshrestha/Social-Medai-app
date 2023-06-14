import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

const Comp = (props) => {
  return (
    <>
      <button onClick={props.onClick}>hey</button>
      <div role="container" data-testid="application">
        {props.address}{" "}
      </div>
    </>
  );
};
describe("somthing here", () => {
  it("Button function called ", () => {
    const onClick = vi.fn();
    const address = " THis is me ";
    render(<Comp address={address} onClick={onClick} />);

    const hasAddress = screen.getByRole("button");
    screen.debug(hasAddress);

    fireEvent.click(hasAddress);
    expect(onClick).not.toBeCalled();
  });
});
