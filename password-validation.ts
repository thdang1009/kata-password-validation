import { AT_LEAST_2_NUM, AT_LEAST_8_CHAR, IS_NOT_EMPTY, IS_NOT_STRING } from "./message.error";


export function passwordValidation(input: string) {
    if (typeof input !== 'string') {
        throw Error(IS_NOT_STRING);
    }

    if (input === '') {
        throw Error(IS_NOT_EMPTY);
    }

    if (input.length < 8) {
        throw Error(AT_LEAST_8_CHAR);
    }

    const regexAtLeast2Num = /\d{2,}/g;
    if (!regexAtLeast2Num.test(input)) {
        throw Error(AT_LEAST_2_NUM);
    }
}