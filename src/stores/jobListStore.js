import { defineStore } from "pinia";
import * as dayjs from 'dayjs'
import data from '@/api/jobSearch.json';

export const useJobListStore = defineStore('jobList', {
  state: () => ({
    results: [],
    filterBy: 'Show All',
    orderBy: 'Newest',
    jobDetails: {},
  }),
  actions: {
    getResults(title, location) {
      this.results = data.jobs.filter(job => job.title.toLowerCase().includes(title.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase()));
      this.setOrder(this.orderBy);
    },
    getJob(id) {
      this.jobDetails = data.jobs.filter(job => job.id == id)[0];

    },
    setOrder(order){
      this.orderBy = order;
      this.results.sort((a, b) => {
       return this.orderBy == 'Newest' ? dayjs(b.date) - dayjs(a.date)
       : this.orderBy == 'Oldest' ? dayjs(a.date) - dayjs(b.date)
       : this.orderBy == 'Salary' ? parseInt(b.salary.replace(/[$,]/g, '')) - parseInt(a.salary.replace(/[$,]/g, ''))
       : false
      })
    },
    setFilters(filter){
      this.filterBy = filter
    },
  },
  getters: {
    filteredResults: (state) => state.filterBy == 'Show All' ? state.results : state.results.filter(job => job.category == state.filterBy),
  },
});
