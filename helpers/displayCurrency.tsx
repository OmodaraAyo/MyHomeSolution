export const DisplayNAICurrency = (amount: number) => {
    if(typeof amount !== "number") return "";
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};

//created by Omodara Ayodele 
//github: OmodaraAyo