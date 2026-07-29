export interface Experience {
    id: string;
    title: string;
    description: string;
    category: 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';
    destination: string; // e.g., "Kyoto, Japan"
    price: number;
    rating: number;
    imageUrl: string; // Placeholder image URL
}