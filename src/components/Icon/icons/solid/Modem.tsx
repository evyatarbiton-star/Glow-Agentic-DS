import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgModem = ({
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
        d="M3 15.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 12 5.08 12 6.2 12h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 13.52 21 14.08 21 15.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.402.205-.92.217-1.908.218a1 1 0 0 1-2 0H8a1 1 0 1 1-2 0c-.988 0-1.506-.013-1.908-.218a2 2 0 0 1-.874-.874C3 18.48 3 17.92 3 16.8zm3 .8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5-1a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M15 4a1 1 0 1 1 2 0v8h-2zM9 12V7a1 1 0 0 0-2 0v5z"
      />
    </svg>
  );
};
export default SvgModem;
