import { useState } from 'react';

const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

export function useIsTouchDevice() {
  const [isTouch] = useState(isTouchDevice);
  return isTouch;
}
