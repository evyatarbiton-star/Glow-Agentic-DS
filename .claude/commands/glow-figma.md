# /glow-figma — Build in Figma with Glow Design System

## When to trigger
Use this skill when a designer asks to create, update, or build anything in Figma — components, pages, variables, styles, or visual references.

## How it works

You are a Glow DS Figma expert. You use the Figma MCP tools (`use_figma`, `create_new_file`, `get_screenshot`) to build designs that match the code DS exactly.

## Prerequisites

The following MCP tools must be available:
- `use_figma` — run Plugin API code on a Figma file
- `create_new_file` — create a new Figma file
- `get_screenshot` — capture a screenshot of a node
- `search_design_system` — search connected DS libraries

If these tools are not available, tell the user to configure the Figma MCP server.

## Step 1: Understand what exists

Before building anything, check the current state:

```javascript
// Run via use_figma to see all pages and top-level frames
const pages = figma.root.children;
return pages.map(p => ({
  name: p.name,
  id: p.id,
  children: p.children.map(c => ({ name: c.name, id: c.id, type: c.type }))
}));
```

## Step 2: Load DS tokens

Read the token files from the codebase to get exact values:
1. `tokens/semantic/colors.ts` — for color values and variable names
2. `tokens/semantic/typography.ts` — for font specs
3. `tokens/semantic/spacing.ts` — for spacing values
4. `tokens/semantic/radii.ts` — for corner radius values

## Step 3: Use existing Figma variables

The file already has these variable collections (created previously):
- **Primitives** — 76 COLOR variables (grey/0 through purple/900)
- **Semantic Colors** — 99 COLOR variables aliasing primitives
- **Primitive Radii** — 10 FLOAT variables (4, 8, 12...999)
- **Semantic Radii** — 11 FLOAT variables aliasing primitives (none, xxxs, xxs...full)
- **Typography** — STRING variables for font-family/default, font-family/display

Always bind to existing variables instead of hardcoding values:
```javascript
// Get variables
const allVars = figma.variables.getLocalVariables("COLOR");
const varMap = {};
for (const v of allVars) varMap[v.name] = v;

// Bind fill to variable
function bindFill(node, variable) {
  const fills = JSON.parse(JSON.stringify(node.fills));
  fills[0] = figma.variables.setBoundVariableForPaint(fills[0], 'color', variable);
  node.fills = fills;
}

// Bind corner radius to variable
const radiusVar = figma.variables.getLocalVariables("FLOAT").find(v => v.name === "radius/xxs");
node.setBoundVariable("topLeftRadius", radiusVar.id);
```

## Step 4: Figma Plugin API rules

### Colors are 0-1 range
```javascript
// CORRECT
{ r: 0.99, g: 0.32, b: 0.004 }  // #fd5201

// WRONG
{ r: 253, g: 82, b: 1 }  // This is 0-255, not 0-1
```

### Load fonts before using them
```javascript
await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
```
Note: Founders Grotesk and Tiempos Headline may not be available via Plugin API. Use Inter as fallback and bind the font-family variable so the user can swap later.

### Fills and strokes are read-only — clone, modify, reassign
```javascript
// CORRECT
const fills = JSON.parse(JSON.stringify(node.fills));
fills[0].color = { r: 1, g: 0, b: 0 };
node.fills = fills;

// WRONG
node.fills[0].color = { r: 1, g: 0, b: 0 };  // read-only error
```

### FILL sizing: set AFTER appendChild
```javascript
parent.appendChild(child);
child.layoutSizingHorizontal = "FILL";  // must be after appendChild
```

### Auto-layout frames — avoid resize on AUTO axis
```javascript
// For vertical auto-layout with fixed width:
frame.layoutMode = "VERTICAL";
frame.primaryAxisSizingMode = "AUTO";    // height grows with content
frame.counterAxisSizingMode = "AUTO";    // width wraps content
// Do NOT call frame.resize() on the AUTO axis — it will get stuck

// For fill behavior in auto-layout children, use layoutGrow:
child.layoutGrow = 1;  // NOT counterAxisSizingMode = "FILL" (doesn't exist)
```

### Component sets for variants
```javascript
// Create individual components with variant naming
const comp = figma.createComponent();
comp.name = "Variant=primary, Size=md, State=Default";

// Combine into a component set
const set = figma.combineAsVariants(components, parentPage);
set.name = "Button";

// Add boolean properties
const key = set.addComponentProperty("Show Icon", "BOOLEAN", false);
// Link to child visibility
child.componentPropertyReferences = { visible: key };
```

## Step 5: Always verify with screenshots

After creating anything, take a screenshot to verify:
```
get_screenshot(fileKey, nodeId)
```

If something looks wrong (empty frame, tiny swatches, misaligned elements), debug and fix before reporting success.

## Common tasks

### Create a visual color reference
Read `tokens/semantic/colors.ts`, create swatch frames bound to variables.

### Create a component set
Read the component file + types file + usage rules, create all variants as Figma components, combine into a component set with variant properties.

### Create a page layout
Read the relevant usage rules, compose frames with auto-layout matching the code structure.

## Hex to Figma color helper
```javascript
function hex(h) {
  h = h.replace('#', '');
  return {
    r: parseInt(h.substring(0, 2), 16) / 255,
    g: parseInt(h.substring(2, 4), 16) / 255,
    b: parseInt(h.substring(4, 6), 16) / 255,
  };
}
```
