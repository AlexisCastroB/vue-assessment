import { mount } from "@vue/test-utils";
import Search from "@/components/Search.vue";
// import { createRouter, createMemoryHistory } from "vue-router";
import { useRoute, useRouter } from "vue-router";

jest.mock('vue-router', () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn(),
}));

describe('Search.vue', () => {
  let wrapper;
  let routerReplaceMock;
  let routerGoMock;

  beforeEach(() => {
    useRoute.mockReturnValue({
      query: {
        title: 'frontend',
        location:'los angeles',
      },
    });
    routerReplaceMock = jest.fn();
    routerGoMock = jest.fn();
    useRouter.mockReturnValue({
      replace: routerReplaceMock,
      go: routerGoMock,
    });
    wrapper = mount(Search);
  });

  it('catches the values from query to inputs', () => {
    const jobTitle= wrapper.find('#jobTitle');
    const location= wrapper.find('#location');
    expect(jobTitle.element.value).toBe('frontend');
    expect(location.element.value).toBe('los angeles');
  });

  it('goes to search page when button is clicked', async () => {
    const button = wrapper.find('#button');
    await button.trigger('click');
    expect(routerReplaceMock).toHaveBeenCalledWith({
      name: 'Job Results',
      query: { title: 'frontend', location: 'los angeles' },
    });
    expect(routerGoMock).toHaveBeenCalledWith(0)
  });

  it('goes to search page when Enter key is pressed', async () => {
    const jobTitle= wrapper.find('#jobTitle');
    await jobTitle.trigger('keyup.enter')
    expect(routerReplaceMock).toHaveBeenCalledWith({
      name: 'Job Results',
      query: { title: 'frontend', location: 'los angeles' },
    });
    expect(routerGoMock).toHaveBeenCalledWith(0)

    const location= wrapper.find('#location');
    await location.trigger('keyup.enter')
    expect(routerReplaceMock).toHaveBeenCalledWith({
      name: 'Job Results',
      query: { title: 'frontend', location: 'los angeles' },
    });
    expect(routerGoMock).toHaveBeenCalledWith(0)
  });

});
