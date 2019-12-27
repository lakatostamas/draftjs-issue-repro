import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class App extends Component {
	constructor() {
		super();
		let editorState = EditorState.createEmpty();

		this.state = {
			editorState
		};
	}

	onChange = (editorState) => {
		this.setState({ editorState });
	}

	render() {
		let { editorState } = this.state;
		const style = editorState.getCurrentInlineStyle();
		editorState = EditorState.setInlineStyleOverride(editorState, style.add('BOLD'));

		return (
			<Editor
				defaultEditorState={editorState}
				//editorState={editorState}
				onEditorStateChange={this.onChange}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
			/>
		);
	}
}

export default App;
