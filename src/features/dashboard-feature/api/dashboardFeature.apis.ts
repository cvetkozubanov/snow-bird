import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const endpoints = {
  getAll: (filters: string, size: number, page: number, ordering: string) =>
    axios.get(`some-test-api?filter=${filters}&size=${size}&page=${page}&ordering=${ordering}`)
};

export const useGetAllQuery = (filters: string, size: number, page: number, ordering: string) => {
  return useQuery(
    ['QUERY_KEY', { filters, size, page, ordering }],
    () => endpoints.getAll(filters, size, page, ordering),
    { enabled: !!filters, keepPreviousData: true }
  );
};
