'use client';

import NumberBaseConverter from "@/components/client/input-converter";
import Inquiry from "@/components/client/inquiry";
import ConversionInfo from "@/components/client/conversion-info";
import BlurryBlob from '@/components/animata/background/blurry-blob';


export default function Home() {
 
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <BlurryBlob
          className="rounded-xl opacity-45"
          firstBlobColor="bg-purple-400"
          secondBlobColor="bg-blue-400"
        />
        <div className="absolute top-5 left-2 sm:top-10 sm:left-10">
          <Inquiry />
        </div>
        <NumberBaseConverter />
      </div>
      <div className="w-full px-4 lg:px-10 py-12 dark:bg-gray-200 bg-[#1e1e1e]">
        <ConversionInfo />
      </div>
    </>
  );
}
