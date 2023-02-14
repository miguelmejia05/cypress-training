import {DownloadPage} from '../page/index';

const downloadPage = new DownloadPage();

describe('Download File', () => {
	it('The user downloads a file', () => {
		downloadPage.visitDownloadPage();
		downloadPage.downloadFile();
		downloadPage.checkDownloadedFile();
	});
});
