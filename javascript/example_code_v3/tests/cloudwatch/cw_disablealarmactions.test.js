process.argv.push('--arg1', 'us-west-2');
process.argv.push('--arg2', 'ALARM_NAME');
const mockDisableAlarms = jest.fn();
jest.mock('@aws-sdk/client-cloudwatch/commands/DisableAlarmActionsCommand', () => ({
    CloudWatch: function CloudWatch() {
        this.DisableAlarmActionsCommand = mockDisableAlarms
    }
}));
const {params, run} = require("../../cloudwatch/cw_disablealarmactions");

//test function
test("has to mock cloudwatch#deletealarms",  async (done) => {
    await run();
    expect(mockDisableAlarms).toHaveBeenCalled;
    done();
});
