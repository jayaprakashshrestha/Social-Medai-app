import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "flowbite-react";
import React from "react";

interface IProps {
  onClick: () => void;
}
const FloatButton: React.FC<IProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="fixed right-10 bottom-10 bg-sky-800 rounded-full cursor-pointer "
    >
      <PlusCircleIcon className="h-10 w-10" />
    </Button>
  );
};

export default FloatButton;
