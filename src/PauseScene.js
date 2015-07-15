


var PauseScene = cc.Layer.extend({
    _rootNode: null,
    _widget: null,
    ctor:function () {
        this._super();
        this._rootNode = cc.Node.create();
        this.addChild(this._rootNode);
        //read widget
        this._widget = ccs.uiReader.widgetFromJsonFile(res.zantingLayer_json);

        this._rootNode.addChild(this._widget);

//        QY.MyCustomUI.addButtonTouch(this._widget,"onBack",this.onButon,this);
//
//        QY.MyCustomUI.addButtonTouch(this._widget,"onRetry",this.onButon,this);
//
        qy_mu.addButtonTouch(this._widget,"onJixu",this.onButon,this);
//
        qy_mu.addButtonTouch(this._widget,"onFanhuiDitu",this.onButon,this);
//
//        QY.MyCustomUI.addButtonTouch(this._widget,"onYinyue",this.onButon,this);
//
//        QY.MyCustomUI.addButtonTouch(this._widget,"onYinxiao",this.onButon,this);
//
//        var button = this._widget.getChildByName("onYinxiao");
//
//        QY.PlayGameCommon.updateYinxiaoView(button,2);
//
//        button = this._widget.getChildByName("onYinyue");
//
//        QY.PlayGameCommon.updateYinyueView(button,2);

    },
    onEnter:function () {
//        cc.registerTargetedDelegate(0, true, this);

        cc.log("onEnter");
        this._super();
    },
    onExit:function () {

//        cc.unregisterTouchDelegate(this);
        this._super();
    },
    onButon:function (sender, type) {

        if (type == ccui.Widget.TOUCH_ENDED) {

//            QY.GameAudioManager.playEffectByTag(QY.GameAudioManager.Effect_Menu_TAG);


//            if(sender.getName()=="onBack"){
//
//                QY.FrameworkCommon.setGameActionSched(1.0);
//                this.onBack(sender, type);
//
//            }
//            else if(sender.getName()=="onRetry"){
//
//                QY.FrameworkCommon.setGameActionSched(1.0);
//                this.onRetry(sender, type);
//
//            }
//            else
            if(sender.getName()=="onFanhuiDitu"){

                this.onFanhuiditu(sender, type);

            }
            else if(sender.getName()=="onJixu"){

                this.onJixu(sender, type);

            }
//            else if(sender.getName()=="onYinyue"){
//
//                this.onYinyue(sender, type);
//
//            }
//            else if(sender.getName()=="onYinxiao"){
//
//                this.onYinxiao(sender, type);
//
//            }


        }

    },
    onBack:function (sender, type) {

        cc.log("onBack");
        cc.director.resume();
        cc.director.runScene(new MainSelectScene());

    },
    onRetry:function (sender, type) {

        cc.log("onRetry");

        cc.director.resume();
        cc.director.runScene(new PlayGameScene());

    },
    onFanhuiditu:function (sender, type) {

        cc.log("onFanhuiditu");
        cc.director.resume();
        cc.director.runScene(new MainScene());

    },
    onJixu:function (sender, type) {

        cc.log("onJixu");

        cc.director.resume();
        this.removeFromParent();

    },
    onF:function (sender, type) {

        cc.log("onF");

        var win = window.open('http://www.facebook.com', '_blank');
        win.focus();

    },
    onYinyue:function (sender, type) {

        cc.log("onYinyue");

        QY.PlayGameCommon.changeYinyuebutton(sender,2,QY.GameAudioManager.Music_game_Background_TAG);


    },
    onYinxiao:function (sender, type) {

        cc.log("onYinxiao");

        QY.PlayGameCommon.changeYinxiaobutton(sender,2);

    }

});





var PauseSceneView = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new WinScene();
        this.addChild(layer);
    }
});