import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPalette = ({
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
        d="M2.218 5.092C2 5.52 2 6.08 2 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 20 4.08 20 5.2 20h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 18.48 22 17.92 22 16.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 4 19.92 4 18.8 4H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874M16.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M13 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M13 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M7 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPalette;
