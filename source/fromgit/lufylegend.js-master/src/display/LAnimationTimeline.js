/** @language chinese
 * 创建一个新的 LAnimationTimeline 实例。
 * LAnimationTimeline类在LAnimation 类的基础上提供了很多扩展。LAnimation 类需要调用本身的onframe函数才能播放动画，而LAnimationTimeline类则不需要。
 * @class LAnimationTimeline
 * @extends LAnimation
 * @constructor
 * @param {LBitmapData} data 一个LBitmapData对象，既包含一组或多组frame的精灵图表。
 * @param {Array} list <p>每个frame的属性值。</p>
 * <p>每个数组元素格式为{x : 0, y : 0, width : 100, height : 100, sx : 0, sy : 0}。 x, y, width, height分别对应LBitmapData对象的属性值，sx, sy是图像显示时的起始点坐标。</p>
 * <p>＊如果需要直接给对象设定label，可以给元素设定label属性，设定label属性时候，可以同时设定isMirror属性。</p>
 * <p>＊也可以给元素设定mirror（true或者false）属性，设定mirror属性的时候需要同时给所有元素设定mirror属性。</p>
 * <p>如果精灵图表中的每个frame大小都是的，你可以使用LGlobal.divideCoordinate函数来直接对图表进行分割。</p>
 * @example
 * 	LInit(50, "legend", 800, 480, main);
 * 	function main () {
 * 		var loader = new LLoader();
 * 		loader.addEventListener(LEvent.COMPLETE, loadBitmapdata);
 * 		loader.load("player.png", "bitmapData");
 * 	}
 * 	function loadBitmapdata(event){
 * 		var backLayer = new LSprite();
 * 		addChild(backLayer);
 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
 * 		player = new LAnimationTimeline(data,list);
 * 		backLayer.addChild(player);
 * 	}
 * @examplelink <p><a href="../../../api/LAnimationTimeline/index.html" target="_blank">测试链接</a></p>
 * @since 1.8.0
 * @public
 */
/** @language english
 * Creates a new LAnimation instance.
 * In the LAnimation, you must call the onframe function to play the animation,but in LAnimationTimeline don't have to do that.
 * @class LAnimationTimeline
 * @extends LAnimation
 * @constructor
 * @param {LBitmapData} data a LBitmapData object(SpriteSheet).
 * @param {Array} list <p>A frame's Setting。</p>
 * <p>The Setting's format is like this : {x : 0, y : 0, width : 100, height : 100, sx : 0, sy : 0}。 ［x, y, width, height］ is the LBitmapData object's property，［sx, sy］is the start coordinate.</p>
 * <p>If the frames all of the same size, you can use LGlobal.divideCoordinate function to split the SpriteSheets.</p>
 * @example
 * 	LInit(50, "legend", 800, 480, main);
 * 	function main () {
 * 		var loader = new LLoader();
 * 		loader.addEventListener(LEvent.COMPLETE, loadBitmapdata);
 * 		loader.load("player.png", "bitmapData");
 * 	}
 * 	function loadBitmapdata(event){
 * 		var backLayer = new LSprite();
 * 		addChild(backLayer);
 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
 * 		player = new LAnimationTimeline(data,list);
 * 		backLayer.addChild(player);
 * 	}
 * @examplelink <p><a href="../../../api/LAnimationTimeline/index.html" target="_blank">Try it »</a></p>
 * @since 1.8.0
 * @public
 */
