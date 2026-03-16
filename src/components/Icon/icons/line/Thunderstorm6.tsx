import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThunderstorm6 = ({
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
        d="m14.094 6.135-.681-.919a3.001 3.001 0 0 0-5.385 1.37l-.15 1.09-1 .458A1.5 1.5 0 0 0 7.5 11H8a1 1 0 1 1 0 2h-.5a3.5 3.5 0 0 1-1.453-6.685 5.001 5.001 0 0 1 8.972-2.29 4.5 4.5 0 0 1 .98 8.947c-.548.061-.999-.42-.999-.972s.459-.94 1-1.05a2.5 2.5 0 0 0-.77-4.936z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12.447 12.106a1 1 0 0 1 .447 1.341L11.618 16H14a1 1 0 0 1 .894 1.447l-2 4a1 1 0 1 1-1.788-.894L12.382 18H10a1 1 0 0 1-.894-1.447l2-4a1 1 0 0 1 1.341-.447"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThunderstorm6;
