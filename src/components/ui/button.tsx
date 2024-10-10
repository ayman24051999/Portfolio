// Button.tsx
import React from "react";

export enum btnVariant {
    primary = "primary",
    secondary = "secondary",
    transparent = "transparent",
}

interface IButtonProps {
    variant?: btnVariant;
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string; // ? = optional property
}

function Button({
    variant = btnVariant.primary,
    children,
    onClick,
    disabled,
    className,
}: IButtonProps) {
    return (
        <button
            onClick={() => {
                if (onClick) onClick();
            }}
            disabled={disabled}
            className={`btn-${variant} ${className || ""}`}>
            {children}
        </button>
    );
}

export default Button;