/** @language japanese
 * 新しい LAnimation インスタンスを作成します。
 * LAnimationTimeline クラスはLAnimation クラスの上にいくつの便利な機能をサポートしています。LAnimation クラスでアニメーションを再生する時、自身のonframe函数を呼び出し無ければなりません、LAnimationTimelineクラスは自動的にアニメーションを再生することができます。
 * @class LAnimationTimeline
 * @extends LAnimation
 * @constructor
 * @param {LBitmapData} data LBitmapData オブジェクト（スプライトシート），アニメーションのひとコマひとコマをひとつにまとめた画像ファイルです。
 * @param {Array} list <p>frameごとの属性。</p>
 * <p>フォーマットは{x : 0, y : 0, width : 100, height : 100, sx : 0, sy : 0}の通りです。 x, y, width, heightはLBitmapData オブジェクトの各属性の値です，sx, syはひとコマのアニメーションを表示する時の座標です。</p>
 * <p>もしスプライトシートのframeの大きさが全部同じであれば、LGlobal.divideCoordinate関数を使って画像を分割することができます。</p>
 * @example
 * 	LInit(50, "legend", 800, 480, main);
 * 	function main () {
 * 		var loader = new LLoader();
 * 		loader.addEventListener(LEvent.COMPLETE, loadBitmapdata);
 * 		loader.load("player.png", "bitmapData");
 * 	}
 * 	function loadBitmapdata(event){
 * 		var backLayer = new LSprite();
 * 		addChild(backLayer);
 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
 * 		player = new LAnimationTimeline(data,list);
 * 		backLayer.addChild(player);
 * 	}
 * @examplelink <p><a href="../../../api/LAnimationTimeline/index.html" target="_blank">実際のサンプルを見る</a></p>
 * @since 1.8.0
 * @public
 */
