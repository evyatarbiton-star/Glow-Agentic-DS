import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgListBoxes = ({
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
        d="M14 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM14 16a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM3.218 4.092C3 4.52 3 5.08 3 6.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 11 5.08 11 6.2 11h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C11 9.48 11 8.92 11 7.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C9.48 3 8.92 3 7.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874M3.218 14.092C3 14.52 3 15.08 3 16.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C11 19.48 11 18.92 11 17.8v-1.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C9.48 13 8.92 13 7.8 13H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874"
      />
    </svg>
  );
};
export default SvgListBoxes;
