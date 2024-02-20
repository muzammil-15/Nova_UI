"use client"
// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button"
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// export { Button, buttonVariants }



import React from 'react';

interface ButtonProps {
  // Optional variant based on design system (default: default)
  variant?: keyof Variants['variant'];
  // Optional size based on design system (default: default)
  size?: keyof Variants['size'];
  // Optional icon component to render within the button
  icon?: React.ReactElement;
  // Optional disabled state
  disabled?: boolean;
  // Children text content
  children: React.ReactNode;
  // Optional click handler
  onClick?: () => void;
}

type Variants = {
  variant: {
    default: string;
    destructive: string;
    outline: string;
    secondary: string;
    ghost: string;
    link: string;
  };
  size: {
    default: string;
    sm: string;
    lg: string;
    icon: string;
  };
};

const defaultVariants: Variants = {
  
  variant: {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  },
  size: {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  },
};

const Button: React.FC<ButtonProps> = ({
  variant = defaultVariants.variant.default,
  size = defaultVariants.size.default,
  icon,
  disabled = false,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`${variant} ${size} inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer focus:outline-none select-none ${disabled && 'opacity-50 cursor-not-allowed'}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && <div className="flex justify-center items-center">{icon}</div>}
      {children}
    </button>
  );
};

export default Button;


 {/* <Button variant="destructive" size="lg" disabled>
        Destructive Button
      </Button>
      <Button variant="outline" icon={<h1>h1</h1>}>
        Outlined Button with Icon
      </Button>
      <Button  size="sm">
        Click Me
      </Button> */}