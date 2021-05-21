// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        inventoryButton: cc.Button,
        panel: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    openInventory: function() {
        this.panel.getChildByName('background').width = 1000;
        this.panel.active = true;
    },

    start () {
        this.inventoryButton.node.on('click', this.openInventory, this);
    },

    // update (dt) {},
});
