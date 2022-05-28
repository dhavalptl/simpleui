import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useGreetings() {
    return useSWR('/greetings', fetcher);
}