import { useState, useState } from "react";
import { useEffect } from "react";

interface FetchState<T>{
    data:T | null;
    loading:boolean;
    error:string|null;
}

export function useFetch <T> (url:string):FetchState<T>{
    const [state,useState] = useState();
}