import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { getQuestionById, getAnswersForQuestion } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus, ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";
import AnswerCard from "@/components/AnswerCard";
import { Separator } from "@/components/ui/separator";

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const question = getQuestionById(id || "");
  const answers = getAnswersForQuestion(id || "");

  if (!question) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto p-4 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Вопрос не найден</h1>
            <p className="text-muted-foreground">Запрашиваемый вопрос не существует или был удален</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto p-4 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{question.title}</h1>
            <div className="flex gap-2 mb-6 flex-wrap">
              {question.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-accent">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="mb-6 p-6 border rounded-lg">
              <p className="mb-4 whitespace-pre-line">{question.content}</p>
              <div className="flex justify-between items-center text-sm text-muted-foreground mt-6">
                <div>
                  <span>Автор: {question.author}</span>
                  <span className="ml-4">{question.date}</span>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span>{question.votes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5" />
              <h2 className="text-xl font-bold">{answers.length} Ответов</h2>
            </div>
            
            {answers.map((answer) => (
              <AnswerCard key={answer.id} {...answer} />
            ))}
            
            {answers.length === 0 && (
              <div className="text-center p-8 text-muted-foreground">
                <p>На этот вопрос еще нет ответов</p>
                <p className="mt-2">Будьте первым, кто ответит!</p>
              </div>
            )}
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Ваш ответ</h2>
            <Textarea 
              placeholder="Напишите здесь свой ответ..." 
              className="mb-4 min-h-[150px]"
            />
            <Button>
              <MessageSquarePlus className="mr-2 h-4 w-4" />
              Отправить ответ
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          &copy; 2023 ВопросОтвет — Форум вопросов и ответов
        </div>
      </footer>
    </div>
  );
};

export default QuestionDetail;
