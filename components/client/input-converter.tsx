'use client'

import React, { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { ClipboardCopy, XCircle, Repeat, Eye } from 'lucide-react';
import ConversionHistoryDrawer from './history-drawer';
import { ModeToggle } from '@/components/mode-toggle';
import BaseSelector from './base-selector';
import ConversionResult from './conversion-result';
import ErrorMessage from './error-message';
import TooltipWrapper from './tooltip-wrapper';

import BoldCopy from '@/components/animata/text/bold-copy';

export const BASES = {
  DECIMAL: 'Decimal',
  HEXADECIMAL: 'Hexadecimal',
  OCTAL: 'Octal',
};

interface HistoryItem {
  binary: string;
  decimal: number;
  hex: string;
  octal: string;
}

const NumberBaseConverter: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [base, setBase] = useState<string>(BASES.DECIMAL);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isReversed, setIsReversed] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    let validInput: RegExp;

    if (isReversed) {
      switch (base) {
        case BASES.HEXADECIMAL:
          validInput = /^[0-9A-Fa-f]*$/;
          break;
        case BASES.OCTAL:
          validInput = /^[0-7]*$/;
          break;
        case BASES.DECIMAL:
        default:
          validInput = /^[0-9]*$/;
          break;
      }
    } else {
      validInput = /^[01]*$/;
    }

    if (validInput.test(value)) {
      setError('');
      updateConversion(value);
    } else {
      setError(`Please enter valid ${isReversed ? base.toLowerCase() : 'binary'} digits.`);
      setResult(null);
    }
  };

  const handleBaseChange = (selectedBase: string) => {
    setBase(selectedBase);
    setInput('');
    setResult(null);
    setError('');
  };

  const toggleReverse = () => {
    setIsReversed((prev) => !prev);
    setInput('');
    setResult(null);
    setError('');
  };

  const updateConversion = (value: string) => {
    if (value === '') {
      setResult(null);
      return;
    }

    let convertedValue: string | null = null;
    let decimalValue: number;

    try {
      if (isReversed) {
        decimalValue = parseInt(value, getBaseNumber(base));
        convertedValue = decimalValue.toString(2);
      } else {
        decimalValue = parseInt(value, 2);
        convertedValue = base === BASES.HEXADECIMAL
          ? decimalValue.toString(16).toUpperCase()
          : base === BASES.OCTAL
          ? decimalValue.toString(8)
          : decimalValue.toString();
      }

      setResult(convertedValue);

      // Update history for all valid inputs
      const newHistoryItem: HistoryItem = {
        binary: isReversed ? convertedValue : value,
        decimal: decimalValue,
        hex: decimalValue.toString(16).toUpperCase(),
        octal: decimalValue.toString(8),
      };

      setHistory((prevHistory) => [newHistoryItem, ...prevHistory.slice(0, 4)]);
    } catch (error) {
      setError('Invalid input for conversion');
      setResult(null);
    }
  };

  const getBaseNumber = (baseString: string): number => {
    switch (baseString) {
      case BASES.HEXADECIMAL: return 16;
      case BASES.OCTAL: return 8;
      case BASES.DECIMAL:
      default: return 10;
    }
  };

  const clearInputOutput = () => {
    setInput('');
    setResult(null);
    setError('');
  };

  const copyToClipboard = () => {
    if (result !== null) {
      navigator.clipboard.writeText(result);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-3xl px-3">
      <div className="flex justify-between items-center w-full max-w-xl p-3 rounded border border-gray-500">
        <TooltipWrapper content="See conversion history">
          <ConversionHistoryDrawer history={history} base={base} />
        </TooltipWrapper>

        <TooltipWrapper content="Theme mode [Light/Dark]">
          <ModeToggle />
        </TooltipWrapper>
      </div>

      <BoldCopy text={isReversed ? `${base.slice(0, 3)}2Bin` : `Bin2${base.slice(0, 3)}`} backgroundTextClassName="dark:text-gray-700 text-gray-200 cursor-pointer"/>

      <hr className="w-1/2 "/>

      <ErrorMessage error={error} />

      <div className="flex justify-between items-center w-full max-w-xl mt-5 rounded border border-gray-500 p-3">
        <TooltipWrapper content="Clear Input">
          <Button onClick={clearInputOutput} variant="icon_outline">
            <XCircle size={20} />
          </Button>
        </TooltipWrapper>

        <BaseSelector base={base} onBaseChange={handleBaseChange} />
      </div>

      <div className="container mx-auto w-full max-w-xl mt-10">
        <div className="flex justify-center items-center w-full max-w-xl space-x-5">
          <Input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder={`Enter ${isReversed ? base.toLowerCase() : 'binary'} number`}
          />

          <TooltipWrapper content="Reverse Conversion">
            <Button onClick={toggleReverse} variant="icon_outline" className="mt-5">
              <Repeat size={20} />
            </Button>
          </TooltipWrapper>
        </div>

        {result !== null && (
          <>
            <ConversionResult result={result} base={isReversed ? 'Binary' : base} onCopy={copyToClipboard} />
          </>
        )}
      </div>
    </div>
  );
};

export default NumberBaseConverter;