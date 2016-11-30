
var url =  {
	expect : function() {
		expect(browser.getCurrentUrl()).toContain(browser.baseUrl);
	}
};

var isFieldPresent =  {
	expect : function(field) {
		expect(field.isPresent()).toBe(true);
	}
};

var isListPopulated = {
	expect : function(list) {
		expect(list.all(by.tagName('option')).count()).toBeGreaterThan(0);
	}
}

var isButtonEnabled =  {
	expect : function(button) {
		expect(button.getAttribute('class')).not.toContain('disabled');
	}
};

var isButtonDisabled = {
	expect : function(button)  {
		expect(button.getAttribute('class')).toContain('disabled');
	}
}

var isInputPopulated = {
	expect : function(input, value2Test) {
		input.clear().sendKeys(value2Test);
		expect(input.getAttribute('value')).toEqual(value2Test);
	}
}

var isCheckboxChecked = {
	expect : function(checkbox, toBeChecked) {
		checkbox.click();
		toBeChecked ? expect(checkbox.getAttribute('value')).toEqual('on') : expect(checkbox.getAttribute('value')).toEqual('off');
	}
};

var isTextEqualsTo = {
	expect : function(element, stringValue) {
		expect(element.getAttribute('value')).toEqual(stringValue);
	}
}

var isTextTagEqualsTo = {
	expect : function(element, stringValue) {
		expect(element.getText()).toEqual(stringValue);
	}
}


module.exports.url = url;
module.exports.isFieldPresent = isFieldPresent;
module.exports.isListPopulated = isListPopulated;
module.exports.isButtonEnabled = isButtonEnabled;
module.exports.isButtonDisabled = isButtonDisabled;
module.exports.isInputPopulated = isInputPopulated;
module.exports.isCheckboxChecked = isCheckboxChecked;
module.exports.isTextEqualsTo = isTextEqualsTo;
module.exports.isTextTagEqualsTo = isTextTagEqualsTo;