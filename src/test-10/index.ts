export const sortNumbers = (list: number[], order: string = "asc"): number[] => {
    if (order === "desc") {
        return list.sort((a, b) => b - a);
    } else if (order === "asc") {
        return list.sort((a, b) => a - b);
    } else {
        throw new Error("Invalid order parameter. Use 'asc' or 'desc'.");
    }
};