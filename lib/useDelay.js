const useDelay = (callback, delay = 500) => {
  const call = async () => {
    await setTimeout(() => {
      callback();
    }, delay);
  };
  return { call };
};

export default useDelay;
