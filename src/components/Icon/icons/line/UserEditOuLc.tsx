import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserEditOuLc = ({
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
        d="M9 16a3 3 0 0 0-3 3 1 1 0 0 0 1 1h5a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3 5 5 0 0 1 5-5h6a1 1 0 1 1 0 2zM12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m15.924 19.182-.886 2.126a.5.5 0 0 0 .653.654l2.126-.886a1 1 0 0 0 .323-.216l3.563-3.563a1 1 0 0 0 0-1.415l-.586-.585a1 1 0 0 0-1.414 0L16.14 18.86a1 1 0 0 0-.216.322"
      />
    </svg>
  );
};
export default SvgUserEditOuLc;
