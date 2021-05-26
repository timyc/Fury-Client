cc.Class({
    extends: cc.Component,
 
    properties: {
        player: cc.Node
    },
    // called every frame
    update: function (dt) {
        console.log('sussy');
        this.node.setPosition(this.player.position);
        this.node.parent.setPosition(this.player.position);
    }
});
 
