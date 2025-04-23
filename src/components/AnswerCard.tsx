import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface AnswerProps {
  id: string;
  content: string;
  author: string;
  date: string;
  votes: number;
  isAccepted?: boolean;
}

const AnswerCard = ({ content, author, date, votes, isAccepted }: AnswerProps) => {
  return (
    <Card className={`mb-4 ${isAccepted ? "border-green-500" : ""}`}>
      <CardContent className="pt-6">
        <p className="mb-2">{content}</p>
        {isAccepted && (
          <div className="flex items-center gap-2 text-green-500 mt-4">
            <Check className="w-5 h-5" />
            <span className="font-medium">Принятый ответ</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          <span>Ответил: {author}</span>
          <span className="ml-4">{date}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <ThumbsUp className="w-4 h-4 mr-1" />
            <span>{votes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <ThumbsDown className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AnswerCard;
