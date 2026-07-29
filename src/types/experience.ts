export type Category = 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';

export interface Experience {
    id: string;
    title: string;
    description: string;
    category: Category;
    destination: string; // e.g., "Kyoto, Japan"
    price: number;
    rating: number;
    imageUrl: string; // Placeholder image URL
}

export interface ExperienceFilters {
    search: string;
    category: string;
    destination: string;
}