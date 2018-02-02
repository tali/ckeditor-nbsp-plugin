CKEDITOR.plugins.add('nbsp',
{
	init: function(editor) {
		editor.addCommand('insertNbsp', {
			exec : function(editor) {
				editor.insertHtml('&nbsp;');
			}
		});

		editor.addCommand('insertNarrowNbsp', {
			exec : function(editor) {
				editor.insertHtml('&#8239;');
			}
		});

		editor.ui.addButton('Nbsp', {
			label: 'Insert a non-breaking space',
			command: 'insertNbsp',
			icon: this.path + 'images/nbsp.png'
		});

		editor.keystrokeHandler.keystrokes[CKEDITOR.SHIFT + 32 /* SPACE */] = 'insertNbsp';
		editor.keystrokeHandler.keystrokes[CKEDITOR.SHIFT + CKEDITOR.CTRL + 32 /* SPACE */] = 'insertNarrowNbsp';
	}
});
