import { ResultPeopleArray } from "../../MainPage/types/types";

export interface HumanType{
    message: string;
    result: ResultProperties;
}

export interface ResultProperties{
    properties: ResultPeopleArray;
}