import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'
import { SendIcon } from 'lucide-react';


type ProfileCardProps = {
    avatar_url: string;
    name: string;
    login: string;
    company: string;
    location: string;
    bio: string;
}

export function ProfileCard({ avatar_url, name, login, location, bio }: ProfileCardProps) {
    return (
        <Card className='w-1/5 h-full'>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{login}</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col justify-between gap-4'>
            <Avatar className='w-48 h-48 self-center'>
                <AvatarImage src={avatar_url}  />
                <AvatarFallback>BM</AvatarFallback>
            </Avatar>
            <p>Bio:<br/> Apaixonado por desenvolver softwares.</p>
            <p>Localização:<br/> {location}</p>
            <p>Cargo:<br/> {bio}</p>
            <p>Email:<br/> bmesquita196@gmail.com</p>
        </CardContent>
        <CardFooter className='flex items-center justify-between'>
            <Button>Whatsapp</Button>
            <Button className='gap-3'><SendIcon size={20} />Enviar email</Button>
        </CardFooter>
      </Card>
    )
}