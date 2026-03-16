import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStar = ({
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
        d="M10.609 2.938c.505-1.251 2.277-1.251 2.782 0l1.937 4.802a.5.5 0 0 0 .423.312l4.866.397c1.32.107 1.863 1.747.869 2.621l-3.693 3.248a.5.5 0 0 0-.158.483l1.181 5.367c.295 1.34-1.217 2.34-2.335 1.544l-4.191-2.984a.5.5 0 0 0-.58 0l-4.192 2.984c-1.118.796-2.63-.203-2.335-1.544L6.364 14.8a.5.5 0 0 0-.158-.483L2.513 11.07c-.994-.874-.45-2.514.87-2.621l4.865-.397a.5.5 0 0 0 .423-.312z"
      />
    </svg>
  );
};
export default SvgStar;
