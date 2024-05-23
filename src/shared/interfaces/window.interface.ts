import { SoliasCLIOptions } from "./cli-options.interface";

export interface SoliasCoreService {
    version(args: SoliasCLIOptions): Promise<any>;
}