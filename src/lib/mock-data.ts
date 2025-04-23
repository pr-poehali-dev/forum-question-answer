import { QuestionProps } from "@/components/QuestionCard";
import { AnswerProps } from "@/components/AnswerCard";

export const questions: QuestionProps[] = [
  {
    id: "1",
    title: "Как использовать React Query для кэширования запросов?",
    content: "Я новичок в React Query и хотел бы узнать, как правильно настроить кэширование запросов к API. Какие есть лучшие практики и как избежать частых ошибок?",
    author: "Александр",
    date: "15 июля 2023",
    tags: ["react", "api", "react-query"],
    answers: 3,
    votes: 12
  },
  {
    id: "2",
    title: "Tailwind CSS vs. CSS Modules: что лучше для React проекта?",
    content: "Я работаю над новым React проектом и не могу определиться между Tailwind CSS и CSS Modules. Какой подход будет более масштабируемым для большого проекта?",
    author: "Мария",
    date: "20 июня 2023",
    tags: ["css", "tailwind", "react"],
    answers: 5,
    votes: 8
  },
  {
    id: "3",
    title: "Как оптимизировать производительность Redux в крупном приложении?",
    content: "Наше приложение использует Redux, но с ростом стейта мы замечаем проблемы с производительностью. Какие есть способы оптимизации без переписывания всей архитектуры?",
    author: "Павел",
    date: "5 августа 2023",
    tags: ["redux", "performance", "react"],
    answers: 2,
    votes: 15
  }
];

export const answers: Record<string, AnswerProps[]> = {
  "1": [
    {
      id: "a1",
      content: "React Query отлично справляется с кэшированием по умолчанию. Основные параметры, на которые стоит обратить внимание: staleTime (как долго данные считаются свежими) и cacheTime (как долго неактивные данные хранятся в памяти). Для большинства случаев достаточно настроить эти два параметра на уровне QueryClientProvider.",
      author: "Екатерина",
      date: "16 июля 2023",
      votes: 7,
      isAccepted: true
    },
    {
      id: "a2",
      content: "Дополню предыдущий ответ. Важно также понимать разницу между refetchOnMount, refetchOnWindowFocus и refetchOnReconnect. По умолчанию React Query перезагружает данные при монтировании компонента, при фокусе окна и при восстановлении соединения, если данные устарели (stale).",
      author: "Дмитрий",
      date: "17 июля 2023",
      votes: 4
    }
  ],
  "2": [
    {
      id: "a3",
      content: "Я работал с обоими подходами в крупных проектах. Tailwind даёт преимущество в скорости разработки, но CSS Modules лучше для поддержки сложных компонентов. Если у вас большая команда и сложный UI, возможно, CSS Modules будет лучшим выбором из-за лучшей инкапсуляции стилей.",
      author: "Сергей",
      date: "21 июня 2023",
      votes: 5,
      isAccepted: false
    },
    {
      id: "a4",
      content: "Могу предложить компромисс: используйте Tailwind для общих стилей и быстрого прототипирования, но не бойтесь переходить на CSS Modules для сложных компонентов, где требуется больше контроля над CSS.",
      author: "Анна",
      date: "22 июня 2023",
      votes: 8,
      isAccepted: true
    }
  ]
};

export function getQuestionById(id: string): QuestionProps | undefined {
  return questions.find(q => q.id === id);
}

export function getAnswersForQuestion(id: string): AnswerProps[] {
  return answers[id] || [];
}
