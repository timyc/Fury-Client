cc.Class({
    extends: cc.Component,

    properties: {

        canvas: cc.Node,
        map: cc.Node

    },

    onLoad: function() {
        this.canvas.on(cc.Node.EventType.TOUCH_START, this.movePlayer, this);
    },

    movePlayer: function(event) {
        var pos = this.canvas.convertToNodeSpaceAR(event.getLocation());
        //this.map.setPosition(pos);
        this.node.setPosition(pos);
    },


});