import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgImageCrFrViewOuLc = ({
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
        d="M21.996 12.277c-.006.236-.01.354-.065.458a.52.52 0 0 1-.218.212c-.105.053-.232.053-.487.053H19"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M16.002 13.526c.076.05.114.075.125.104q.016.04-.002.079c-.013.029-.053.052-.134.099A6 6 0 0 0 13 19v2.226c0 .255 0 .382-.053.487a.52.52 0 0 1-.212.218c-.104.056-.222.059-.458.065Q12.14 22 12 22a10 10 0 0 1-8.562-4.831l2.964-1.833c.465-.288.52-.31.56-.32a.5.5 0 0 1 .2-.01c.04.006.097.022.589.261l.528.258.09.043c.374.184.75.368 1.159.422a2.5 2.5 0 0 0 1.06-.09c.394-.12.735-.364 1.073-.607l.082-.058 2.505-1.79c.547-.39.616-.42.662-.433a.5.5 0 0 1 .237-.005c.046.01.117.038.68.405z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 22c1.878 0 3.277-1.693 3.856-2.535a.81.81 0 0 0 0-.93C22.276 17.694 20.878 16 19 16s-3.277 1.693-3.856 2.535a.81.81 0 0 0 0 .93C15.724 20.307 17.122 22 19 22m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgImageCrFrViewOuLc;
