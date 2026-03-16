import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationRemoveInLc = ({
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
        d="M12 2a9 9 0 0 0-9 9c0 3.026 1.81 5.592 3.895 7.399l3.441 2.983a2.54 2.54 0 0 0 3.328 0l3.44-2.983C19.19 16.592 21 14.026 21 11a9 9 0 0 0-9-9M9.293 8.293a1 1 0 0 1 1.414 0L12 9.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13.414 11l1.293 1.293a1 1 0 0 1-1.414 1.414L12 12.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.586 11 9.293 9.707a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationRemoveInLc;
