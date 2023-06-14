import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Toast } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { defaultToast } from "../store/slices/ToastSlice";

const ToastComponent = () => {
  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (toast.message === "") {
      setShow(false);
    } else {
      setShow(true);
      setTimeout(() => {
        dispatch(defaultToast());
      }, 3000);
    }
  }, [toast.message]);

  return show ? (
    toast.error ? (
      <Toast className="absolute bottom-2">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <ExclamationCircleIcon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{toast.message}</div>
        <Toast.Toggle />
      </Toast>
    ) : (
      <Toast className="absolute bottom-2">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <CheckIcon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{toast.message}</div>
        <Toast.Toggle />
      </Toast>
    )
  ) : (
    <></>
  );
};

export default ToastComponent;
