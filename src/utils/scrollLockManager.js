let scrollLockCount = 0;

export const lockScroll = () => {
  scrollLockCount++;
  if (scrollLockCount === 1) {
    document.body.classList.add("overflow-hidden");
  }
};

export const unlockScroll = () => {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) {
    document.body.classList.remove("overflow-hidden");
  }
};
