import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTrafficCone = ({
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
        d="M12 3a1.7 1.7 0 0 0-1.608 1.148l-1.44 4.19A.5.5 0 0 0 9.424 9h5.152a.5.5 0 0 0 .472-.663l-1.44-4.19A1.7 1.7 0 0 0 12 3M7.706 14a.5.5 0 0 1-.473-.662l.687-2A.5.5 0 0 1 8.393 11h7.214a.5.5 0 0 1 .473.338l.687 2a.5.5 0 0 1-.473.662zM6.674 16a.5.5 0 0 0-.472.337L5.286 19H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1.286l-.916-2.663a.5.5 0 0 0-.472-.337z"
      />
    </svg>
  );
};
export default SvgTrafficCone;
