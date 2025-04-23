import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">
          ВопросОтвет
        </Link>
        
        <nav className="flex gap-4 items-center">
          <Link to="/">
            <Button variant="ghost">Главная</Button>
          </Link>
          <Link to="/ask">
            <Button>
              <MessageSquarePlus />
              Задать вопрос
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
