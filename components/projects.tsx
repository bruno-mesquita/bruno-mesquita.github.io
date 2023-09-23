import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { AvatarFallback, Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

export function Projects() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Projetos</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        {Array.from({ length: 4 }, (_, index) => (
          <Card className="w-72" key={`project-${index}`}>
            <CardHeader>
              <CardTitle>Projeto 1</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-5">
              <Avatar className="w-32 h-32 self-center">
                <AvatarImage src="" />
                <AvatarFallback>P1</AvatarFallback>
              </Avatar>
              Projeto 1 conteudo
            </CardContent>
            <CardFooter>
              <Button className="w-full">Conhecer</Button>
            </CardFooter>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
