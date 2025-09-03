export interface ITodo {
    id: number;
    title: string;
    checked: boolean;
}
export type ActionFilter = 'all' | 'completed' | 'active';
