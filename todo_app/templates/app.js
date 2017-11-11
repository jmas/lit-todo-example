import {html} from 'lit-html/lib/lit-extended';
import formTemplate from './form';
import itemTemplate from './item';
import jss from 'jss';
import preset from 'jss-preset-default';
import cx from 'classnames';

jss.setup(preset());

const {classes} = jss.createStyleSheet({
	container: {
        width: '500px',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px',
        borderRadius: '3px',
        boxShadow: '0 0 5px silver',
	},
	addForm: {
		marginBottom: '20px',
		border: '1px solid silver',
		padding: '10px',
		borderRadius: '3px',
		backgroundColor: 'silver',
	},
	list: {
        // todo
	},
	listItem: {
		borderTop: '1px solid silver',
		padding: '10px',
        '&:last-child': {
            borderBottom: '1px solid silver',
        },
	},
	listItemEditing: {
		backgroundColor: 'yellow',
	},
}).attach();

export default ({todos=[], editing, actions}) => html`
    <div className="${ classes.container }">
        <div className="${ classes.addForm }">
            ${ formTemplate({ adding: true, onSave: ({text}) => actions.add(text) }) }
        </div>
        <div className="${ classes.list }">
            ${ todos.map(item => html`
                <div className="${ cx(classes.listItem, editing===item ? classes.listItemEditing: null) }">
                    ${ editing===item
                        ? formTemplate({ onSave: ({text}) => actions.save(item, text), text: item.text })
                        : itemTemplate({ ...item, onDoneChange: () => actions.toggleDone(item), onEdit: () => actions.edit(item) })
                    }
                    ${ editing===item
                        ? html`<button type="button" onclick="${ () => actions.delete(item) }">Delete</button>`
                        : null
                    }
                </div>
            `) }
        </div>
    </div>
`;
