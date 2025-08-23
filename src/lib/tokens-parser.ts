import tokens from '../../tokens.json';

// Helper function to extract color values from OKLCH format
function extractColorValue(value: string): string {
  // Handle OKLCH format: oklch(100% 0 0) -> #ffffff
  if (value.startsWith('oklch(')) {
    // For now, return the OKLCH value as-is since Tailwind supports OKLCH
    return value;
  }
  return value;
}

// Helper function to extract typography values
function extractTypographyValue(typography: any): any {
  return {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
  };
}

// Helper function to extract shadow values
function extractShadowValue(shadows: any[]): string {
  return shadows.map(shadow => 
    `${shadow.offsetX} ${shadow.offsetY} ${shadow.blur} ${shadow.spread} ${shadow.color}`
  ).join(', ');
}

// Parse colors
function parseColors(): Record<string, any> {
  const colors: Record<string, any> = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'color') {
      colors[key] = extractColorValue(value.$value);
    } else if (typeof value === 'object' && !value.$type) {
      // Handle nested color objects (like slate.50, slate.100, etc.)
      const nestedColors: Record<string, string> = {};
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
function parseTypography(): Record<string, any> {
  const typography: Record<string, any> = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'typography') {
      typography[key] = extractTypographyValue(value.$value);
    }
  });
  
  return typography;
}

// Parse spacing
function parseSpacing(): Record<string, string> {
  const spacing: Record<string, string> = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'dimension') {
      spacing[key] = value.$value;
    } else if (typeof value === 'object' && !value.$type) {
      // Handle nested spacing objects
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        if (typeof nestedValue === 'object' && nestedValue.$type === 'dimension') {
          spacing[`${key}-${nestedKey}`] = nestedValue.$value;
        }
      });
    }
  });
  
  return spacing;
}

// Parse border radius
function parseBorderRadius(): Record<string, string> {
  const borderRadius: Record<string, string> = {};
  
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
function parseShadows(): Record<string, string> {
  const shadows: Record<string, string> = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'shadow') {
      shadows[key] = extractShadowValue(value.$value);
    }
  });
  
  return shadows;
}

// Parse breakpoints
function parseBreakpoints(): Record<string, string> {
  const breakpoints: Record<string, string> = {};
  
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
function parseBlur(): Record<string, string> {
  const blur: Record<string, string> = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    if (typeof value === 'object' && value.$type === 'blur') {
      blur[key] = value.$value;
    }
  });
  
  return blur;
}

// Main function to parse all tokens
export function parseDesignTokens() {
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

// Export individual parsers for specific use cases
export { parseColors, parseTypography, parseSpacing, parseBorderRadius, parseShadows, parseBreakpoints, parseBlur };
