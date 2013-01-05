$(function(){
	function insertAtCaret(el, text){
		var strPos = el.selectionStart;
		var front = (el.value).substring(0,strPos);  
		var back = (el.value).substring(strPos,el.value.length);

		el.value=front+text+back;

	}
	function onKeyPress(e){
		var that = this;
		var ch = String.fromCharCode(e.which);

		setTimeout(function(){
			var curPos = that.selectionStart;
			switch(ch){
				case '(':
					insertAtCaret(that, ')');
					that.selectionStart = that.selectionEnd = curPos;
					break;
				case '{':
					insertAtCaret(that, '}');
					that.selectionStart = that.selectionEnd = curPos;
					break;
				case '[':
					insertAtCaret(that, ']');
					that.selectionStart = that.selectionEnd = curPos;
					break;
				case "'":
					insertAtCaret(that, "'");
					that.selectionStart = that.selectionEnd = curPos;
					break;
				case '"':
					insertAtCaret(that, '"');
					that.selectionStart = that.selectionEnd = curPos;
					break;
			}
		});

	}


	$('textarea, input[type="text"]').on('keypress',onKeyPress);
})