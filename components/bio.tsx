import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Bio() {
    return (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Bio</CardTitle>
          </CardHeader>
          <CardContent>
            Sempre apaixonado por programação desde cedo, no ensino médio já tinha certeza qual curso eu iria fazer fazer! Ciencia da Computação! aos meus 18 anos começei minha jornada nesse mundo incrivel que é desenvolver, começando ali com os primeiros passos com python3 aprendi o basico do basico na faculdade os conhecimentos se aprofundaram em SQL, POO, então decidi aprender javascript(JS) foi quando eu me apaixonei de verdade, me aprofundei bastante na linguagem e no seu ecossistema atual, que envolve NodeJs e seu frameworks para backend e frontend.
          </CardContent>
        </Card>
    );
}