/**
 * Copyright (C) 2000-2014 Geometria Contributors
 * http://geocentral.net/geometria
 * 
 * Geometria is free software released under the MIT License
 * http://opensource.org/licenses/MIT
 */
define([
    "geometria/GDictionary",
    "geometria/GLogContainer",
    "geometria/GMainContainer",
    "geometria/GSolution"
], function(dict, logContainer, mainContainer, GSolution) {

    return {

        enableAtPlayBack: true,

        icon: "geometriaIcon24 geometriaIcon24LogRewind",

        label: dict.get("action.Rewind"),
        
        execute: function() {
            logContainer.rewind();
            return {};
        },
        
        updateState: function() {
            var doc = mainContainer.currentDocument;
            if (doc instanceof GSolution) {
                this.base.enabled = logContainer.isPlaybackActive();
            }
        }
    };
});
