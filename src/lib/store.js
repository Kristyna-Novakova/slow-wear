import { create } from 'zustand';
import jsonData from '../categories.json';

export const useCatalaogue = create((set) => jsonData);
