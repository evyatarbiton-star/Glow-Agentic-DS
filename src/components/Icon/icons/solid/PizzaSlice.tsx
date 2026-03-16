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
        d="M20.928 15.442c-.042-.24-.312-.35-.528-.239-.405.207-.994.475-1.76.741C17.11 16.477 14.874 17 12 17s-5.11-.523-6.641-1.056a14 14 0 0 1-1.76-.741c-.218-.112-.492 0-.534.242-.345 1.97.616 3.963 2.703 4.586 1.798.537 3.954.97 6.232.97s4.433-.433 6.23-.97c2.087-.624 3.046-2.618 2.698-4.59"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4.356 12.784a.436.436 0 0 0 .154.638c.33.168.834.4 1.506.633C7.36 14.523 9.373 15 12 15s4.641-.477 5.984-.945a12 12 0 0 0 1.507-.633.43.43 0 0 0 .152-.63l-1.801-2.683c-.14-.207-.41-.275-.65-.205a2.5 2.5 0 0 1-2.654-3.953c.155-.196.195-.471.056-.678l-.934-1.391a2 2 0 0 0-3.32-.001zM11 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPizzaSlice;
