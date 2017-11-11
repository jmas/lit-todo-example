import {html} from 'lit-html/lib/lit-extended';
import {withForm} from 'lit-form';

export default withForm({
    onSubmit: (values, {props}) => {
        if (values.text) {
            props.onSave(values);
        }
    },
    mapPropsToValues: ({ text='' }) => ({ text }),
})(({
    values,
    handleChange,
    handleSubmit,
    adding = false,
}) => html`
    <form onsubmit="${ handleSubmit }">
        <input type="text" name="text" onchange="${ handleChange }" value="${ values.text }" autofocus />
        <button>${ adding ? 'Add': 'Save' }</button>
    </form>
`);
