import React from 'react';
import { ClipboardCopy } from 'lucide-react';

interface ConversionResultProps {
  result: string;
  base: string;
  onCopy: () => void;
}

const ConversionResult: React.FC<ConversionResultProps> = ({ result, base, onCopy }) => {
  return (
    <div className="mt-5 bg-cyan-400 bg-opacity-20 p-4 rounded-lg shadow-inner w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="w-full sm:w-5/6 overflow-hidden">
        <h2 className="text-xl font-semibold">
          {base} Value:
        </h2>
        <div className="mt-2 p-2 rounded overflow-x-auto">
          <span className="text-lg font-mono break-all">{result}</span>
        </div>
      </div>
      <button onClick={onCopy} className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
        <ClipboardCopy className="text-gray-700" size={24} />
      </button>
    </div>
  );
};

export default ConversionResult;