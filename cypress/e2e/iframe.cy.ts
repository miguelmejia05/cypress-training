import {IFramePage} from '../page/index';

const iframePage = new IFramePage();

describe('Check iframe', () => {
	it('Check iframe title then navigate to css page inside iframe and check title has changed', () => {
		iframePage.visit();
		iframePage.getFrameTitle('HTML Tutorial');
		iframePage.goToCssPageInFrame();
		iframePage.getFrameTitle('CSS Tutorial');
	});
});
