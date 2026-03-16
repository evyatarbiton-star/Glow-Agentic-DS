import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFaceSad = ({
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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M7.4 16.8a1 1 0 0 0 1.397-.196l.004-.006.034-.041q.05-.061.16-.178c.148-.153.369-.362.656-.57.577-.42 1.374-.81 2.349-.81.974 0 1.772.39 2.35.81a5 5 0 0 1 .815.748l.034.041.004.006A1 1 0 0 0 16.8 15.4l-.103-.129s-.142-.164-.248-.276a7 7 0 0 0-.923-.804c-.798-.58-2-1.191-3.526-1.191s-2.728.61-3.526 1.191a7 7 0 0 0-1.17 1.08q-.054.063-.103.128a1.01 1.01 0 0 0 .199 1.4"
      />
    </svg>
  );
};
export default SvgFaceSad;
