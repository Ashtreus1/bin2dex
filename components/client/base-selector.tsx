import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import TooltipWrapper from './tooltip-wrapper';

import { BASES } from './input-converter';

interface BaseSelectorProps {
  base: string;
  onBaseChange: (base: string) => void;
}

const BaseSelector: React.FC<BaseSelectorProps> = ({ base, onBaseChange }) => {
  return (
    <DropdownMenu>
      <TooltipWrapper content="Number Base">
        <DropdownMenuTrigger>
          <Button variant="icon_outline">
            {base + ' Value'} 
          </Button>
        </DropdownMenuTrigger>
      </TooltipWrapper>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose Base</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.values(BASES).map((baseOption) => (
          <DropdownMenuItem key={baseOption} onClick={() => onBaseChange(baseOption)}>
            {baseOption}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BaseSelector;
