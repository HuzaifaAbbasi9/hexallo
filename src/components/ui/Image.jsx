import { tw } from "@/utils/tw";

const getAltFromSrc = (src) => {
  if (!src) return "";
  const parts = src.split("/");
  const filename = parts[parts.length - 1];
  const nameWithoutExt = filename.split(".")[0];
  return nameWithoutExt.replace(/[-_]/g, " ");
};

const Image = ({ src, alt, className = "", loading = "lazy", ...props }) => {
  const finalAlt = alt || getAltFromSrc(src);

  return (
    <img
      src={src}
      alt={finalAlt}
      className={tw(className)}
      {...props}
      loading={loading}
    />
  );
};

export default Image;
