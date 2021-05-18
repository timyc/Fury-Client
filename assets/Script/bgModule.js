cc.Class({
    extends: cc.Component,

    move: function (event) {
        if ((this.node.x < 725) && (this.node.x > -725)) {
            this.node.x += ((this.node.x + event.getDeltaX() > 725) || (this.node.x + event.getDeltaX() < -725) ? 0 : event.getDeltaX());
        } else {
            if (this.node.x >= 725) {
                if (event.getDeltaX() < 0)
                {
                    this.node.x += event.getDeltaX();
                }
            } else if (this.node.x <= -725) {
                if (event.getDeltaX() > 0)
                {
                    this.node.x += event.getDeltaX();
                }
            }
        }

        if ((this.node.y < 250) && (this.node.y > -250)) {
            this.node.y += ((this.node.y + event.getDeltaY() > 250) || (this.node.y + event.getDeltaY() < -250) ? 0 : event.getDeltaY());
        } else {
            if (this.node.y >= 250) {
                if (event.getDeltaY() < 0)
                {
                    this.node.y += event.getDeltaY();
                }
            } else if (this.node.y <= -250) {
                if (event.getDeltaY() > 0)
                {
                    this.node.y += event.getDeltaY();
                }
            }
        }
    },

    // use this for initialization
    onLoad: function () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            this.node.on(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
            this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function () {
            this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
            if (this._callback) {
                this._callback();
            }
        }, this);
        // console.log(cc.director.getCollisionManager().enabled); THIS IS TRUE
    },
});