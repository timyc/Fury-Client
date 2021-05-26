cc.Class({
    extends: cc.Component,

    move: function (event) {
        var x_param = 400;
        var y_param = 250;
        if ((this.node.x < x_param) && (this.node.x > -x_param)) {
            this.node.x += ((this.node.x + event.getDeltaX() > x_param) || (this.node.x + event.getDeltaX() < -x_param) ? 0 : event.getDeltaX());
        } else {
            if (this.node.x >= x_param) {
                if (event.getDeltaX() < 0)
                {
                    this.node.x += event.getDeltaX();
                }
            } else if (this.node.x <= -x_param) {
                if (event.getDeltaX() > 0)
                {
                    this.node.x += event.getDeltaX();
                }
            }
        }

        if ((this.node.y < y_param) && (this.node.y > -y_param)) {
            this.node.y += ((this.node.y + event.getDeltaY() > y_param) || (this.node.y + event.getDeltaY() < -y_param) ? 0 : event.getDeltaY());
        } else {
            if (this.node.y >= y_param) {
                if (event.getDeltaY() < 0)
                {
                    this.node.y += event.getDeltaY();
                }
            } else if (this.node.y <= -y_param) {
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
            if (this._callback) {
                this._callback();
            }
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