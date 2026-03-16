import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDistributeVertical = ({
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
        d="M9.2 16c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C6 14.48 6 13.92 6 12.8v-1.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 8 8.08 8 9.2 8h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 9.52 18 10.08 18 11.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C16.48 16 15.92 16 14.8 16z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 19a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zM4 3a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDistributeVertical;
