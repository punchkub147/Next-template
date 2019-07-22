import { useState } from "react";
import useDelay from "./useDelay";

const useAnimateRemove = ({
  callback = () => {},
  delay = 200,
  animationType = "fadeOut"
}) => {
  const { call } = useDelay(callback, delay);
  const [removed, setRemoved] = useState(false);
  const remove = async () => {
    setRemoved(true);
    await call();
  };
  const removedStyle = removed
    ? {
        animation: `${delay / 1000}s ease-in ${animationType}`
      }
    : {};
  return { removedStyle, removed, remove };
};

export default useAnimateRemove;
