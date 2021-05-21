cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
    },

    // use this for initialization
    onLoad: function () {
    	cc.director.getCollisionManager().enabled = true;
        this.label.string = 'the best game ever made';
    },

    // called every frame
    update: function (dt) {

    },
});
