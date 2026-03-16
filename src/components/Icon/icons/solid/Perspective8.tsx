import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPerspective8 = ({
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
        d="M13 4.99a.5.5 0 0 0-.614-.487l-3 .704A.5.5 0 0 0 9 5.694V10.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM15.5 11a.5.5 0 0 1-.5-.5V4.285a.5.5 0 0 1 .386-.487l3.157-.74A2 2 0 0 1 21 5.003V10.5a.5.5 0 0 1-.5.5zm5.5 2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v6.222a.5.5 0 0 0 .386.487l3.156.742A2 2 0 0 0 21 19.005zm-8 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4.81a.5.5 0 0 0 .385.487l3 .706a.5.5 0 0 0 .615-.487zM6.5 13a.5.5 0 0 1 .5.5v4.104a.5.5 0 0 1-.615.487l-1.843-.434A2 2 0 0 1 3 15.71V13.5a.5.5 0 0 1 .5-.5zm-3-2a.5.5 0 0 1-.5-.5V8.29a2 2 0 0 1 1.543-1.946l1.843-.433A.5.5 0 0 1 7 6.398V10.5a.5.5 0 0 1-.5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPerspective8;
