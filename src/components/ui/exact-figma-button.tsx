import React from 'react';

interface ExactFigmaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const ExactFigmaButton = React.forwardRef<HTMLButtonElement, ExactFigmaButtonProps>(
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
        className="bg-[#ff6900] box-border flex flex-row items-center justify-center px-4 py-2 relative rounded-lg min-h-[48px] font-sarabun font-medium text-white text-[16px] text-center tracking-[0.16px] leading-[24.8px] not-italic hover:bg-[#e55a00] active:bg-[#cc4f00] transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ff6900]/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        {...props}
      >
        {iconLeft && (
          <span className="inline-flex items-center">
            {iconLeft}
          </span>
        )}
        
        <span className="inline-flex items-center">
          {children}
        </span>
        
        {iconRight && (
          <span className="inline-flex items-center">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

ExactFigmaButton.displayName = 'ExactFigmaButton';

export { ExactFigmaButton };
export type { ExactFigmaButtonProps };
