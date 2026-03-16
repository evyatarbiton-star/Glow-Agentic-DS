import type { SpecialtyIconProps } from "../../Icon.types";
const SvgFamily = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#Family_svg__a)">
        <path
          fill="#FE9767"
          d="M28.448 31.974S33.43 16.262 18.31 16.262c-19.408 0-14.824 15.712-14.824 15.712z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="M19.807 11.235c2.376-2.656 1.12-7.584-2.792-7.984-3.48-.352-5.224 2.928-4.8 6.144.52 3.976 5.224 4.496 7.6 1.84M5.04 10.237c-1.975 1.568-1.687 5.152.993 5.896 2.384.664 3.992-1.416 4.08-3.712.112-2.832-3.104-3.752-5.072-2.192M23.199 11.838c-.784 2.392 1.432 5.232 4.072 4.376 2.352-.76 2.552-3.376 1.368-5.344-1.464-2.432-4.656-1.432-5.44.968M14.095 14.293c-6.6 3.624-6.049 16.8-6.049 16.8M5.274 17.676C.258 22.5 1.994 31.1 1.994 31.1M19.473 13.887c6.6 3.624 4.56 17.208 4.56 17.208M28.23 17.676c3.465 3.408 1.729 13.632 1.729 13.632"
        />
      </g>
      <defs>
        <clipPath id="Family_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgFamily;
