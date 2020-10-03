var elements = document.getElementsByTagName('*');

// console.log('elements: ', elements);
// need to replace multiple words
var dict = {'Donald Trump' : 'https://www.nytimes.com/live/2020/09/29/us/debate-fact-check'}

var markers = Object.keys(dict);

// add hyperlinks to 

// key : hyperlink

// replace with word + '*' href = 'hyperlink'

for (var i = 0; i < elements.length; i++) {

	var element = elements[i];
	// console.log(element);
	for (var j = 0; j < element.childNodes.length; j++) { // child notes??
		var node = element.childNodes[j];
		// console.log('node: ', node);

		if (node.nodeType === 3) { /// keys.includes(node);
			var text = node.nodeValue;
			var output = '';

			var input = document.createElement('div');
			input.setAttribute('href', 'https://www.nytimes.com/live/2020/09/29/us/debate-fact-check');
			input.innerHTML = 'Donald*';
			var replacedText = text.replace(/Donald/gi, input);
			
			if (replacedText !== text) {
				element.replaceChild(document.createTextNode(replacedText) + input, node);
			}
			// result = words.filter(word => word.length > 6) 
			// var result = text.
			// create a new node
			// add href to that with specific link
			// append node 
		}
	}
}


// var replacedText = text.replace(/Donald/gi, `Donald ${input}`);
			
// if (replacedText !== text) {

{/* <text>Donald Trump is in the hospital</text>
<text> Donald Trump<div href = 'link'>*</div> is in the hospital </text> */}