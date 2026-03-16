import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMicrochip = ({
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
        d="M21 9a1 1 0 0 0-1-1h-1c0-.988-.013-1.506-.218-1.908a2 2 0 0 0-.874-.874c-.402-.205-.92-.217-1.908-.218V4a1 1 0 1 0-2 0v1h-4V4a1 1 0 0 0-2 0v1c-.988 0-1.506.013-1.908.218a2 2 0 0 0-.874.874C5.013 6.494 5.001 7.012 5 8H4a1 1 0 1 0 0 2h1v4H4a1 1 0 1 0 0 2h1c0 .988.013 1.506.218 1.908a2 2 0 0 0 .874.874c.402.205.92.217 1.908.218v1a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0v-1c.988 0 1.506-.013 1.908-.218a2 2 0 0 0 .874-.874c.205-.402.217-.92.218-1.908h1a1 1 0 1 0 0-2h-1v-4h1a1 1 0 0 0 1-1m-10 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMicrochip;
