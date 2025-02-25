import { useJobListStore } from "@/stores/jobListStore";
import { setActivePinia, createPinia } from "pinia";

global.fetch = jest.fn();
jest.mock('dayjs', () => ({
  default: jest.fn((date) => ({
    format: () => 'January 01, 2025',
    unix: () => new Date(date).getTime(),
  })),
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
    expect(store.error).toBeNull();
  });

  it('fetches results successfully from mock API', async () => {
    const mockJobs = [
      { id: 1, title: 'Frontend Developer', location: 'Los Angeles', date: '2025-01-01', category: 'Junior', salary: '$100,000' },
      { id: 2, title: 'Backend Developer', location: 'New York', date: '2025-02-02', category: 'Senior', salary: '$120,000' },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ jobs: mockJobs }),
    });
    await store.getResults('developer', 'los angeles');
    expect(store.results.length).toBeGreaterThan(0);
    expect(store.error).toBeNull();
  });

  it('handles error when retrieving results', async () => {
    fetch.mockResolvedValueOnce(new Error('404 Not Found'));
    await store.getResults('developer','');
    expect(store.error).toBe('Data could not be retrieved.');
    expect(store.results).toEqual([]);
  });

  it('fetches the details for one job successfully', async () => {
    const mockJobs = [
      { id: 1, title: 'Frontend Developer', location: 'Los Angeles', date: '2025-01-01', category: 'Junior', salary: '$100,000' },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ jobs: mockJobs }),
    });
    await store.getJob(1);
    expect(store.jobDetails.title).toBeDefined();
    expect(store.error).toBeNull();
  });

  it('handles error when fetching the details for one job', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => (new Error('404 Not Found'))
    });
    await store.getJob(1);
    expect(store.error).toBe('Data could not be retrieved.');
    expect(store.jobDetails).toEqual({});
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

  it('assigns filter in variable', () => {
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

    store.filterBy = 'Show All';
    expect(store.filteredResults.length).toBe(2);
  });
});
