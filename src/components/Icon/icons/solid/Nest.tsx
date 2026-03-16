import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgNest = ({
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
        d="M19.862 9.445a.477.477 0 0 1-.48.555H16.5a.52.52 0 0 1-.512-.5c-.088-1.885-.674-3.752-1.636-5.248M13.5 10a.48.48 0 0 0 .486-.5c-.088-1.515-.567-3.001-1.317-4.166C11.852 4.064 10.584 3 9 3S6.147 4.064 5.33 5.334C4.582 6.499 4.103 7.985 4.015 9.5c-.015.276.21.5.486.5zM4 12a2 2 0 0 0-2 2v.348q0 .096.002.194c.007.26.225.458.484.458H9a1 1 0 1 1 0 2H3.406c-.376 0-.61.398-.37.689q.135.164.293.317C4.721 19.353 7.387 21 12 21s7.28-1.654 8.67-3c.005-.005-1.67.006-5.67 0a1 1 0 1 1 0-2h6.417a.47.47 0 0 0 .471-.377c.082-.435.112-.868.112-1.275V14a2 2 0 0 0-2-2z"
      />
    </svg>
  );
};
export default SvgNest;
