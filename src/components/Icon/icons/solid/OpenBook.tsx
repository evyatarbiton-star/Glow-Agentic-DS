import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgOpenBook = ({
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
        d="M13.338 6.056a5.137 5.137 0 0 1 7.742-.55l.627.627A1 1 0 0 1 22 6.84V18a1 1 0 0 1-1.447.894l-.842-.42A4.5 4.5 0 0 0 17.705 18c-.827 0-1.619.328-2.203.912l-.795.795A1 1 0 0 1 13 19V7.07c0-.366.119-.722.338-1.014M2.92 5.507a5.137 5.137 0 0 1 7.742.55c.22.292.338.648.338 1.014V19a1 1 0 0 1-1.707.707l-.795-.795a3.12 3.12 0 0 0-2.203-.912c-.696 0-1.383.162-2.006.473l-.842.421A1 1 0 0 1 2 18.001V6.84a1 1 0 0 1 .293-.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgOpenBook;
