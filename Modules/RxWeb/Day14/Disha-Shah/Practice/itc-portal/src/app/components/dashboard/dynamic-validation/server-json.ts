export const SERVER_JSON = [
    { 
        "type": "text", 
        "name": "age", 
        "ui": { "label": "Age" }, 
        "validators": { "digit": true } 
    }, 
    { 
        "type": "text", 
        "name": "phoneNumber", 
        "ui": { "description": "If you want to apply conditional validation on 'Phone Number' then you need to add 'Age' field greater than or equal to '25'.If you want to apply conditional expression of type 'function'", "label": "Phone Number" }, 
        "validators": null
    }, 
    { 
        "type": "text", 
        "name": "faxNumber", 
        "ui": { "description": "If you want to apply conditional validation on 'Fax Number' then you need to add 'Age' field greater than or equal to '25'.If you want to apply conditional expression of type 'string'", "label": "Fax Number" }, 
        "validators": { "digit": { "conditionalExpression": "x => x.age >=25" } } 
    }, 
    { 
        "type": "text", 
        "name": "mobileNumber", 
        "ui": { "description": "Shows custom message", "label": "Mobile Number" }, 
        "validators": { "digit": { "message": "Please enter only digit." } } 
    }, 
    { 
        "type": "text", 
        "name": "zipCode", 
        "ui": { "description": "custom message based on messageKey", "label": "  Zip Code" }, 
        "validators": { "digit": { "messageKey": "digitMessageKey" } } 
    }
]
