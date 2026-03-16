import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPie10 = ({
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
        d="M2.609 17.078a8 8 0 0 1 6.82-11.041c.902-.065 1.571.672 1.571 1.48v13c0 .807-.67 1.544-1.57 1.479a8 8 0 0 1-6.821-4.918M4 14.016a6 6 0 0 0 5 5.917V8.1a6 6 0 0 0-5 5.916M21.391 6.922a8 8 0 0 1-6.82 11.041c-.902.065-1.571-.672-1.571-1.48v-13c0-.807.67-1.544 1.57-1.479a8 8 0 0 1 6.821 4.918M20 9.984a6 6 0 0 0-5-5.917V15.9a6 6 0 0 0 5-5.916"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPie10;
