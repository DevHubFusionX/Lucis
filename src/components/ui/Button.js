import { cn } from '../../lib/utils';
import { theme } from '../../lib/theme';

const buttonVariants = {
  default: `text-white hover:opacity-90`,
  outline: `border bg-white hover:opacity-90`,
  ghost: `hover:opacity-80`,
  copper: `text-white hover:opacity-90`
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export function Button({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  style = {},
  ...props 
}) {
  const getDefaultStyle = () => {
    switch (variant) {
      case 'default':
        return { backgroundColor: theme.colors.copper.DEFAULT, ...style };
      case 'outline':
        return { 
          borderColor: theme.colors.border, 
          color: theme.colors.text.primary,
          ...style 
        };
      case 'ghost':
        return { 
          backgroundColor: 'transparent', 
          color: theme.colors.text.secondary,
          ...style 
        };
      case 'copper':
        return { backgroundColor: theme.colors.copper.DEFAULT, ...style };
      default:
        return style;
    }
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      style={{
        focusRingColor: theme.colors.copper.DEFAULT + '40',
        ...getDefaultStyle()
      }}
      {...props}
    >
      {children}
    </button>
  );
}