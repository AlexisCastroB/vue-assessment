import { defineStore } from "pinia";
import * as dayjs from 'dayjs'

const url = '/api/jobSearch.json'

export const useJobListStore = defineStore('jobList', {
  state: () => ({
    results: [],
    filterBy: 'Show All',
    orderBy: 'Newest',
    jobDetails: {},
    error: null
  }),
  actions: {
    async getResults(title, location) {
      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(`Response status: ${response.status} ${response.statusText}`)
        }
        const data = await response.json();
        this.results = data.jobs.filter(job => job.title.toLowerCase().includes(title.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase()));
        this.setOrder(this.orderBy);
        this.error = null;
      } catch (e){
        this.error = 'Data could not be retrieved.';
        console.error(e.message);
      }
    },
    async getJob(id) {
      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(`Response status: ${response.status} ${response.statusText}`)
        }
        const data = await response.json();
        this.jobDetails = data.jobs.filter(job => job.id == id)[0];
        this.error = null;
      } catch (e){
        this.error = 'Data could not be retrieved.';
        console.error(e.message);
      }
    },
    setOrder(order){
      this.orderBy = order;
      this.results.sort((a, b) => {
       return this.orderBy == 'Newest'
       ? dayjs(b.date) - dayjs(a.date)
       : this.orderBy == 'Oldest' ? dayjs(a.date) - dayjs(b.date)
       : this.orderBy == 'Salary' ? parseInt(b.salary.replace(/[$,]/g, '')) - parseInt(a.salary.replace(/[$,]/g, ''))
       : false;
      })
    },
    setFilters(filter){
      this.filterBy = filter;
    },
  },
  getters: {
    filteredResults: (state) => state.filterBy == 'Show All' ? state.results : state.results.filter(job => job.category == state.filterBy),
  },
});
