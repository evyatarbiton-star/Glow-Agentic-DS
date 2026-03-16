import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationEditOuLc = ({
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
        d="m15.924 19.183-.886 2.126a.5.5 0 0 0 .654.653l2.126-.886Q18 21 18.14 20.86l3.563-3.563a1 1 0 0 0 0-1.414l-.585-.586a1 1 0 0 0-1.415 0L16.14 18.86a1 1 0 0 0-.216.323"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 2a9 9 0 0 0-9 9c0 3.026 1.81 5.592 3.895 7.399l3.441 2.983a2.54 2.54 0 0 0 2.353.525.445.445 0 0 0 .311-.44V19a6 6 0 0 1 6-6h1.35a.48.48 0 0 0 .475-.373A7.7 7.7 0 0 0 21 11a9 9 0 0 0-9-9m2 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationEditOuLc;
