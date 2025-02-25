import { mount } from "@vue/test-utils";
import FormModal from "@/components/FormModal.vue";

describe('FormModal.vue', () => {
  let wrapper;
  const job = {
    title: 'Frontend Developer',
    company:'Hikru',
  };

  const mockValidateForm = jest.fn(() => ({ valid: true }));

  beforeEach(() => {
    wrapper = mount(FormModal, {
      props: { job },
      global: {
        mocks: {
          form: {
            validate: mockValidateForm,
          },
        },
      },
    });
  });

  it('opens the modal when button is clicked', async () => {
    expect(wrapper.vm.modal).toBe(false);
    await wrapper.find('#button').trigger('click');
    expect(wrapper.vm.modal).toBe(true);
  });

  it('checks form validates fields', async () => {
    await wrapper.find('#button').trigger('click');
    await wrapper.vm.submitForm();
    expect(wrapper.vm.form.validate).toHaveBeenCalled();
  });
  
  it('submits form', async () => {
    expect(wrapper.vm.modal).toBe(false);
    await wrapper.find('#button').trigger('click');
    expect(wrapper.vm.modal).toBe(true);

    wrapper.vm.fullName = 'Alexis Castro';
    wrapper.vm.email = 'alexis@castro.com';
    wrapper.vm.resume = new File([''], 'resume.pdf', { type: 'application/pdf' });
    wrapper.vm.coverLetter = 'This is my cover letter.';

    await wrapper.vm.submitForm();
    expect(wrapper.vm.showSnackbar).toBe(true);
    expect(wrapper.vm.modal).toBe(false);
  });
});
