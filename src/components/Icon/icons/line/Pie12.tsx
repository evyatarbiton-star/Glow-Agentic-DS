import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPie12 = ({
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
        d="M20.5 13c.808 0 1.544.67 1.48 1.57a8 8 0 0 1-7.41 7.41c-.9.064-1.57-.672-1.57-1.48v-6a1.5 1.5 0 0 1 1.5-1.5zm-.584 2H15v4.916A6 6 0 0 0 19.916 15M19.916 9A6 6 0 0 0 15 4.084V9zm2.064.43c.064.901-.672 1.57-1.48 1.57h-6A1.5 1.5 0 0 1 13 9.5v-6c0-.808.67-1.544 1.57-1.48a8 8 0 0 1 7.41 7.41M4.343 17.657A8 8 0 0 1 9.43 4.02C10.331 3.956 11 4.692 11 5.5v13c0 .808-.67 1.544-1.57 1.48a8 8 0 0 1-5.087-2.323M4 12a6 6 0 0 0 5 5.916V6.084A6 6 0 0 0 4 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPie12;
