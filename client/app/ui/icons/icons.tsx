import Image from "next/image";

type props={
  h:number,
  w:number,
  className:string,
  icon:source
}

export enum source
{
  menu = "/icons/menu.svg",
  bell = "/icons/bell.svg",
  search = "/icons/search.svg",
  settings = "/icons/settings.svg",
}


export function Icon({h, w, className, icon}:props) {
  return (
    <Image width={h} height={w} src={icon} alt="menu-button" className={`${className} pointer-events-none`}/>
  )
}
