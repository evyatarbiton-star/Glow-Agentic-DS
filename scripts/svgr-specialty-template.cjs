/**
 * SVGR template for Glow DS **specialty** (brand/illustration) icons.
 *
 * Unlike line/solid icons:
 * - Colors are NOT replaced — brand fills & strokes stay as-is
 * - Default size is 32 (supports 32 | 40 | any number)
 */

const template = (variables, { tpl }) => {
  return tpl`
import type { SpecialtyIconProps } from '../../Icon.types'

const ${variables.componentName} = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
  const px = typeof size === 'number' ? size : size === 'sm' ? 32 : 40
  return ${variables.jsx}
}

export default ${variables.componentName}
`
}

module.exports = template
