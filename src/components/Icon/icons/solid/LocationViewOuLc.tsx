import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationViewOuLc = ({
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
        d="M19 22c1.878 0 3.277-1.693 3.856-2.535a.81.81 0 0 0 0-.93C22.276 17.694 20.878 16 19 16s-3.277 1.693-3.856 2.535a.81.81 0 0 0 0 .93C15.724 20.307 17.122 22 19 22m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
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
export default SvgLocationViewOuLc;
