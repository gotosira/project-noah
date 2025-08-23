import React from 'react';
import { cn } from '@/lib/utils';

interface FigmaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconOnly?: boolean;
}

const FigmaButton = React.forwardRef<HTMLButtonElement, FigmaButtonProps>(
  ({ 
    className, 
    size = 'lg', 
    children, 
    iconLeft, 
    iconRight, 
    iconOnly = false,
    ...props 
  }, ref) => {
    const baseClasses = cn(
      // Base styles from Figma
      'bg-[#ff6900]',
      'box-border',
      'content-stretch',
      'flex',
      'flex-row',
      'gap-2.5',
      'items-center',
      'justify-center',
      'relative',
      'rounded-lg',
      'font-sarabun',
      'font-medium',
      'text-white',
      'text-[16px]',
      'text-left',
      'text-nowrap',
      'tracking-[0.16px]',
      'leading-[24.8px]',
      'not-italic',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'hover:bg-[#e55a00]',
      'active:bg-[#cc4f00]',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-[#ff6900]/20',
      'focus:ring-offset-2',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      
      // Size variants based on Figma
      size === 'sm' && [
        'px-space-6',
        'py-space-2',
        'min-h-[32px]',
      ],
      size === 'md' && [
        'px-space-6',
        'py-space-2',
        'min-h-[40px]',
      ],
      size === 'lg' && [
        'px-space-6',
        'py-space-2',
        'min-h-[48px]',
      ],
      
      // Icon only styles
      iconOnly && [
        'p-0',
        size === 'sm' && 'w-8 h-8',
        size === 'md' && 'w-10 h-10',
        size === 'lg' && 'w-12 h-12',
      ],
      
      className
    );

    return (
      <button
        ref={ref}
        className={baseClasses}
        {...props}
      >
        {!iconOnly && iconLeft && (
          <span className="inline-flex items-center">
            {iconLeft}
          </span>
        )}
        
        {!iconOnly && children && (
          <span className="inline-flex items-center">
            {children}
          </span>
        )}
        
        {!iconOnly && iconRight && (
          <span className="inline-flex items-center">
            {iconRight}
          </span>
        )}
        
        {iconOnly && (iconLeft || iconRight || children)}
      </button>
    );
  }
);

FigmaButton.displayName = 'FigmaButton';

export { FigmaButton };
export type { FigmaButtonProps };
