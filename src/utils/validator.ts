export const soliasDataValidations = {
    isValidJSON: (str: string) => {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    }
}