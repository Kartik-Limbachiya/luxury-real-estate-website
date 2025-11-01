import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpgradeBannerProps {
  buttonText?: string;
  description?: string;
  onClose?: () => void;
  onClick?: () => void;
  variant?: 'success' | 'info' | 'warning';
}

export function UpgradeBanner({
  buttonText,
  description,
  onClose,
  onClick,
  variant = 'info'
}: UpgradeBannerProps) {
  const variantStyles = {
    success: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900',
    info: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900',
    warning: 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900'
  };

  const textStyles = {
    success: 'text-green-900 dark:text-green-100',
    info: 'text-blue-900 dark:text-blue-100',
    warning: 'text-yellow-900 dark:text-yellow-100'
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-lg border p-4 transition-all",
        variantStyles[variant]
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {description && (
            <p className={cn("text-sm font-medium mb-2", textStyles[variant])}>
              {description}
            </p>
          )}
          {buttonText && onClick && (
            <button
              onClick={onClick}
              className={cn(
                "text-sm font-semibold underline hover:no-underline transition-all",
                textStyles[variant]
              )}
            >
              {buttonText}
            </button>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={cn(
              "rounded-sm opacity-70 hover:opacity-100 transition-opacity",
              textStyles[variant]
            )}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    </div>
  );
}