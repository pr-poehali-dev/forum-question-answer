import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import AnswerCard from "@/components/AnswerCard";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { getQuestionById, getAnswersForQuestion } from "@/lib/mock-data";
import { ThumbsUp, ArrowLeft, MessageCircle, Send } from "lucide-react";

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [newAnswer, setNewAnswer] = useState("");
  
  // Если id не определен, используем пустую строку для предотвращения ошибок
  const questionId = id || "";
  const question = getQuestionById(questionId);
  const answers = getAnswersForQuestion(questionId);

  if (!question) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto p-4 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Вопрос не найден</h1>
            <Link to="/">
              <Button>Вернуться на главную</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleSubmitAnswer = () => {
    // В реальном приложении здесь был бы запрос к API
    alert("В реальном приложении ваш ответ был бы отправлен!");
    setNewAnswer("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="container mx-auto p-4 flex-1">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Назад к списку вопросов
          </Link>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">{question.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{question.content}</p>
              <div className="flex gap-2 flex-wrap">
                {question.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground">
              <div>
                <span>Автор: {question.author}</span>
                <span className="ml-4">{question.date}</span>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" /> {question.votes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" /> {question.answers}
                </span>
              </div>
            </CardFooter>
          </Card>
          
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            Ответы ({answers.length})
          </h2>
          
          {answers.length > 0 ? (
            <div className="space-y-4 mb-8">
              {answers.map((answer) => (
                <AnswerCard key={answer.id} {...answer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500 mb-8 bg-white rounded-lg border">
              <p>На этот вопрос еще нет ответов. Будьте первым!</p>
            </div>
          )}
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ваш ответ</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Напишите ваш ответ здесь..."
                className="min-h-[150px]"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={handleSubmitAnswer}
                disabled={!newAnswer.trim()}
              >
                <Send className="mr-2 h-4 w-4" />
                Отправить ответ
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <footer className="border-t py-6 text-center text-sm text-muted-foreground bg-white">
        <div className="container mx-auto">
          &copy; 2023 ВопросОтвет — Форум вопросов и ответов
        </div>
      </footer>
    </div>
  );
};

export default QuestionDetail;
