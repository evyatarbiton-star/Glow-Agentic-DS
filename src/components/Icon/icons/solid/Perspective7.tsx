import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPerspective7 = ({
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
        d="M11 4.99a.5.5 0 0 1 .614-.487l3 .704a.5.5 0 0 1 .386.487V10.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM8.5 11a.5.5 0 0 0 .5-.5V4.285a.5.5 0 0 0-.386-.487l-3.157-.74A2 2 0 0 0 3 5.003V10.5a.5.5 0 0 0 .5.5zM3 13.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v6.222a.5.5 0 0 1-.385.487l-3.157.742A2 2 0 0 1 3 19.005zm8 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4.81a.5.5 0 0 1-.386.487l-3 .706a.5.5 0 0 1-.614-.487zm6.5-.5a.5.5 0 0 0-.5.5v4.104c0 .323.3.56.614.487l1.844-.434A2 2 0 0 0 21 15.71V13.5a.5.5 0 0 0-.5-.5zm3-2a.5.5 0 0 0 .5-.5V8.29a2 2 0 0 0-1.543-1.946l-1.843-.433a.5.5 0 0 0-.614.487V10.5a.5.5 0 0 0 .5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPerspective7;
