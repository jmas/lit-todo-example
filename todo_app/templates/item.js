import {html} from 'lit-html/lib/lit-extended';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const {classes} = jss.createStyleSheet({
    container: {
        // todo
    },
}).attach();

export default ({text, done, onDoneChange, onEdit, onSave}) => html`
    <div className="${ classes.container }">
        <label>
            <input type="checkbox" checked="${ done }" onchange="${ onDoneChange }" />
            <span>${ text }</span>
        </label>
        <button type="button" onclick="${ onEdit }">Edit</button>
    </div>
`;
