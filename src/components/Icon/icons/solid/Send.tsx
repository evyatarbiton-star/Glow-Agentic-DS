import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSend = ({
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
        d="M3.022 5.284c-.23-1.598 1.43-2.796 2.875-2.074l14 7c1.475.738 1.474 2.842 0 3.579L5.895 20.78c-1.444.721-3.104-.477-2.873-2.075l.699-4.849a1 1 0 0 1 .99-.857H10a1 1 0 1 0 0-2H4.712a1 1 0 0 1-.99-.857z"
      />
    </svg>
  );
};
export default SvgSend;
