import { AT_LEAST_2_NUM, AT_LEAST_8_CHAR, IS_NOT_EMPTY, IS_NOT_STRING } from "./message.error";
import { ValidationResponse } from "./validation-response";

const rules = {
    isNotString: (input: string, v: ValidationResponse) => {
        if (input === '') {
            v.errorMessage.push(IS_NOT_EMPTY);
        }
        return v;
    }
}

// no side effect

export function passwordValidation(input: string, validationRules = []): ValidationResponse {

    // validationRules.forEach(ruleName => {
    //     rules(ruleName);
    // });

    const result = new ValidationResponse();
    if (typeof input !== 'string') {
        throw new Error(IS_NOT_STRING);
    }

    if (input === '') {
        result.errorMessage.push(IS_NOT_EMPTY);
    }

    if (input.length < 8) {
        result.errorMessage.push(AT_LEAST_8_CHAR);
    }

    const regexAtLeast2Num = /\d{2,}/g;
    if (!regexAtLeast2Num.test(input)) {
        result.errorMessage.push(AT_LEAST_2_NUM);
    }

    return result;
}


function main() {
    // passwordValidation('test134', ['isNotString']);
}