import { tw } from '@/utils/tw';

const Container = ({ children, className}) => {
  return (
    <div
      className={tw(
        "mx-auto w-full max-w-[1376px] lg:px-5 max-lg:px-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container