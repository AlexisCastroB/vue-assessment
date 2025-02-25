import { mount } from "@vue/test-utils";
import Filters from "@/components/Filters.vue";
import { useJobListStore } from "@/stores/jobListStore";
import { createPinia } from "pinia";

describe('Filters.vue', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const pinia = createPinia();
    store = useJobListStore(pinia);
    wrapper = mount(Filters, {
      global: {
        plugins: [pinia],
      }
    });
  });

  it('updates category value on filter by select', async () => {
    await wrapper.find('#filterBy').setValue('Junior');
    expect(store.filterBy).toEqual('Junior');
  });

  it('updates category value on order by select', async () => {
    await wrapper.find('#orderBy').setValue('Salary');
    expect(store.orderBy).toEqual('Salary');
  });

});
