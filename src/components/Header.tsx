import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  title: string;
  subtitle?: string;
  dueDate?: string;
}

export default function Header({ title, subtitle, dueDate }: HeaderProps) {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-end mb-6">
          <div className="flex items-center gap-4">
            {dueDate && (
              <Badge variant="warn" className="text-sm">
                <Calendar className="w-3 h-3 mr-2" />
                Due: {dueDate}
              </Badge>
            )}
            <Badge variant="secondary" className="text-sm">
              Penn State University
            </Badge>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-primary-foreground/90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}