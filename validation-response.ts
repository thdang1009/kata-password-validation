export class ValidationResponse {
    constructor(
        readonly result: boolean = false,
        readonly errorMessage: string[] = []
    ) {

    }
}