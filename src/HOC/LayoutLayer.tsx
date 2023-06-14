import { useState } from "react";
import FloatButton from "../component/FloatButton";
import PostFormComponentModal from "../component/PostFormComponent";
import ToastComponent from "../component/ToastComponent";

const LayoutComponent = (props: { children: any }) => {
  const [showPostForm, setShowPostForm] = useState(false);

  const onFormClose = () => {
    setShowPostForm(false);
  };

  const onFLoatButtonClick = () => {
    setShowPostForm(true);
  };

  return (
    <>
      {props.children}
      <FloatButton onClick={onFLoatButtonClick} />
      <ToastComponent />
      <PostFormComponentModal showModal={showPostForm} onClose={onFormClose} />
    </>
  );
};

export default LayoutComponent;
