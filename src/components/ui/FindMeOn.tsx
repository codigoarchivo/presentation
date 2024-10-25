import Link from "next/link";

interface IFindMeOn {
  intl: string[];
}

export const FindMeOn = (props: IFindMeOn) => {
  return (
    <div className="ring-1 ring-primary/5 rounded-3xl justify-between shadow-custom1 items-center flex flex-col gap-5 p-8 h-full bg-white">
      <div className="w-full">
        <p className="text-xl font-normal tracking-tight text-primary  lg:text-5xl mb-5">
          {props.intl[0]}
        </p>
        <Link
          href={"https://walink.co/dc57fc"}
          className="flex gap-5 w-full cursor-pointer"
        >
          <svg viewBox="0 0 48 48" className="w-6 h-6">
            <g
              id="Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Color-"
                transform="translate(-700.000000, -360.000000)"
                fill="#67C15E"
              >
                <path
                  d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                  id="Whatsapp"
                ></path>
              </g>
            </g>
          </svg>
          <strong>+584126804788</strong>
        </Link>
      </div>
      <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
        <a
          title="Gmail"
          href="mailto:codigoarchivo@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center aspect-square shadow-custom1 hover:bg-zinc-100 ring-1 bg-zinc-50  ring-primary/5 rounded-lg hover:ring-primary/5  duration-300 group transition-all h-12 w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary  group-hover"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
        </a>
        <a
          title="GitHub"
          href="https://github.com/codigoarchivo"
          rel="noreferrer"
          target="_blank"
          className="flex items-center justify-center aspect-square shadow-custom1 hover:bg-zinc-100 ring-1 bg-zinc-50  ring-primary/5 rounded-lg hover:ring-primary/5  duration-300 group transition-all h-12 w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary  group-hover"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </a>
        <a
          title="Instagram"
          href="https://www.instagram.com/jackso_quintero/?igsh=MTVmOXNpMWQ5ZzM5YQ%3D%3D"
          rel="noreferrer"
          target="_blank"
          className="flex items-center justify-center aspect-square shadow-custom1 hover:bg-zinc-100 ring-1 bg-zinc-50  ring-primary/5 rounded-lg hover:ring-primary/5  duration-300 group transition-all h-12 w-12"
        >
          <svg
            className="icon icon-tabler icon-tabler-brand-behance h-6 w-6 group-hover:scale-125 duration-300 text-primary  group-hover"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          title="Hotmail"
          href="mailto:jacksonescuquetrujillo@hotmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center aspect-square shadow-custom1 hover:bg-zinc-100 ring-1 bg-zinc-50  ring-primary/5 rounded-lg hover:ring-primary/5  duration-300 group transition-all h-12 w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-threads h-6 w-6 group-hover:scale-125 duration-300 text-primary  group-hover"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"></path>
          </svg>
        </a>
        <a
          href="https://twitter.com/jacksonjosequin"
          rel="noreferrer"
          target="_blank"
          title="Twitter"
          className="flex items-center justify-center aspect-square shadow-custom1 hover:bg-zinc-100 ring-1 bg-zinc-50  ring-primary/5 rounded-lg hover:ring-primary/5  duration-300 group transition-all h-12 w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary  group-hover icon-tabler-brand-dribbble"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
          </svg>
        </a>
        <a
          title="linkedin"
          href="https://www.linkedin.com/in/jackson-quintero/"
          rel="noreferrer"
          target="_blank"
          className="flex items-center justify-center aspect-square shadow-custom1 hover:bg-zinc-100 ring-1 bg-zinc-50  ring-primary/5 rounded-lg hover:ring-primary/5  duration-300 group transition-all h-12 w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary  group-hover icon-tabler-brand-linkedin"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 11l0 5"></path>
            <path d="M8 8l0 .01"></path>
            <path d="M12 16l0 -5"></path>
            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/jacksonjose.quinteroangulo/"
          title="Facebook"
          rel="noreferrer"
          target="_blank"
          className="flex items-center justify-center aspect-square shadow-custom1 hover:bg-zinc-100 ring-1 bg-zinc-50  ring-primary/5 rounded-lg hover:ring-primary/5  duration-300 group transition-all h-12 w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary  group-hover icon-tabler-brand-facebook"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
          </svg>
        </a>
        <a
          title="Tiktok"
          href="https://www.tiktok.com/@jackquintero01?is_from_webapp=1&sender_device=pc"
          rel="noreferrer"
          target="_blank"
          className="flex items-center justify-center aspect-square shadow-custom1 hover:bg-zinc-100 ring-1 bg-zinc-50  ring-primary/5 rounded-lg hover:ring-primary/5  duration-300 group transition-all h-12 w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary  group-hover icon-tabler-brand-facebook"
            viewBox="0 0 32 32"
            version="1.1"
            strokeWidth="0.8"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
