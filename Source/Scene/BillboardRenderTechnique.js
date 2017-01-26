/*global define*/
define([
    '../Core/freezeObject'
], function(
    freezeObject) {
    'use strict';

    /**
     * Determines how billboards and points are rendered.
     *
     * @exports BillboardRenderTechnique
     */
    var BillboardRenderTechnique = {
        /**
         * The billboards in the collection are completely opaque.
         * @type {Number}
         * @constant
         */
        OPAQUE : 0,

        /**
         * The billboards in the collection are completely translucent.
         * @type {Number}
         * @constant
         */
        TRANSLUCENT : 1,

        /**
         * The billboards in the collection are both opaque and translucent.
         * @type {Number}
         * @constant
         */
        OPAQUE_AND_TRANSLUCENT : 2
    };

    return freezeObject(BillboardRenderTechnique);
});
