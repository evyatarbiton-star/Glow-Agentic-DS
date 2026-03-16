import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSketch = ({
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
        d="M10.626 3.259c.078-.117.026-.282-.112-.252l-3.85.847a2 2 0 0 0-1.1.665l-2.4 2.847A.385.385 0 0 0 3.46 8h3.739a.5.5 0 0 0 .416-.223zm-3.232 7.083A.5.5 0 0 0 6.919 10H3.396a.4.4 0 0 0-.321.63l7.188 10.195a.4.4 0 0 0 .385.175c.178-.025.217-.245.16-.415zm5.799 10.243c-.057.17-.018.39.16.415a.4.4 0 0 0 .385-.176l7.188-10.194a.4.4 0 0 0-.32-.63h-3.524a.5.5 0 0 0-.475.342zM13.919 10a.5.5 0 0 1 .475.658l-1.92 5.757a.5.5 0 0 1-.948 0l-1.919-5.757a.5.5 0 0 1 .475-.658zm-.305-2.777a.5.5 0 0 1-.416.777h-2.395a.5.5 0 0 1-.416-.777l1.417-2.126a.236.236 0 0 1 .393 0zm2.773.554a.5.5 0 0 0 .416.223h3.739a.385.385 0 0 0 .295-.634l-2.4-2.847a2 2 0 0 0-1.1-.665l-3.85-.847c-.138-.03-.19.135-.112.252z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSketch;
