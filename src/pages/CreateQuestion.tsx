import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send, Tag as TagIcon } from "lucide-react";

const CreateQuestion = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // В реальном приложении здесь был бы запрос к API
    alert("В реальном приложении ваш вопрос был бы отправлен!");
    
    // Перенаправление на главную страницу
    navigate("/");
  };

  const isFormValid = title.trim() && content.trim();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="container mx-auto p-4 flex-1">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Назад к списку вопросов
          </Link>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Задать новый вопрос</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Заголовок вопроса</Label>
                  <Input
                    id="title"
                    placeholder="Напишите ясный и конкретный заголовок вопроса"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Описание вопроса</Label>
                  <Textarea
                    id="content"
                    placeholder="Подробно опишите ваш вопрос. Чем больше деталей, тем легче будет получить хороший ответ."
                    className="min-h-[200px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tags" className="flex items-center">
                    <TagIcon className="h-4 w-4 mr-1" />
                    Теги
                  </Label>
                  <Input
                    id="tags"
                    placeholder="Добавьте теги через запятую (например: react, javascript, api)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Теги помогут другим пользователям найти ваш вопрос
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => navigate("/")}>
                  Отмена
                </Button>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700"
                  type="submit"
                  disabled={!isFormValid}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Опубликовать вопрос
                </Button>
              </CardFooter>
            </form>
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

export default CreateQuestion;
