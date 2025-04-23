import Header from "@/components/Header";
import QuestionCard from "@/components/QuestionCard";
import { questions } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="container mx-auto p-4 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">Вопросы сообщества</h1>
              <Link to="/ask">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Задать вопрос
                </Button>
              </Link>
            </div>
            <div className="relative mb-6">
              <Input 
                placeholder="Найти вопрос..." 
                className="pl-10" 
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              <Button variant="secondary" className="text-sm">Все</Button>
              <Button variant="ghost" className="text-sm">Новые</Button>
              <Button variant="ghost" className="text-sm">Популярные</Button>
              <Button variant="ghost" className="text-sm">Без ответа</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {questions.length > 0 ? (
              questions.map((question) => (
                <QuestionCard key={question.id} {...question} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                <p>Вопросов пока нет. Будьте первым, кто задаст вопрос!</p>
              </div>
            )}
          </div>
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

export default Index;
