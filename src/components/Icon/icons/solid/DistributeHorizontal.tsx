import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDistributeHorizontal = ({
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
        d="M8 9.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C9.52 6 10.08 6 11.2 6h1.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C16 7.52 16 8.08 16 9.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C14.48 18 13.92 18 12.8 18h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C8 16.48 8 15.92 8 14.8z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M5 4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0zm16 0a1 1 0 1 0-2 0v16a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDistributeHorizontal;
