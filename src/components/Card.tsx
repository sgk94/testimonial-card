type CardProps = {
  imageSrc: string;
  name: string;
  userHandle: string;
  text: string;
};

export default function Card({ imageSrc, name, userHandle, text }: CardProps) {
  return (
    <>
      <div className="custom-card-box-shadow font-display flex w-[340px] flex-col gap-4 rounded-lg bg-white p-6">
        <div className="flex gap-[16px]">
          <img
            className="h-12 w-12 rounded-[50%] object-cover"
            src={imageSrc}
          />
          <div className="flex flex-col">
            <span className="text-justify text-lg font-semibold text-neutral-900">
              {name}
            </span>
            <span className="text-sm font-normal text-neutral-600">
              {userHandle}
            </span>
          </div>
        </div>
        <span className="text-base font-normal text-neutral-600">{text}</span>
      </div>
    </>
  );
}
