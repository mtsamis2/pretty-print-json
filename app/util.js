import yaml from 'js-yaml';

const xmlParser = require('json-xml-parse');
const xmlOptions = {
  beautify: true,
  selfClosing: true,
  attrKey: "@",
  contentKey: "#",
  entityMap: {
    '"': "&#34;",
    "&": "&#38;"
  },
  declaration: {
    encoding:'US-ASCII',
    standalone: 'yes'
  }
}

export function convertToXml (input) {
    let output = null;
    try {
        const parsedInput = JSON.parse(input);
        const xmlOutput = xmlParser.jsXml.toXmlString(xmlOptions, parsedInput);
        output = xmlOutput;
    } catch (error) {
        output = error.message;
    }
    return output
}

export function convertToYaml (input) {
    let output = null;
    try {
        const parsedInput = JSON.parse(input);
        const yamlOutput = yaml.dump(parsedInput);
        output = yamlOutput;
    } catch (error) {
        output = error.message;
    }
    return output
}
