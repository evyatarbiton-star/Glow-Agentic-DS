import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgImageCrFrSearchOuLc = ({
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
        d="M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4M14.91 13.013a.5.5 0 0 1 .237-.005c.01.002.068.015.322.174a1 1 0 0 0 1.062-1.694c-.277-.174-.581-.35-.95-.433a2.5 2.5 0 0 0-1.187.026c-.445.118-.83.395-1.215.67l-.093.067-2.505 1.79c-.48.341-.539.369-.58.381a.5.5 0 0 1-.212.018c-.042-.005-.105-.022-.635-.28l-.528-.257-.083-.04c-.349-.171-.7-.343-1.08-.4a2.5 2.5 0 0 0-1 .05c-.373.096-.705.302-1.034.506l-.079.05-1.876 1.159a1 1 0 0 0 1.052 1.701l1.876-1.16c.465-.287.521-.31.56-.32a.5.5 0 0 1 .2-.01c.04.006.097.023.589.262l.528.257.09.044c.374.183.75.367 1.159.421a2.5 2.5 0 0 0 1.06-.089c.394-.12.735-.365 1.074-.608l.08-.058 2.506-1.789c.547-.39.616-.42.662-.433"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 1 1 0 1 1 0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 5.708 1.293l1 1a1 1 0 0 1-1.415 1.414l-1-1A3 3 0 0 1 15 18"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgImageCrFrSearchOuLc;
