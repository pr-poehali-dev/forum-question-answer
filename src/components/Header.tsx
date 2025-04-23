import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, User, LogIn, Search as SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <MessageCircle className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">ВопросОтвет</span>
          </Link>
          
          <div className="hidden md:flex relative mx-4 flex-1 max-w-md">
            <Input 
              placeholder="Поиск по вопросам..." 
              className="pl-10"
            />
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" className="text-sm hidden sm:flex">
              <User className="h-4 w-4 mr-2" />
              Регистрация
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <LogIn className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Войти</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
