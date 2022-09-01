import { useEffect } from "react";

const useAsyncEffect = (proc: () => Promise<void>, s?: any) => {
    useEffect(() => {
        (async () => await proc())();
    }, s);
};

export default useAsyncEffect;