import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThunderstorm8 = ({
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
        fillRule="evenodd"
        d="M12.447 12.106a1 1 0 0 1 .447 1.341L11.618 16H14a1 1 0 0 1 .894 1.447l-2 4a1 1 0 1 1-1.788-.894L12.382 18H10a1 1 0 0 1-.894-1.447l2-4a1 1 0 0 1 1.341-.448"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThunderstorm8;
