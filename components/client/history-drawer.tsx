import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';

import { History } from 'lucide-react';

interface HistoryItem {
  binary: string;
  decimal: number;
  hex: string;
  octal: string;
}

interface ConversionHistoryDrawerProps {
  history: HistoryItem[];
  base: string;
}

const ConversionHistoryDrawer: React.FC<ConversionHistoryDrawerProps> = ({
  history,
  base,
}) => {
  
  const filteredHistory = history.map((item) => ({
    binary: item.binary,
    value: base === 'Decimal' ? item.decimal.toString() :
           base === 'Hexadecimal' ? item.hex :
           base === 'Octal' ? item.octal :
           item.decimal.toString(),
  }));

  return (
    <Drawer>
    <DrawerTrigger>
      <Button variant="icon_outline" size="icon">
        <History />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <div className="flex items-center justify-center">
          <DrawerTitle>Conversion History</DrawerTitle>
          <DrawerClose className="ml-4" />
        </div>
      </DrawerHeader>
      <DrawerDescription>
        {filteredHistory.length > 0 ? (
          <ul className="space-y-2">
            {filteredHistory.map((item, index) => (
              <li key={index} className="container mx-auto border-b border-gray-300 pb-2 w-80">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Binary:</span>
                  <span>{item.binary}</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="font-semibold">{base}:</span>
                  <span>{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No conversion history yet.</p>
        )}
      </DrawerDescription>
      <DrawerFooter>
        <div className="flex justify-center">
          <DrawerClose asChild>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Close
            </button>
          </DrawerClose>
        </div>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>


  );
};

export default ConversionHistoryDrawer;
