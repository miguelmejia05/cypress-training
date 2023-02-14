import {FormPage} from '../page/index';

const formPage = new FormPage();

describe('Fills the application form', () => {
	it('The user fills the application form and then clicks the submit button', () => {
		const personalInformation = {
			name: 'Holmes',
			lastName: 'Salazar',
			email: 'test@email.com',
			gender: 'Male',
			dateOfBirth: '27 Jul 2016',
			mobileNumber: '3656589156',
			hobbies: ['Music', 'Reading'],
			currentAddress: 'Av siempreViva # 123',
		};
		formPage.visitFormPage();
		formPage.fillForm(personalInformation);
	});
});
