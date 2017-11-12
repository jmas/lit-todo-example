import {html} from 'lit-html/lib/lit-extended';
import jss from 'jss';
import preset from 'jss-preset-default';
import cx from 'classnames';

jss.setup(preset());

const {classes} = jss.createStyleSheet({
    container: {
        '&:hover $editButton': {
            visibility: 'visible',
        },
    },
    check: {
        marginRight: '10px',
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    text: {
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    editButton: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginLeft: '5px',
        visibility: 'hidden',
    },
}).attach();

export default ({text, done, onDoneChange, onEdit, onSave}) => html`
    <div className="${ classes.container }">
        <label>
            <input
                type="checkbox"
                checked="${ done }"
                onchange="${ onDoneChange }"
                className="${ classes.check }"
            />
            <span className="${ classes.text }">${ text }</span>
        </label>
        <button
            type="button"
            onclick="${ onEdit }"
            className="${ cx(classes.editButton, 'editButton') }"
        >Edit</button>
    </div>
`;
