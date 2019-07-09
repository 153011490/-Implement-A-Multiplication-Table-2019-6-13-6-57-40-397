const multicationTableHandler = require('../main');

it('should return null  when call createMulticationTable given 4,2',() => {
	expect(multicationTableHandler.createMulticationTable(4,2,multicationTableHandler.isStartLessThanEnd,multicationTableHandler.isInputInRange)).toBe("null");
});

it('should return out of range  when call createMulticationTable given 2,1001',() => {
	expect(multicationTableHandler.createMulticationTable(2,1001,multicationTableHandler.isStartLessThanEnd,multicationTableHandler.isInputInRange)).toBe("out of range");
});

it('should return table  when call createMulticationTable given 2,4',() => {
	expect(multicationTableHandler.createMulticationTable(2,4,multicationTableHandler.isStartLessThanEnd,multicationTableHandler.isInputInRange)).toBe("2×2=4\t\n2×3=6\t3×3=9\t\n2×4=8\t3×4=12\t4×4=16\t\n");
});