import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHairbrush = ({
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
        d="m18.5 5.086 1.14 1.14a4.63 4.63 0 0 1 0 6.548l-6.866 6.866a4.63 4.63 0 0 1-6.548 0l-1.14-1.14zM7.934 18.48a2.63 2.63 0 0 0 3.426-.254l6.866-6.866a2.63 2.63 0 0 0 .254-3.426z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M16.707 3.293a1 1 0 1 0-1.414 1.414L17.086 6.5 18.5 5.086zM6.5 17.086 5.086 18.5l-1.793-1.793a1 1 0 1 1 1.414-1.414zM9.5 14.086 8.086 15.5l-1.293-1.293a1 1 0 1 1 1.414-1.414zM12.5 11.086 11.086 12.5l-1.293-1.293a1 1 0 0 1 1.414-1.414zM15.5 8.086 14.086 9.5l-1.293-1.293a1 1 0 0 1 1.414-1.414z"
      />
    </svg>
  );
};
export default SvgHairbrush;
