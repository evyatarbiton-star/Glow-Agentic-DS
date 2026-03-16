import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMusicalNote8 = ({
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
        d="M13.55 2.083A2 2 0 0 0 11 4.006V17.5a1 1 0 1 0 2 0V8.326l4.45 1.271A2 2 0 0 0 20 7.674v-2.24a2 2 0 0 0-1.45-1.923z"
      />
      <path fill={color} d="M8.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9" />
    </svg>
  );
};
export default SvgMusicalNote8;
