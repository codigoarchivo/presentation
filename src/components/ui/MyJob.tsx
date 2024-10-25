interface IMyJob {
  intl: string[];
}

export const MyJob = (props: IMyJob) => {
  return (
    <div className="ring-1 lg:row-span-1 group hover:ring-primary/10 duration-300  ring-primary/5 lg:row-start-2 md:grid lg:gap-0  md:gap-12  lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white shadow-custom1">
      <div className="w-full">
        <p className="flex flex-col ext-xl tracking-tight font-medium text-secondary text-xs sm:text-base">
          <strong className="text-primary">{props.intl[0]}</strong>
          <span className="ml-2">{props.intl[1]}</span>
        </p>
        <p className="flex flex-col ext-xl tracking-tight font-medium text-secondary text-xs sm:text-base">
          <strong className="text-primary">{props.intl[2]}</strong>
          <span className="ml-2">{props.intl[3]}</span>
        </p>
        <p className="flex flex-col ext-xl tracking-tight font-medium text-secondary text-xs sm:text-base">
          <strong className="text-primary">{props.intl[4]}</strong>
          <span className="ml-2">{props.intl[5]}</span>
        </p>

        <p className="flex flex-col ext-xl tracking-tight font-medium text-secondary text-xs sm:text-base">
          <strong className="text-primary">{props.intl[8]}</strong>
          <span className="ml-2">{props.intl[9]}</span>
        </p>
      </div>
    </div>
  );
};
