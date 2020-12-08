import AllureReporter from "@wdio/allure-reporter";

export default abstract class Page {

  open() {
    browser.url(this.getPath());
    return this;
  }
  abstract getPath(): string;
}


export function step(description?: string) {
  return (target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor => {
    const oldMethod = propertyDescriptor.value;
    if (!description) {
      //get step description from the method name
      description = propertyName
        .replace(/([A-Z]+)/g, " $1") //acronym like USB
        .replace(/^./, (match) => match.toUpperCase()) //capitalize first letter
        .replace(/([A-Z][a-z])/g, " $1") //words
        .trim();
    }
    propertyDescriptor.value = createStep(description, function (this, ...args: any[]) {
      return oldMethod.apply(this, args);
    });
    return propertyDescriptor;
  }
}

function createStep(name: string, stepFunc) {
  return function (this, ...args: any[]) {
    let stepName = name.replace(/(\{(\d+)\})/gi, (m, s, index) => args[index]);
    let status: AllureReporter.StepStatus = 'passed', result;
    AllureReporter.startStep(stepName);
    try {
      result = stepFunc.apply(this, args);
    }
    catch (error) {
      status = 'broken';
      throw error;
    }
    finally {
      AllureReporter.endStep(status);
    }
    return result;
  };
};