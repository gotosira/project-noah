import React from 'react';

interface PerfectFigmaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const PerfectFigmaButton = React.forwardRef<HTMLButtonElement, PerfectFigmaButtonProps>(
  ({ 
    className, 
    children, 
    iconLeft, 
    iconRight,
    ...props 
  }, ref) => {
    return (
      <button
        ref={ref}
        className="bg-[#ff6900] box-border flex flex-row items-center justify-center px-4 py-2 relative rounded-lg w-[103px] h-[48px] font-sarabun font-medium text-white text-[16px] text-center tracking-[0.16px] leading-[24.8px] not-italic hover:bg-[#e55a00] active:bg-[#cc4f00] transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ff6900]/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          // Exact Figma specifications
          minHeight: '48px',
          padding: '8px 16px', // 8px vertical, 16px horizontal
          borderRadius: '8px',
          backgroundColor: '#ff6900',
          color: '#ffffff',
          fontSize: '16px',
          lineHeight: '24.8px',
          letterSpacing: '0.16px',
          fontFamily: 'Sarabun, sans-serif',
          fontWeight: 500,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
        {...props}
      >
        {iconLeft && (
          <span style={{ marginRight: '10px' }}>
            {iconLeft}
          </span>
        )}
        
        <span>{children}</span>
        
        {iconRight && (
          <span style={{ marginLeft: '10px' }}>
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

PerfectFigmaButton.displayName = 'PerfectFigmaButton';

export { PerfectFigmaButton };
export type { PerfectFigmaButtonProps };
