import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationViewInLc = ({
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
        d="M3 11a9 9 0 0 1 18 0c0 3.026-1.81 5.592-3.895 7.399l-3.441 2.983a2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.592 3 14.026 3 11m12.856.464C15.276 12.308 13.878 14 12 14s-3.277-1.693-3.856-2.536a.81.81 0 0 1 0-.928C8.724 9.693 10.122 8 12 8s3.277 1.693 3.856 2.536a.81.81 0 0 1 0 .928M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationViewInLc;
