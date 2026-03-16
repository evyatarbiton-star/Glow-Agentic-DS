import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFacebook = ({
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
        d="M22 12c0 4.996-3.664 9.137-8.452 9.88a.48.48 0 0 1-.548-.482V14h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 1 1-1h1a1 1 0 1 0 0-2h-1a3 3 0 0 0-3 3v2h-1a1 1 0 1 0 0 2h1v7.398a.48.48 0 0 1-.548.483C5.664 21.137 2 16.996 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFacebook;
