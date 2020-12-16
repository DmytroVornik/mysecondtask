
function createStep(name: string, func) {
    return function (this, ...args: any[]) {
        let stepName = name.replace(/(\{(\d+)\})/gi, (f, s, index) => args[index])
        let status: AllureReporter.StepStatus = 'passed', result;
        AllureReporter.startStep(stepName)
        try {
            result = func(this, args)
        }
        catch (error) {
            status = 'broken'
            throw error;
        }
        finally {
            AllureReporter.endStep(status);
        }
        return result;
    }
}
function step(desc?: string) {
    return (target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor => {
        const oldMethod = propertyDescriptor.value;
        if (!desc) {
            //get step description from the method name
            desc = propertyName
                .replace(/([A-Z]+)/g, " $1") //acronym like USB
                .replace(/^./, (match) => match.toUpperCase()) //capitalize first letter
                .replace(/([A-Z][a-z])/g, " $1") //words
                .trim();
        }
        propertyDescriptor.value = createStep(desc, function (this, ...args: any[]) {
            return oldMethod.apply(this, args);
        });
        return propertyDescriptor;

    }
}