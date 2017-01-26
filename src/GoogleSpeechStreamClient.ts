import {IStreamClient} from "./Interfaces";
/**
 * This is only the stub. Should be written
 */
export class GoogleSpeechStreamClient implements IStreamClient {

    private initialized: boolean = false;

    public init(): void {
        this.initialized = true;
    }

    public startListening(): void {
        // noop
    }

}