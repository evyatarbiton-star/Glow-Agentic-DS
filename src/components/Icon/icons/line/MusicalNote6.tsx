import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMusicalNote6 = ({
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
        d="M14.824 2.117A3 3 0 0 0 11 5V17.5a1 1 0 1 0 2 0V8.326l3.176.907A3 3 0 0 0 20 6.348v-.49a3 3 0 0 0-2.176-2.884zM13 5a1 1 0 0 1 1.275-.961l3 .857a1 1 0 0 1 .725.961v.49a1 1 0 0 1-1.275.962L13 6.246z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMusicalNote6;
