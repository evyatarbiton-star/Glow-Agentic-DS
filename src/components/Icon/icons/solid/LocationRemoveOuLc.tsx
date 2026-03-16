import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationRemoveOuLc = ({
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
        d="M12 2a9 9 0 0 0-9 9c0 3.026 1.81 5.592 3.895 7.399l3.441 2.983a2.54 2.54 0 0 0 2.353.525.445.445 0 0 0 .311-.44V19a6 6 0 0 1 6-6h1.35a.48.48 0 0 0 .475-.373A7.7 7.7 0 0 0 21 11a9 9 0 0 0-9-9m2 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M17.707 16.293a1 1 0 0 0-1.414 1.414L17.586 19l-1.293 1.293a1 1 0 0 0 1.414 1.414L19 20.414l1.293 1.293a1 1 0 0 0 1.414-1.414L20.414 19l1.293-1.293a1 1 0 0 0-1.414-1.414L19 17.586z"
      />
    </svg>
  );
};
export default SvgLocationRemoveOuLc;
