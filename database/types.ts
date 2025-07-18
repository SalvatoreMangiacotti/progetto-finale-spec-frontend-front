export type Car = {
    // Identità dell'auto
    title: string;
    category: string;
    year: number;
    origin: string;
    unitsProduced?: number;

    // Specifiche tecniche
    engine: string;
    horsepower?: number;
    topSpeed?: number;
    acceleration0to100?: number;
    transmission?: string;

    // Informazioni e media
    description: string;
    image?: string;
    gallery?: string[]; // immagini extra
    materials?: string;
    designer?: string[];
    races?: string[];
};
