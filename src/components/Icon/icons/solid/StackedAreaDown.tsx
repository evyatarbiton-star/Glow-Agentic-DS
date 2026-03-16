import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStackedAreaDown = ({
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
        d="M21.658 16.607a.5.5 0 0 1 .342.474V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4.92a.5.5 0 0 1 .658-.473l6.473 2.157a3 3 0 0 0 1.677.065l2.87-.718a1 1 0 0 1 .558.022zM4.923 4.233C3.59 3.54 2 4.506 2 6.007V9.92a.5.5 0 0 0 .342.474l7.422 2.474a1 1 0 0 0 .559.021l2.87-.717a3 3 0 0 1 1.676.064l6.473 2.158a.5.5 0 0 0 .658-.474v-2.34a2 2 0 0 0-1.008-1.736l-6.147-3.512a2 2 0 0 0-1.477-.204l-2.875.719a1 1 0 0 1-.704-.083z"
      />
    </svg>
  );
};
export default SvgStackedAreaDown;
