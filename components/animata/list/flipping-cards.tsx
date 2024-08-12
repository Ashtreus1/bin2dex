import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps {
  show: React.ReactNode;
  reveal: React.ReactNode;
}

interface CardDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  formula: string;
  example: string;
}

interface FlippingCardProps {
  list: CardDetailsProps[];
}

const Card = ({ show, reveal }: CardProps) => {
  const common = "absolute flex w-full h-full [backface-visibility:hidden] rounded-lg shadow-md transition-all duration-300";
  
  return (
    <div className={cn("group h-[28rem] w-96 [perspective:1000px]")}>
      <div className={cn(
        "relative h-full transition-all delay-75 duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]",
      )}>
        <div className={cn("bg-white", common)}>{show}</div>
        <div className={cn("[transform:rotateY(180deg)]", common, "bg-gradient-to-br from-indigo-500 to-purple-600")}>
          {reveal}
        </div>
      </div>
    </div>
  );
};

const CardDetails = ({ title, formula, example }: CardDetailsProps) => {
  return (
    <Card
      show={
        <div className="flex w-full h-full flex-col justify-between p-8 text-base">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>
            <span className="text-sm text-gray-600">Formula:</span>
            <span className="block mt-2 text-lg font-medium text-gray-800">{formula}</span>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-gray-600 mr-2 text-lg">Flip for example</span>
            <ArrowRight size={24} className="text-gray-600" />
          </div>
        </div>
      }
      reveal={
        <div className="flex w-full h-full flex-col justify-between p-8 text-base text-white">
          <h1 className="font-serif text-3xl font-bold text-wrap mb-4">
            {title}
          </h1>
          <div className="mt-4 flex-grow overflow-y-auto">
            <pre className="whitespace-pre-wrap text-wrap text-lg">{example}</pre>
          </div>
          <div className="flex items-center justify-end mt-4">
            <span className="text-lg">Flip back</span>
            <ArrowRight size={24} className="ml-2" />
          </div>
        </div>
      }
    />
  );
};

export default function FlippingCard({ list }: FlippingCardProps) {
  return (
    <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-lg:grid-cols-1">
      {list.map((item, index) => (
        <CardDetails
          key={`card_${index}`}
          title={item.title}
          formula={item.formula}
          example={item.example}
        />
      ))}
    </div>
  );
}