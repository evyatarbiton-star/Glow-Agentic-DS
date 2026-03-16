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
        fillRule="evenodd"
        d="M4.464 4.464a5 5 0 0 1 7.072 0L12 4.93l.464-.465a5 5 0 1 1 7.071 7.072l-.464.464.464.464a5 5 0 1 1-7.07 7.071L12 19.072l-.464.464A5 5 0 0 1 3 16V8c0-1.278.488-2.56 1.464-3.536m5.657 1.415A3 3 0 0 0 5 8v7.999a3 3 0 0 0 5.121 2.122l1.172-1.171a1 1 0 0 1 1.414 0l1.172 1.171a3 3 0 1 0 4.242-4.242l-1.171-1.172a1 1 0 0 1 0-1.414l1.171-1.172A3 3 0 1 0 13.88 5.88L12.707 7.05a1 1 0 0 1-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgKickstarter;
