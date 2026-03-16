import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCloudy5 = ({
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
        d="m15.975 9.88-.401-.904A5.002 5.002 0 0 0 6 11v.999l-.799.6A3 3 0 0 0 7 18h9a4 4 0 0 0 .936-7.89zM7 20a5 5 0 0 1-3-9 7 7 0 0 1 13.402-2.835A6 6 0 0 1 16 20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCloudy5;
