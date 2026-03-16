import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationImportInLc = ({
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
        d="M3 11a9 9 0 0 1 18 0c0 3.026-1.81 5.592-3.895 7.399l-3.441 2.983a2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.592 3 14.026 3 11m7.293-2.707-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L11.414 12H15a1 1 0 1 0 0-2h-3.586l.293-.293a1 1 0 0 0-1.414-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationImportInLc;
