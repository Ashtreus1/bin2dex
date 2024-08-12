import React from 'react';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipWrapperProps {
  content: string;
  children: React.ReactNode;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ content, children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipWrapper;
