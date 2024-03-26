import { LinkItem } from "@/components/buttom/LinkItem";
import Link from "next/link";

interface IDownload {
  locale: string;
  intl: string[];
}

export const Download = (props: IDownload) => {
  return (
    <div className="ring-1 dark:ring-white/10  ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-custom1 dark:shadow-thick p-8  bg-white dark:bg-secondary overflow-hidden text-center lg:text-left">
      <div>
        <p className="text-xl text-primary dark:text-white lg:text-5xl tracking-tight">
          {props.intl[0]}
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
          {props.intl[1]}
        </p>
      </div>
      <div className="grid gap-3 w-full mt-8 md:max-w-xs lg:max-w-none">
        <Link
          className="shadow-custom1 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
          title={"Jackson Quintero"}
          target="_blank"
          href={
            "https://drive.google.com/file/d/1e84KAP54cuc2DCYJveIdC3J4Os4E5V1M/view"
          }
        >
          <>
            {props.intl[2]} {"en"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-download w-4 h-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
          </>
        </Link>
        <Link
          className="shadow-custom1 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
          title={"Jackson Quintero"}
          target="_blank"
          href={
            "https://drive.google.com/file/d/1zAfQk_Hdx6kfZP5ZUB2w3LSMIHegR2nD/view"
          }
        >
          <>
            {props.intl[2]}
            {""} {"es"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-download w-4 h-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
          </>
        </Link>
      </div>
    </div>
  );
};
