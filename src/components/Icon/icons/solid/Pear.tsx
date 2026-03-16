import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPear = ({
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
        d="M16.472 4a3 3 0 0 0-2.683 1.658l-.894 1.79a1 1 0 1 1-1.79-.895L12 4.763A5 5 0 0 1 16.472 2H19a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6.5 2h-2a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 6.5 5h2a.5.5 0 0 0 .5-.5A2.5 2.5 0 0 0 6.5 2"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16 9.82A3.82 3.82 0 0 0 12.18 6h-.36A3.82 3.82 0 0 0 8 9.82c0 1.087-.52 2.088-1.095 3.01a6 6 0 1 0 10.19 0C16.521 11.908 16 10.907 16 9.82"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPear;
