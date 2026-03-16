import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVisionPro = ({
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
        d="M12 6C7.394 6 4.79 7.017 3.382 8.581 1.999 10.118 2 11.952 2 12.947V13c0 1.325.653 2.567 1.543 3.457S5.675 18 7 18c1.306 0 2.278-.65 2.99-1.125l.065-.043C10.837 16.311 11.345 16 12 16c.654 0 1.163.31 1.945.832l.065.043C14.722 17.351 15.694 18 17 18c1.325 0 2.567-.652 3.457-1.543S22 14.325 22 13v-.053c0-.995.001-2.83-1.382-4.366C19.211 7.017 16.606 6 12 6"
      />
    </svg>
  );
};
export default SvgVisionPro;
