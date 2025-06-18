type CardProps = {
  imageSrc: string;
  name: string;
  userHandle: string;
  description: string;
};

export default function Card({
  imageSrc,
  name,
  userHandle,
  description,
}: CardProps) {
  return (
    <>
      <div className="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg card-custom-box-shadow">
        <div className="text-red-400">{imageSrc}</div>
        <div className="text-red-400">{name}</div>
        <div className="text-red-400">{userHandle}</div>
        <div className="text-red-400">{description}</div>
      </div>
    </>
  );
}
