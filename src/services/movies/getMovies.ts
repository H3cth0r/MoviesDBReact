import httpInstance from "services/httpInstance";

export const getPopular = async () => {
    let res: any;
    const endpoint = `popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response;
    });
    return res;
};