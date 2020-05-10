import * as functions from './info-page-routes';


describe('InfoPageRoutes', () => {
  describe('METHOD: getRoutesAtPath', () => {
    it('should return an empty array if no path is given', () => {
      expect(functions.getRoutesAtPath(null)).toEqual([]);
    });

    it('should call getChildRoutesAtPath', () => {
      expect(functions.getRoutesAtPath('/', [''])).toEqual([]);
    });
  });

  describe('METHOD: getChildRoutesAtPath', () => {
    it('should return an empty array if path is empty', () => {
      expect(functions.getChildRoutesAtPath(null, [])).toEqual([]);
    });

    it('should return an empty array if the path does not return routes', () => {
      expect(functions.getChildRoutesAtPath(['not_test'], [{
        path: 'test',
        children: [{ child: true }] as any
      }])).toEqual([]);
    });

    it('should return the correct child paths', () => {
      const expected = [{ child: true }] as any;

      expect(functions.getChildRoutesAtPath(['test'], [{
        path: 'test',
        children: expected
      }])).toEqual(expected);
    });
  });
});
