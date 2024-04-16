import { ServerLanguage } from "@/constants/languages";

export const findLocalFromUrl = (pathName: string) => {
    const segments = pathName.split("/")
    return segments[1];
  }


 export const getAcceptLanguage = (lang: string) => {
   return (ServerLanguage as { [key: string]: string })[lang] || ServerLanguage["en"];
 }


  