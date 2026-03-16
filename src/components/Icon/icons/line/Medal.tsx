import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMedal = ({
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
        d="M17.49 4a.5.5 0 0 1 .43.757L15.433 8.9c.59.333 1.126.749 1.594 1.231l2.606-4.344c1-1.666-.2-3.786-2.143-3.786h-2.383a3 3 0 0 0-2.544 1.41L11.41 5.257l1.18 1.887 1.67-2.674a1 1 0 0 1 .848-.47z"
      />
      <path
        fill={color}
        d="M6.07 4.757A.5.5 0 0 1 6.5 4h2.392a1 1 0 0 1 .848.47L11.945 8H12c.927 0 1.811.18 2.62.507L11.436 3.41A3 3 0 0 0 8.891 2H6.499C4.556 2 3.355 4.12 4.355 5.786l2.61 4.35a7 7 0 0 1 1.593-1.233zM14 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-2 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMedal;
