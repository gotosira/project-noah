import React from 'react';
import { cn } from '@/lib/utils';

interface TokenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconOnly?: boolean;
}

const TokenButton = React.forwardRef<HTMLButtonElement, TokenButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'lg', 
    children, 
    iconLeft, 
    iconRight, 
    iconOnly = false,
    ...props 
  }, ref) => {
    const baseClasses = cn(
      // Base styles
      'box-border flex flex-row items-center justify-center relative rounded-lg font-sarabun font-medium text-[16px] text-center tracking-[0.16px] leading-[24.8px] not-italic transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
      
      // Size variants
      size === 'sm' && [
        'px-space-6 py-space-2',
        'min-h-[32px]',
      ],
      size === 'md' && [
        'px-space-6 py-space-2',
        'min-h-[40px]',
      ],
      size === 'lg' && [
        'px-space-6 py-space-2',
        'min-h-[48px]',
      ],
      
      // Variant styles using tokens
      variant === 'primary' && [
        'bg-primary text-primary-foreground hover:brightness-110 active:brightness-95',
        'focus:ring-primary/20',
      ],
      variant === 'secondary' && [
        'bg-secondary text-secondary-foreground hover:brightness-110 active:brightness-95',
        'focus:ring-secondary/20',
      ],
      variant === 'outline' && [
        'bg-transparent border border-border hover:bg-accent active:bg-muted',
        'text-foreground',
        'focus:ring-primary/20',
      ],
      variant === 'ghost' && [
        'bg-transparent hover:bg-accent active:bg-muted',
        'text-foreground',
        'focus:ring-primary/20',
      ],
      variant === 'danger' && [
        'bg-red-500 hover:bg-red-600 active:bg-red-700',
        'text-white',
        'focus:ring-red-500/20',
      ],
      variant === 'success' && [
        'bg-green-500 hover:bg-green-600 active:bg-green-700',
        'text-white',
        'focus:ring-green-500/20',
      ],
      variant === 'warning' && [
        'bg-amber-500 hover:bg-amber-600 active:bg-amber-700',
        'text-white',
        'focus:ring-amber-500/20',
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
          <span className="inline-flex items-center mr-2.5">
            {iconLeft}
          </span>
        )}
        
        {!iconOnly && children && (
          <span className="inline-flex items-center">
            {children}
          </span>
        )}
        
        {!iconOnly && iconRight && (
          <span className="inline-flex items-center ml-2.5">
            {iconRight}
          </span>
        )}
        
        {iconOnly && (iconLeft || iconRight || children)}
      </button>
    );
  }
);

TokenButton.displayName = 'TokenButton';

export { TokenButton };
export type { TokenButtonProps };
