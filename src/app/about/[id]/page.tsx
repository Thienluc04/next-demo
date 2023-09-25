import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch('https://battech-node.onrender.com/api/posts');
  const data = await response.json();

  return (
    <div className="ml-10">
      {data.map((item: any) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
      <Button variant={'secondary'}>Hello world</Button>
      <Skeleton className="w-[500px] h-80 bg-slate-300 rounded-2xl"></Skeleton>
    </div>
  );
}
