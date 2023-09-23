import { ProfileCard } from "@/components/profile-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

async function getData() {
  const response = await fetch('https://api.github.com/users/bruno-mesquita');
  return response.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex h-screen gap-10 p-10">
      <ProfileCard {...data} />
      <div className="flex flex-col gap-10 w-4/5">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Bio</CardTitle>
          </CardHeader>
          <CardContent>
            Sempre apaixonado por programação desde cedo, no ensino médio já tinha certeza qual curso eu iria fazer fazer! Ciencia da Computação! aos meus 18 anos começei minha jornada nesse mundo incrivel que é desenvolver, começando ali com os primeiros passos com python3 aprendi o basico do basico na faculdade os conhecimentos se aprofundaram em SQL, POO, então decidi aprender javascript(JS) foi quando eu me apaixonei de verdade, me aprofundei bastante na linguagem e no seu ecossistema atual, que envolve NodeJs e seu frameworks para backend e frontend.
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Tecnologias</CardTitle>
          </CardHeader>
        </Card>
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
                <Avatar className='w-32 h-32 self-center'>
                    <AvatarImage src=""  />
                    <AvatarFallback>P1</AvatarFallback>
                </Avatar>
                  Projeto 1 conteudo</CardContent>
                <CardFooter>
                  <Button className="w-full">Conhecer</Button>
                </CardFooter>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </main>
  )
}
