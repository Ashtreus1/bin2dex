'use client'

import { useState } from 'react';

import TooltipWrapper from '@/components/client/tooltip-wrapper';

import { MessageCircleQuestion } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const Inquiry = () => {
  const [isToggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!isToggle); // Toggles the state
  }

  return (
    <>
      <TooltipWrapper content="More Info">
        <Sheet open={isToggle} onOpenChange={handleToggle}>
          <SheetTrigger asChild>
            <Button variant="icon_outline" size="icon" className="cursor-pointer">
              <MessageCircleQuestion size={30} className="text-cyan-400"/>
            </Button>
          </SheetTrigger>
          <SheetContent className="rounded-lg pt-20 shadow-lg max-w-md mx-auto">
            <SheetHeader className="border-b pb-4 mb-4">
              <SheetTitle className="text-3xl font-bold text-gray-800">Bin
                <span className="text-cyan-400">2</span>
              Dec</SheetTitle>
              <SheetDescription className="text-gray-600 dark:text-gray-400 mt-2">
                This application allows you to convert binary numbers to other numeral systems and vice versa.
              </SheetDescription>
            </SheetHeader>
            <h2 className="font-semibold">Features</h2>
            <div className="p-5">
              <ul className="list-disc list-inside space-y-2 [&>li:nth-child(odd)]:text-blue-500 [&>li:nth-child(even)]:text-green-500">
                <li>Binary to Decimal Conversion</li>
                <li>Binary to Hexadecimal Conversion</li>
                <li>Binary to Octal Conversion</li>
                <li>Vice versa conversions...</li>
                <li>Show conversion history</li>
                <li>Formula & solution examples</li>
              </ul>
            </div>
            <div className="mt-6 text-right text-sm text-gray-500 dark:text-gray-400">
              <a href="https://github.com/Ashtreus1" target="_blank">
              	Developed by: <span className="font-semibold hover:text-cyan-400">@keiru_dev</span>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </TooltipWrapper>
    </>
  );
}

export default Inquiry;
