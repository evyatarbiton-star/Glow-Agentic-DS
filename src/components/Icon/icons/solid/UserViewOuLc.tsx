import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserViewOuLc = ({
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
        d="M15 14c.218 0 .293.277.126.418A5.99 5.99 0 0 0 13 19v2.5a.5.5 0 0 1-.5.5H7a3 3 0 0 1-3-3 5 5 0 0 1 5-5zM12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 22c1.878 0 3.277-1.693 3.856-2.535a.81.81 0 0 0 0-.93C22.276 17.694 20.878 16 19 16s-3.277 1.693-3.856 2.535a.81.81 0 0 0 0 .93C15.724 20.307 17.122 22 19 22m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserViewOuLc;
