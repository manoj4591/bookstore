
import { shallow } from 'enzyme';

import Courses from '../src/components/courses/Courses';

describe('Courses', () => {
    it('fetches data from server when server returns a successful response', done => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    
        const wrapper = shallow(<Courses />); 
                            
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');

        process.nextTick(() => {
            expect(wrapper.state()).toEqual({
                // ... assert the set state
            });

            global.fetch.mockClear();
            done();
        });
    });
});