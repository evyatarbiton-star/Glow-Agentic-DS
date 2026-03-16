import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserCrFr = ({
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
        d="M12 7a4 4 0 0 0-2.989 6.659c-1.059.505-1.87 1.236-2.466 1.95a9.1 9.1 0 0 0-1.398 2.322 6 6 0 0 0-.094.249 1.01 1.01 0 0 0 .631 1.269 1 1 0 0 0 1.265-.632l.008-.023.043-.112a7.094 7.094 0 0 1 1.08-1.792c.81-.97 2.051-1.89 3.92-1.89 1.87 0 3.11.92 3.92 1.89A7.1 7.1 0 0 1 17 18.682q.03.076.043.112l.009.023v.002a1 1 0 0 0 1.897-.636 4 4 0 0 0-.095-.252 9.096 9.096 0 0 0-1.398-2.322c-.596-.714-1.407-1.445-2.467-1.95A4 4 0 0 0 12 7m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserCrFr;
