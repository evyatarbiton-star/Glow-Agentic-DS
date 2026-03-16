import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPie9 = ({
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
        d="M2.154 15.56a8 8 0 0 1 7.275-9.54C10.331 5.956 11 6.692 11 7.5V13h5.5c.808 0 1.544.67 1.48 1.57a8 8 0 0 1-15.826.99m2.303-3.856A6 6 0 1 0 15.917 15H11a2 2 0 0 1-2-2V8.084a6 6 0 0 0-4.543 3.62"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M13 3.5c0-.808.67-1.544 1.57-1.48a8 8 0 0 1 7.41 7.41c.064.901-.672 1.57-1.48 1.57H15a2 2 0 0 1-2-2zm2 .584V9h4.916A6 6 0 0 0 15 4.084"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPie9;
