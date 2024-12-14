import { useEffect, useState } from "react";

const detectDevice = () => (window.innerWidth < 600 ? "Mobile" : "Desktop");

const useDetectDevice = () => {
  const [device, setDevice] = useState(() => detectDevice());

  useEffect(() => {
    const onWindowResize = () => setDevice(detectDevice);

    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return device;
};

export default useDetectDevice;
