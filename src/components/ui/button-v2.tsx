import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonV2Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconOnly?: boolean;
}

const ButtonV2 = React.forwardRef<HTMLButtonElement, ButtonV2Props>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    children, 
    iconLeft, 
    iconRight, 
    iconOnly = false,
    ...props 
  }, ref) => {
    const baseClasses = cn(
      // Base styles
      'inline-flex items-center justify-center font-sarabun font-medium',
      'transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'border border-transparent',
      
      // Size variants
      size === 'sm' && [
        'px-space-6 py-space-2',
        'text-body-sm',
        'rounded-lg',
        'min-h-[32px]',
      ],
      size === 'md' && [
        'px-space-6 py-space-2',
        'text-body-md',
        'rounded-lg',
        'min-h-[40px]',
      ],
      size === 'lg' && [
        'px-space-6 py-space-2',
        'text-body-md',
        'rounded-lg',
        'min-h-[48px]',
      ],
      
      // Variant styles
      variant === 'primary' && [
        'bg-primary text-primary-foreground hover:brightness-110 active:brightness-95',
        'focus:ring-primary/20',
        'tracking-[0.16px]',
        'leading-[24.8px]',
      ],
      variant === 'secondary' && [
        'bg-secondary text-secondary-foreground hover:brightness-110 active:brightness-95',
        'focus:ring-secondary/20',
      ],
      variant === 'outline' && [
        'bg-transparent border-border hover:bg-accent active:bg-muted',
        'text-foreground',
        'focus:ring-primary/20',
      ],
      variant === 'ghost' && [
        'bg-transparent hover:bg-accent active:bg-muted',
        'text-foreground',
        'focus:ring-primary/20',
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
          <span className={cn(
            'inline-flex items-center',
            size === 'sm' && 'mr-space-2',
            size === 'md' && 'mr-space-2',
            size === 'lg' && 'mr-space-3',
          )}>
            {iconLeft}
          </span>
        )}
        
        {!iconOnly && children && (
          <span className="inline-flex items-center">
            {children}
          </span>
        )}
        
        {!iconOnly && iconRight && (
          <span className={cn(
            'inline-flex items-center',
            size === 'sm' && 'ml-space-2',
            size === 'md' && 'ml-space-2',
            size === 'lg' && 'ml-space-3',
          )}>
            {iconRight}
          </span>
        )}
        
        {iconOnly && (iconLeft || iconRight || children)}
      </button>
    );
  }
);

ButtonV2.displayName = 'ButtonV2';

export { ButtonV2 };
export type { ButtonV2Props };
