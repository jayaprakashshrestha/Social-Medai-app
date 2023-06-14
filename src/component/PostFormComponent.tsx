import React, { useState } from "react";
import { Modal, TextInput, Button, Textarea } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addData, postPosts } from "../store/slices/PostSlice";

interface IProps {
  showModal: boolean;
  onClose: () => void;
}
const PostFormComponentModal: React.FC<IProps> = ({ showModal, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(postPosts({ name, description }));
  };
  return (
    <Modal
      dismissible
      show={showModal}
      size="xl"
      popup={true}
      onClose={onClose}
    >
      <Modal.Header />
      <Modal.Body>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add a Post
          </h3>
          <div>
            <TextInput
              placeholder="Title of Post"
              required={true}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <Textarea
              required={true}
              placeholder="Description of Post"
              onChange={(event) => setDescription(event.target.value)}
              rows={10}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-full flex justify-center gap-2">
            <Button className="flex-1" type="submit">
              Share
            </Button>
            <Button className="flex-3" color="failure" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default PostFormComponentModal;
