import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStackedAreaUp = ({
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
        d="M2.342 16.607A.5.5 0 0 0 2 17.08V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.92a.5.5 0 0 0-.658-.473l-6.473 2.157a3 3 0 0 1-1.677.065l-2.87-.718a1 1 0 0 0-.558.022zM19.077 4.233C20.41 3.54 22 4.506 22 6.007V9.92a.5.5 0 0 1-.342.474l-7.422 2.474a1 1 0 0 1-.559.021l-2.87-.717a3 3 0 0 0-1.676.064l-6.473 2.158A.5.5 0 0 1 2 13.919v-2.34a2 2 0 0 1 1.008-1.736l6.147-3.512a2 2 0 0 1 1.477-.204l2.875.719a1 1 0 0 0 .704-.083z"
      />
    </svg>
  );
};
export default SvgStackedAreaUp;
