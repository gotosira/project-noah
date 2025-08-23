const tokens = require('../../tokens.json');

// Helper function to extract color values from OKLCH format
function extractColorValue(value) {
  // Handle OKLCH format: oklch(100% 0 0) -> #ffffff
  if (value.startsWith('oklch(')) {
    // For now, return the OKLCH value as-is since Tailwind supports OKLCH
    return value;
  }
  return value;
}

// Helper function to extract typography values
function extractTypographyValue(typography) {
  return {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
  };
}

// Helper function to extract shadow values
function extractShadowValue(shadows) {
  return shadows.map(shadow => 
    `${shadow.offsetX} ${shadow.offsetY} ${shadow.blur} ${shadow.spread} ${shadow.color}`
  ).join(', ');
}

// Parse colors
function parseColors() {
  const colors = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'color') {
      colors[key] = extractColorValue(value.$value);
    } else if (typeof value === 'object' && !value.$type) {
      // Handle nested color objects (like slate.50, slate.100, etc.)
      const nestedColors = {};
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        if (typeof nestedValue === 'object' && nestedValue.$type === 'color') {
          nestedColors[nestedKey] = extractColorValue(nestedValue.$value);
        }
      });
      if (Object.keys(nestedColors).length > 0) {
        colors[key] = nestedColors;
      }
    }
  });
  
  return colors;
}

// Parse typography
function parseTypography() {
  const typography = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'typography') {
      typography[key] = extractTypographyValue(value.$value);
    }
  });
  
  return typography;
}

// Parse spacing
function parseSpacing() {
  const spacing = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'dimension') {
      spacing[key] = value.$value;
    } else if (typeof value === 'object' && !value.$type) {
      // Handle nested spacing objects
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        if (typeof nestedValue === 'object' && nestedValue.$type === 'dimension') {
          spacing[nestedKey] = nestedValue.$value;
        }
      });
    }
  });
  
  return spacing;
}

// Parse border radius
function parseBorderRadius() {
  const borderRadius = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'dimension') {
      borderRadius[key] = value.$value;
    } else if (typeof value === 'object' && !value.$type) {
      // Handle nested radius objects
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        if (typeof nestedValue === 'object' && nestedValue.$type === 'dimension') {
          borderRadius[`${key}-${nestedKey}`] = nestedValue.$value;
        }
      });
    }
  });
  
  return borderRadius;
}

// Parse shadows
function parseShadows() {
  const shadows = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'shadow') {
      shadows[key] = extractShadowValue(value.$value);
    }
  });
  
  return shadows;
}

// Parse breakpoints
function parseBreakpoints() {
  const breakpoints = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'dimension') {
      breakpoints[key] = value.$value;
    } else if (typeof value === 'object' && !value.$type) {
      // Handle nested breakpoint objects
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        if (typeof nestedValue === 'object' && nestedValue.$type === 'dimension') {
          breakpoints[nestedKey] = nestedValue.$value;
        }
      });
    }
  });
  
  return breakpoints;
}

// Parse blur values
function parseBlur() {
  const blur = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'blur') {
      blur[key] = value.$value;
    }
  });
  
  return blur;
}

// Main function to parse all tokens
function parseDesignTokens() {
  return {
    colors: parseColors(),
    typography: parseTypography(),
    spacing: parseSpacing(),
    borderRadius: parseBorderRadius(),
    boxShadow: parseShadows(),
    screens: parseBreakpoints(),
    blur: parseBlur(),
  };
}

module.exports = {
  parseDesignTokens,
  parseColors,
  parseTypography,
  parseSpacing,
  parseBorderRadius,
  parseShadows,
  parseBreakpoints,
  parseBlur,
};
