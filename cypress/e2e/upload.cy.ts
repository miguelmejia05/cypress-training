import {UploadPage} from '../page/index';

const uploadPage = new UploadPage();

describe('Upload File', () => {
	it('The user uploads a file', () => {
		uploadPage.visitUploadPage();
		uploadPage.uploadFile();
		uploadPage.checkUploadedFileName();
	});
});
