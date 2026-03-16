import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgKickstarter = ({
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
        d="M11.536 4.464A5 5 0 0 0 3 8v8a5 5 0 0 0 8.536 3.536L12 19.07l.464.464a5 5 0 1 0 7.071-7.07L19.072 12l.464-.464a5 5 0 1 0-7.07-7.072L12 4.93z"
      />
    </svg>
  );
};
export default SvgKickstarter;
