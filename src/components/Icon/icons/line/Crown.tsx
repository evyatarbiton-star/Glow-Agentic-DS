import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCrown = ({
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
        d="M17 17H7v2h10zM5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 3a1 1 0 0 1 .857.486l2.412 4.018 4.106-3.285a1 1 0 0 1 1.609.96L18.834 17H5.166L3.016 5.179a1 1 0 0 1 1.609-.96L8.73 7.504l2.412-4.018A1 1 0 0 1 12 3m0 2.944-2.731 4.552L5.462 7.45 6.835 15h10.33l1.373-7.55-3.807 3.046z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCrown;
