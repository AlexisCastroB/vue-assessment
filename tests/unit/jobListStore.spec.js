import { useJobListStore } from "@/stores/jobListStore";
import { setActivePinia, createPinia } from "pinia";

jest.mock('dayjs', () => {
  const mockDayjs = jest.fn((date) => {
    return {
      isBefore: jest.fn(() => true),
      isAfter: jest.fn(() => false),
      unix: jest.fn(() => new Date(date).getTime()),
    };
  });
  return mockDayjs;
});

jest.mock('@/api/jobSearch.json', () => ({
  jobs: [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Los Angeles',
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'New York',
    },
  ],
}));

describe('Job List Store', () => {
  let store;
  beforeEach(() => {
    setActivePinia(createPinia());
    store = useJobListStore();
  });

  it('initial state', () => {
    expect(store.results).toEqual([]);
    expect(store.filterBy).toBe('Show All');
    expect(store.orderBy).toBe('Newest');
    expect(store.jobDetails).toEqual({});
  });

  it('fetches data from mock API', () => {
    expect(store.results).toHaveLength(0);
    store.getResults('frontend', 'los angeles');
    expect(store.results.length).toBeGreaterThan(0);
  });

  it('fetches the details for one job', () => {
    store.getJob(1);
    expect(store.jobDetails.id).toBe(1);
    expect(store.jobDetails.title).toBeDefined();
  });

  it('sorts results', () => {
    store.results = [
      { id: 1, salary: '$100,000' },
      { id: 2, salary: '$110,000' },
      { id: 3, salary: '$120,000' },
    ];
    store.setOrder('Salary');
    expect(store.results[0].id).toBe(3);
    expect(store.results[1].id).toBe(2);
    expect(store.results[2].id).toBe(1);
  });

  it('assigns finter in variable', () => {
    store.setFilters('Junior');
    expect(store.filterBy).toBe('Junior');
  });

  it('filters results by category', () => {
    store.results = [
      { id: 1, category: 'Junior' },
      { id: 2, category: 'Senior' },
    ];
    store.filterBy = 'Senior';
    expect(store.filteredResults.length).toBe(1);
    expect(store.filteredResults[0].id).toBe(2);
  });
});
