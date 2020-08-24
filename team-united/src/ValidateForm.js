export default function ValidateForm(values) {
    let errors = {}
    // let array = []
    let url = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i

    if (!values.name) {
        errors.name = `password is required ${" "}`

    } else if (values.name.length < 3) {
        errors.name = "name needs to be more than 3 characters"
    }

    // if (array.includes(value.names) === false) array.push(value);

    if (!values.description) {
        errors.description = `Enter description   ${" "} `;
    }
    else if (values.description.length < 20) {
        errors.descripton = ` description must be longer than 20 characters`

    } if (!values.link1) {
        errors.link1 = `enter url ${" "}`


    } else if (!url.test(values.link1)) {
        errors.link1 = `enter valid url ${" "}`
    }

    if (!values.link2) {
        errors.link2 = "enter valid url"
    } else if (!url.test(values.link2)) {
        errors.link2 = `enter valid url ${" "}`
    }
    return errors
}