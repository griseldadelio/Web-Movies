import { IGenre } from './genre';
import { IShow } from './show';
import { ICompany } from './Company';

export interface IShowDetails extends IShow {
    episode_run_time: Array<number>;
    genres: Array<IGenre>;
    homepage: string;
    in_production: boolean;
    languages: Array<string>;
    production_companies: Array<ICompany>;
    status: string;
    type: string;
}