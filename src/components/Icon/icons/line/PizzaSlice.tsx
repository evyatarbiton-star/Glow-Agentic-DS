import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPizzaSlice = ({
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
        d="m17.26 10.276-2.727-4.083a2.5 2.5 0 1 0 2.726 4.083M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.495 4.336c-1.187-1.779-3.802-1.779-4.99 0L3.968 12.63c-.862 1.29-1.163 2.833-.841 4.22.328 1.41 1.301 2.629 2.878 3.164 1.618.55 3.644.987 5.997.987a18.6 18.6 0 0 0 5.996-.987c1.577-.535 2.55-1.754 2.878-3.165.322-1.386.02-2.929-.84-4.219zm-3.326 1.11a1 1 0 0 1 1.663 0l5.47 8.192a7 7 0 0 1-.877.44C16.368 14.523 14.626 15 12 15s-4.368-.477-5.425-.922a7 7 0 0 1-.877-.44zM5.006 15.544c-.018.297.006.584.068.852.182.782.693 1.426 1.573 1.725 1.443.49 3.251.88 5.354.88 2.102 0 3.91-.39 5.353-.88.88-.3 1.391-.943 1.573-1.725a3 3 0 0 0 .068-.852 9 9 0 0 1-.794.377c-1.318.556-3.326 1.079-6.2 1.079s-4.883-.523-6.201-1.078a9 9 0 0 1-.794-.378"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPizzaSlice;
