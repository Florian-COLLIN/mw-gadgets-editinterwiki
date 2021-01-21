if ( mw.config.get("wgNamespaceNumber") === 0 ) {

	/* Code de placement dans la page */

	/* Requête langue */

	var = langue;

	function PromptInterwiki() {
		texte = "Veuillez entrer le nom de la langue (en, de...)";
		return PromptInterwiki();
	}

	/* Requête titre */

	/* Requête API */

	var params = {
		action: "edit",
		title: mw.config.get("wgPageName"),
		prependtext: "\n[["+ langue +":"+ titre +"]]",
		summary: window.EditInterwiki_Summary("[[meta:User:Florian COLLIN/editinterwiki" + mw.config.get("wgUserLanguage") + "|EditInterwiki]] : ajout du lien vers" + titre + "dans la langue" + langue +"."),
		tags: editinterwiki,
		minor: 1,
	},
	api = new mw.Api();

	api.postWithToken( 'csrf', params ).done( function ( data ) {
		console.log( data );
	} );
}