var LAnimationTimeline = (function() {
	function LAnimationTimeline(data, list) {
		var s = this;
		LExtends(s, LAnimation, [null, data, list]);
		/** @language chinese
		 * 对象的类型
		 * @property type
		 * @type String
		 * @default LAnimationTimeline
		 * @since 1.8.0
		 * @public
		 */
		/** @language english
		 * type of the object
		 * @property type
		 * @type String
		 * @default LAnimationTimeline
		 * @since 1.8.0
		 * @public
		 */
		/** @language japanese
		 * オブジェクトのタイプ
		 * @property type
		 * @type String
		 * @default LAnimationTimeline
		 * @since 1.8.0
		 * @public
		 */
		s.type = "LAnimationTimeline";
		/** @language chinese
		 * 动画播放速度
		 * @property speed
		 * @type int
		 * @default 0
		 * @since 1.8.0
		 * @example
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(data,list);
		 * 		player.speed = 10;
		 * 		backLayer.addChild(player);
		 * 		var player2 = new LAnimationTimeline(data.clone(),list);
		 * 		player2.speed = 5;
		 * 		player2.x = 150;
		 * 		backLayer.addChild(player2);
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/speed.html" target="_blank">测试链接</a></p>
		 * @public
		 */
		/** @language english
		 * The Animation's speed.
		 * @property speed
		 * @type int
		 * @default 0
		 * @since 1.8.0
		 * @example
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(data,list);
		 * 		player.speed = 10;
		 * 		backLayer.addChild(player);
		 * 		var player2 = new LAnimationTimeline(data.clone(),list);
		 * 		player2.speed = 5;
		 * 		player2.x = 150;
		 * 		backLayer.addChild(player2);
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/speed.html" target="_blank">Try it »</a></p>
		 * @public
		 */
		/** @language japanese
		 * アニメーションのスピード。
		 * @property speed
		 * @type int
		 * @default 0
		 * @since 1.8.0
		 * @example
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(data,list);
		 * 		player.speed = 10;
		 * 		backLayer.addChild(player);
		 * 		var player2 = new LAnimationTimeline(data.clone(),list);
		 * 		player2.speed = 5;
		 * 		player2.x = 150;
		 * 		backLayer.addChild(player2);
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/speed.html" target="_blank">実際のサンプルを見る</a></p>
		 * @public
		 */
		s.speed = 0;
		s._speedIndex = 0;
		s.ll_labelList = {};
		for (var i = 0, sublist, j, child; i < list.length; i++) {
			sublist = list[i];
			for ( j = 0; j < sublist.length; j++) {
				child = sublist[j];
				if (child.label) {
					s.setLabel(child.label, i, j, 1, child.isMirror ? true : false);
				}
			}
		}
		s.addEventListener(LEvent.ENTER_FRAME, s._ll_onframe);
	};
	var p = {
		/** @language chinese
		 * 返回一个LAnimationTimeline的克隆对象。
		 * @method clone
		 * @return {LAnimationTimeline} 一个新的 LAnimationTimeline 对象，它与原始对象相同.
		 * @since 1.8.8
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	var player;
		 * 	var player2;
		 * 	function main(){
		 * 		var loader = new LLoader();
		 * 		loader.addEventListener(LEvent.COMPLETE, loadBitmapdata);
		 * 		loader.load("player.png", "bitmapData");
		 * 	}
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		player = new LAnimation(backLayer,data,list);
		 * 		player2 = player.clone();
		 * 		player2.setAction(2,0);
		 * 		player2.x = 150;
		 * 		backLayer.addChild(player2);
		 * 		backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);
		 * 	}
		 * 	function onframe(event){
		 * 		player.onframe();
		 * 		player2.onframe();
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/clone.html" target="_blank">测试链接</a></p>
		 */
		/** @language english
		 * Returns a new LAnimationTimeline object that is a clone of the original instance with an exact copy of the object.
		 * @method clone
		 * @return {LAnimationTimeline} A new LAnimationTimeline object that is identical to the original.
		 * @since 1.8.8
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	var player;
		 * 	var player2;
		 * 	function main(){
		 * 		var loader = new LLoader();
		 * 		loader.addEventListener(LEvent.COMPLETE, loadBitmapdata);
		 * 		loader.load("player.png", "bitmapData");
		 * 	}
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		player = new LAnimation(backLayer,data,list);
		 * 		player2 = player.clone();
		 * 		player2.setAction(2,0);
		 * 		player2.x = 150;
		 * 		backLayer.addChild(player2);
		 * 		backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);
		 * 	}
		 * 	function onframe(event){
		 * 		player.onframe();
		 * 		player2.onframe();
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/clone.html" target="_blank">Try it »</a></p>
		 */
		/** @language japanese
		 * 新しい LAnimationTimeline オブジェクトとして、元のインスタンスのクローンを返します。オブジェクトはまったく同じコピーになります。
		 * @method clone
		 * @return {LAnimationTimeline} 元のオブジェクトと同一の新しい LAnimationTimeline オブジェクトです。
		 * @since 1.8.8
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	var player;
		 * 	var player2;
		 * 	function main(){
		 * 		var loader = new LLoader();
		 * 		loader.addEventListener(LEvent.COMPLETE, loadBitmapdata);
		 * 		loader.load("player.png", "bitmapData");
		 * 	}
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		player = new LAnimation(backLayer,data,list);
		 * 		player2 = player.clone();
		 * 		player2.setAction(2,0);
		 * 		player2.x = 150;
		 * 		backLayer.addChild(player2);
		 * 		backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);
		 * 	}
		 * 	function onframe(event){
		 * 		player.onframe();
		 * 		player2.onframe();
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/clone.html" target="_blank">実際のサンプルを見る</a></p>
		 */
		clone : function() {
			var s = this, k, o, a = new LAnimation(null, s.bitmap.bitmapData, s.imageArray.slice(0));
			a.copyProperty(s);
			a.childList.length = 0;
			a.bitmap = s.bitmap.clone();
			a.addChild(a.bitmap);
			for (k in s.ll_labelList) {
				o = s.ll_labelList[k];
				a.ll_labelList[k] = {
					rowIndex : o.rowIndex,
					colIndex : o.colIndex,
					mode : o.mode,
					isMirror : o.isMirror
				};
			}
			return a;
		},
		setFrameSpeedAt : function(rowIndex, colIndex, speed) {
			var s = this;
			if (!s._ll_stepArray[rowIndex]) {
				s._ll_stepArray[rowIndex] = [];
			}
			s._ll_stepArray[rowIndex][colIndex] = speed;
		},
		_ll_onframe : function(event) {
			var self = event.target;
			if (self._ll_stop) {
				return;
			}
			if (self._speedIndex++ < self.speed) {
				return;
			}
			self._speedIndex = 0;
			self.onframe();
		},
		/** @language chinese
		 * 在LAnimationTimeline实例的时间轴中设置标签。
		 * @method setLabel
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/setLabel.html" target="_blank">测试链接</a></p>
		 */
		/** @language english
		 * Add a current label in the timeline of the LAnimationTimeline instance.
		 * @method setLabel
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/setLabel.html" target="_blank">Try it »</a></p>
		 */
		/** @language japanese
		 * LAnimationTimeline インスタンスのタイムライン内にラベルを追加します。
		 * @method setLabel
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/setLabel.html" target="_blank">実際のサンプルを見る</a></p>
		 */
		setLabel : function(name, _rowIndex, _colIndex, _mode, _isMirror) {
			this.ll_labelList[name] = {
				rowIndex : _rowIndex,
				colIndex : _colIndex,
				mode : _mode,
				isMirror : _isMirror
			};
		},
		/** @language chinese
		 * 开始播放 LAnimationTimeline 动画。
		 * @method play
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/play_stop.html" target="_blank">测试链接</a></p>
		 */
		/** @language english
		 * Starts playing the LAnimationTimeline object.
		 * @method play
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/play_stop.html" target="_blank">Try it »</a></p>
		 */
		/** @language japanese
		 * LAnimationTimeline オブジェクトの再生を開始します。
		 * @method play
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/play_stop.html" target="_blank">実際のサンプルを見る</a></p>
		 */
		play : function() {
			this._ll_stop = false;
		},
		/** @language chinese
		 * 停止播放 LAnimationTimeline 动画。
		 * @method stop
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/play_stop.html" target="_blank">测试链接</a></p>
		 */
		/** @language english
		 * Stop playing the LAnimationTimeline object.
		 * @method stop
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/play_stop.html" target="_blank">Try it »</a></p>
		 */
		/** @language japanese
		 * LAnimationTimeline オブジェクトの再生を停止します。
		 * @method stop
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/play_stop.html" target="_blank">実際のサンプルを見る</a></p>
		 */
		stop : function() {
			this._ll_stop = true;
		},
		/** @language chinese
		 * 从指定标签开始播放 LAnimationTimeline 动画。
		 * @method gotoAndPlay
		 * @param {String} label 表示播放头转到的帧标签的字符串。
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/gotoAndPlay.html" target="_blank">测试链接</a></p>
		 */
		/** @language english
		 * Starts playing the LAnimationTimeline object at the specified frame.
		 * @method gotoAndPlay
		 * @param {String} label a string representing the label of the frame.
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/gotoAndPlay.html" target="_blank">Try it »</a></p>
		 */
		/** @language japanese
		 * 指定されたフレームで LAnimationTimeline オブジェクトの再生を開始します。
		 * @method gotoAndPlay
		 * @param {String} label 再生ヘッドの送り先となるフレームのラベルを表すストリングです。
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/gotoAndPlay.html" target="_blank">実際のサンプルを見る</a></p>
		 */
		gotoAndPlay : function(name) {
			var s = this, l = s.ll_labelList[name];
			s.setAction(l.rowIndex, l.colIndex, l.mode, l.isMirror);
			s.onframe();
			s.play();
		},
		/** @language chinese
		 * 将播放头移到影片剪辑的指定标签并停在那里。
		 * @method gotoAndStop
		 * @param {String} label 表示播放头转到的帧标签的字符串。
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndStop("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/gotoAndStop.html" target="_blank">测试链接</a></p>
		 */
		/** @language english
		 * Brings the playhead to the specified frame of the movie clip and stops it there.
		 * @method gotoAndStop
		 * @param {String} label a string representing the label of the frame.
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndStop("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/gotoAndStop.html" target="_blank">Try it »</a></p>
		 */
		/** @language japanese
		 * このムービークリップの指定されたフレームに再生ヘッドを送り、そこで停止させます。
		 * @method gotoAndStop
		 * @param {String} label 再生ヘッドの送り先となるフレームのラベルを表すストリングです。
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndStop("right");
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/gotoAndStop.html" target="_blank">実際のサンプルを見る</a></p>
		 */
		gotoAndStop : function(name) {
			var s = this, l = s.ll_labelList[name];
			s.setAction(l.rowIndex, l.colIndex, l.mode, l.isMirror);
			s.onframe();
			s.stop();
		},
		/** @language chinese
		 * 向指定标签位置添加执行脚本。
		 * @method addFrameScript
		 * @param {String} label 指定标签。
		 * @param {Function} func 动画到达指定标签位置时要执行的函数。
		 * @param {Array} params 执行函数时的参数。
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		player.addFrameScript("right",scriptTest,["testParams1","testParams2"]);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * 	function scriptTest(param1,param2){
		 * 		trace("scriptTest Run : " + param1 + "," + param2);
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/addFrameScript.html" target="_blank">测试链接</a></p>
		 */
		/** @language english
		 * Add script to LAnimationTimeline object at the specified frame.
		 * @method addFrameScript
		 * @param {String} label the label of the frame.
		 * @param {Function} func function.
		 * @param {Array} params params.
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		player.addFrameScript("right",scriptTest,["testParams1","testParams2"]);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * 	function scriptTest(param1,param2){
		 * 		trace("scriptTest Run : " + param1 + "," + param2);
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/addFrameScript.html" target="_blank">Try it »</a></p>
		 */
		/** @language japanese
		 * 指定されたフレームにスクリプトを追加する。
		 * @method addFrameScript
		 * @param {String} label 指定されたフレーム。
		 * @param {Function} func 関数。
		 * @param {Array} params 関数を実行する時のパラメータ。
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		player.addFrameScript("right",scriptTest,["testParams1","testParams2"]);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * 	function scriptTest(param1,param2){
		 * 		trace("scriptTest Run : " + param1 + "," + param2);
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/addFrameScript.html" target="_blank">実際のサンプルを見る</a></p>
		 */
		addFrameScript : function(name, func, params) {
			var l = this.ll_labelList[name];
			var arr = this.imageArray[l.rowIndex][l.colIndex];
			arr.script = func;
			arr.params = params ? params : null;
		},
		/** @language chinese
		 * 删除指定标签位置的执行脚本。
		 * @method removeFrameScript
		 * @param {String} label 指定标签。
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		player.addFrameScript("right",scriptTest,["testParams1","testParams2"]);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * 	function scriptTest(param1,param2){
		 * 		trace("scriptTest Run : " + param1 + "," + param2);
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/removeFrameScript.html" target="_blank">测试链接</a></p>
		 */
		/** @language english
		 * Remove script at the specified frame.
		 * @method removeFrameScript
		 * @param {String} label the label of the frame.
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		player.addFrameScript("right",scriptTest,["testParams1","testParams2"]);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * 	function scriptTest(param1,param2){
		 * 		trace("scriptTest Run : " + param1 + "," + param2);
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/removeFrameScript.html" target="_blank">Try it »</a></p>
		 */
		/** @language japanese
		 * 指定されたフレームにあるスクリプトを削除する。
		 * @method removeFrameScript
		 * @param {String} label 指定されたフレーム。
		 * @since 1.8.0
		 * @public
		 * @example
		 * 	LInit(200,"legend",800,450,main);
		 * 	function loadBitmapdata(event){
		 * 		var backLayer = new LSprite();
		 * 		addChild(backLayer);
		 * 		var list = LGlobal.divideCoordinate(480,630,3,4);
		 * 		var data = new LBitmapData(event.currentTarget,0,0,120,210);
		 * 		var player = new LAnimationTimeline(backLayer,data,list);
		 * 		player.setLabel("right",2,0,1,true);
		 * 		player.addFrameScript("right",scriptTest,["testParams1","testParams2"]);
		 * 		backLayer.addChild(player);
		 * 		player.gotoAndPlay("right");
		 * 	}
		 * 	function scriptTest(param1,param2){
		 * 		trace("scriptTest Run : " + param1 + "," + param2);
		 * 	}
		 * @examplelink <p><a href="../../../api/LAnimationTimeline/removeFrameScript.html" target="_blank">実際のサンプルを見る</a></p>
		 */
		removeFrameScript : function(name) {
			var l = this.ll_labelList[name];
			this.imageArray[l.rowIndex][l.colIndex].script = null;
		}
	};
	for (var k in p) {
		LAnimationTimeline.prototype[k] = p[k];
	}
	return LAnimationTimeline;
})(); 