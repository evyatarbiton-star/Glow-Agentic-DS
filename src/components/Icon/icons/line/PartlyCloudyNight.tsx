import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPartlyCloudyNight = ({
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
        d="M12.588 6.556a3.5 3.5 0 0 1 2.024-1.445 5.51 5.51 0 0 0 4.274 4.276c-.1.382-.262.737-.476 1.056a1 1 0 1 0 1.662 1.114A5.5 5.5 0 0 0 21 8.5a1 1 0 0 0-1-1A3.5 3.5 0 0 1 16.5 4v-.002a1 1 0 0 0-1-1c-1.909 0-3.59.973-4.575 2.446a1 1 0 1 0 1.663 1.112M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 6a1 1 0 0 1 0 2 1 1 0 0 1-2 0 1 1 0 0 1 0-2 1 1 0 0 1 2 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m14.077 13.851-.426-.877a3.5 3.5 0 0 0-6.423.28l-.264.692-.652.353a2.5 2.5 0 0 0 .908 4.685l.139.016h7.282l.14-.015a2.5 2.5 0 0 0 .249-4.93zM15 20.972V21H7v-.027a4.5 4.5 0 0 1-1.64-8.432 5.502 5.502 0 0 1 10.09-.44 4.502 4.502 0 0 1-.45 8.872"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPartlyCloudyNight;
