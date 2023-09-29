import { ProfileCard } from '@/components/profile-card';
import { Bio } from '@/components/bio';
import { Projects } from '@/components/projects';
import { Techs } from '@/components/techs';

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
        <Bio />
        <Projects />
      </div>
    </main>
  );
}
