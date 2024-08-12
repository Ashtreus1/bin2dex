import React from 'react';
import FlippingCard from '@/components/animata/list/flipping-cards';

const ConversionInfo: React.FC = () => {
  return (
    <div className="max-w-[90rem] mx-auto px-4 py-16">
      <h1 className="text-5xl font-extrabold dark:text-gray-900 text-gray-200 mb-12 text-center">
        Number Base Conversions
      </h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Explore different number base conversions with interactive cards. Flip each card to see examples and more details.
      </p>
      <FlippingCard list={
        [
          {
            title: "Binary to Decimal",
            formula: "Decimal = ∑(bi × 2^i)",
            example: `Convert binary 1011 to decimal:

1011₂ = (1 × 2^3) + (0 × 2^2) + (1 × 2^1) + (1 × 2^0)
       = 8 + 0 + 2 + 1
       = 11₁₀` 
          },
          {
            title: "Decimal to Binary",
            formula: "Divide by 2 and record remainders",
            example: `Convert decimal 13 to binary:

13 ÷ 2 = 6, remainder 1
 6 ÷ 2 = 3, remainder 0
 3 ÷ 2 = 1, remainder 1
 1 ÷ 2 = 0, remainder 1

Binary = 1101`
          },
          {
            title: "Binary to Hexadecimal",
            formula: "Group into 4-bit sets and convert",
            example: `Convert binary 11010110 to hexadecimal:

Group into 4-bit groups: 1101 0110
Convert each group:
 1101 = D
 0110 = 6

Hexadecimal = D6`
          },
          {
            title: "Hexadecimal to Binary",
            formula: "Convert each hex digit to 4-bit binary",
            example: `Convert hexadecimal 2F to binary:

2 = 0010
F = 1111

Binary = 00101111`,
          },
          { 
            title: "Binary to Octal",
            formula: "Group into 3-bit sets and convert",
            example: `Convert binary 110101 to octal:

Group into 3-bit groups: 110 101
Convert each group:
 110 = 6
 101 = 5

Octal = 65`,
          },
          {
            title: "Octal to Binary",
            formula: "Convert each octal digit to 3-bit binary",
            example: `Convert octal 47 to binary:

4 = 100
7 = 111

Binary = 100111`
          },
        ]
      }/>
    </div>
  );
};

export default ConversionInfo;