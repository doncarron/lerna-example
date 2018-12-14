import { MitchellMath } from '../src/services/example';

it('should add two numbers together and then mess up', function () {
    let result = MitchellMath.Add(1, 2);
    expect(result).toBe(4)
});