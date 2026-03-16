import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPlay = ({
  size = "md",
  color = "currentColor",
  ...props
}: IconProps) => {
  const px = resolveIconSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 6.007C4 2.71 7.762.83 10.399 2.806l7.997 5.993c2.135 1.6 2.135 4.802 0 6.402L10.4 21.194C7.762 23.17 4 21.288 4 17.993zm5.2-1.6C7.88 3.417 6 4.358 6 6.006v11.986c0 1.648 1.88 2.589 3.2 1.6l7.997-5.993a2 2 0 0 0 0-3.2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPlay;
