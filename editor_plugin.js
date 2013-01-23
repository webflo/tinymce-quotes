/*

	Quotes Plugin - by Jürgen Höfs - www.dream-a-bit.de

	Adds two buttons for creating German (&raquo; / &laquo;) and France (&bdquo; / &rdquo) quotes;	

*/


(function() {

	tinymce.create("tinymce.plugins.Quotes", {

		init : function(editor, url) {

			/* France quotes */
	
			
			editor.addCommand("mceFranceQuotes", function() {
				var sel = editor.selection;
				var node = sel.getNode();
				if (node) {
					var dom = editor.dom;
					var content = sel.getContent().replace(/<p>/ig, "").replace(/<\/p>/ig, " ").replace(/[\s]+$/g, "");
					if (content) {
						sel.setContent("&raquo;" + content + "&laquo; ");
					} else {
						sel.setContent('&raquo;<span id="remove_me"></span>&laquo;');
						sel.select(sel.dom.select('span#remove_me')[0]); 
						sel.dom.remove(sel.dom.select('span#remove_me')[0]);
					}
					editor.nodeChanged();
				}
			});

			editor.addButton("francequotes", {
				title: "France Quotes",
				image: url + "/francequotes.gif",
				cmd: "mceFranceQuotes"
				
			});
			
			
			/* German Quotes */
			
			editor.addCommand("mceGermanQuotes", function() {
				var sel = editor.selection;
				var node = sel.getNode();
				if (node) {
					var dom = editor.dom;
					var content = sel.getContent().replace(/<p>/ig, "").replace(/<\/p>/ig, " ").replace(/[\s]+$/g, "");
					if (content) {
						sel.setContent("&bdquo;" + content + "&ldquo; ");
					} else {
						sel.setContent('&bdquo;<span id="remove_me"></span>&ldquo;');
						sel.select(sel.dom.select('span#remove_me')[0]); 
						sel.dom.remove(sel.dom.select('span#remove_me')[0]);
					}
					editor.nodeChanged();
				}
			});

			editor.addButton("germanquotes", {
				title: "German Quotes",
				image: url + "/germanquotes.gif",
				cmd: "mceGermanQuotes"
				
			});			
			
			
		}
	});

	tinymce.PluginManager.add("quotes", tinymce.plugins.Quotes);

})();
