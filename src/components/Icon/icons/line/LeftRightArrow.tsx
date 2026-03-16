import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLeftRightArrow = ({
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
        d="M2 12c0-.552.471-1 1.053-1h17.894c.582 0 1.053.448 1.053 1s-.471 1-1.053 1H3.053C2.47 13 2 12.552 2 12"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M2.293 11.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L4.414 12l4.293-4.293a1 1 0 0 0-1.414-1.414zM16.707 6.293l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L19.586 12l-4.293-4.293a1 1 0 0 1 1.414-1.414"
      />
    </svg>
  );
};
export default SvgLeftRightArrow;
