import type { Timestamps } from "./timestamps.type";

export interface Task extends Timestamps {
  id: number;
  title: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  priority: number;

  description?: string | null;
  dueDate?: string | null;
}