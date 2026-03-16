import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSnowfall8 = ({
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
        d="M7.5 13a3.5 3.5 0 0 1-1.453-6.685 5.001 5.001 0 0 1 8.972-2.29A4.5 4.5 0 1 1 15.5 13c-.275 0-.495-.226-.54-.498a3 3 0 0 0-5.918 0c-.045.272-.265.498-.541.498z"
      />
      <path
        fill={color}
        d="M12 12a1 1 0 0 1 1 1v2.268l1.963-1.134a1 1 0 1 1 1 1.732L14 17l1.964 1.134a1 1 0 0 1-1 1.732L13 18.732V21a1 1 0 1 1-2 0v-2.268l-1.965 1.134a1 1 0 1 1-1-1.732L10 17l-1.964-1.134a1 1 0 1 1 1-1.732L11 15.268V13a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default SvgSnowfall8;
