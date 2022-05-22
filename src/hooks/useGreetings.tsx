import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useGreetings() {
    return useSWR('http://apiserver:4000/greetings', fetcher);
}