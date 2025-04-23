import Header from "@/components/Header";
import QuestionCard from "@/components/QuestionCard";
import { questions } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto p-4 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Вопросы сообщества</h1>
            <div className="relative mb-6">
              <Input 
                placeholder="Найти вопрос..." 
                className="pl-10" 
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="flex gap-2 mb-6">
              <Button variant="secondary" className="text-sm">Все</Button>
              <Button variant="ghost" className="text-sm">Новые</Button>
              <Button variant="ghost" className="text-sm">Популярные</Button>
              <Button variant="ghost" className="text-sm">Без ответа</Button>
            </div>
          </div>
          
          <div>
            {questions.map((question) => (
              <QuestionCard key={question.id} {...question} />
            ))}
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

export default Index;
