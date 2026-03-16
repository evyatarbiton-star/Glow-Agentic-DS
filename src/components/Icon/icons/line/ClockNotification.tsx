import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgClockNotification = ({
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
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 3.333a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333M1.667 10a8.333 8.333 0 1 1 16.667 0 8.333 8.333 0 0 1-16.667 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 5c.46 0 .833.373.833.833V10a.83.83 0 0 1-.244.59l-1.666 1.666a.833.833 0 1 1-1.179-1.179l1.423-1.422V5.833c0-.46.373-.833.833-.833"
        clipRule="evenodd"
      />
      <circle cx={15} cy={4} r={3} fill="#F23C3C" />
    </svg>
  );
};
export default SvgClockNotification;
