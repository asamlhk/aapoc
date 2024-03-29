import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Hero: {},
    Villain: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Hero: 'Hero' };

export const entityConfig = {
    entityMetadata,
    pluralNames
};

export class Hero {
    id: string;
    name: string;
};