import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquarePlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CreateQuestion = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto p-4 flex-1">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Задать новый вопрос</h1>
          
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Заголовок вопроса</Label>
                  <Input 
                    id="title" 
                    placeholder="Сформулируйте свой вопрос кратко и ясно" 
                  />
                  <p className="text-xs text-muted-foreground">
                    Хороший заголовок привлекает больше внимания и увеличивает шансы получить ответ
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Детали вопроса</Label>
                  <Textarea 
                    id="content" 
                    placeholder="Опишите свой вопрос подробно. Включите все детали, которые могут помочь другим понять вашу проблему." 
                    className="min-h-[200px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tags">Теги</Label>
                  <Input 
                    id="tags" 
                    placeholder="Введите теги через запятую (например: react, javascript, css)" 
                  />
                  <p className="text-xs text-muted-foreground">
                    Добавьте до 5 тегов, чтобы категоризировать свой вопрос
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full sm:w-auto">
                    <MessageSquarePlus className="mr-2 h-4 w-4" />
                    Опубликовать вопрос
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
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

export default CreateQuestion;
