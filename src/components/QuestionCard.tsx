import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

export interface QuestionProps {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  answers: number;
  votes: number;
}

const QuestionCard = ({ id, title, content, author, date, tags, answers, votes }: QuestionProps) => {
  return (
    <Link to={`/question/${id}`}>
      <Card className="mb-4 hover:border-primary transition-colors">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-muted-foreground line-clamp-2">{content}</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-accent">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-muted-foreground">
          <div>
            <span>Автор: {author}</span>
            <span className="ml-4">{date}</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" /> {votes}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" /> {answers}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default QuestionCard;
