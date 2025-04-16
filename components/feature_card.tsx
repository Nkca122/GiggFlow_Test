import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

export default function FeatureCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-transparent border border-gray-100 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-md rounded-lg overflow-hidden">
      <CardContent className="pt-6 flex justify-center">
        <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-full">
          <Image
            width={52}
            height={66}
            src={src}
            alt={title}
            className="h-16 w-auto"
          />
        </div>
      </CardContent>
      <CardHeader className="pb-2">
        <h3 className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl leading-tight text-center">
          {title}
        </h3>
      </CardHeader>
      <CardDescription className="px-6 pb-3">
        <p className="text-gray-700 dark:text-gray-200 text-sm text-center">
          {description}
        </p>
      </CardDescription>
      <CardFooter className="flex justify-center pb-6">
        <Button
          variant="ghost"
          className="font-medium text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-200 hover:bg-green-50 dark:hover:bg-green-900/40 group"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 transform group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
}
