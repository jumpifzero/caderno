sap.ui.define([
	"jz/caderno/controller/Base.controller"
], function(BaseController) {
	"use strict";

	return BaseController.extend("jz.caderno.controller.App", {

        // ============================================================
        // User Action handlers. They should all start with "do"
        // ============================================================
        doEditSettings: function () {
            this.getRouter().navTo("settings");
        }

	});
});
