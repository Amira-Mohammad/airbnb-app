"use strict";(self.webpackChunkairbnb=self.webpackChunkairbnb||[]).push([[6326],{21857:function(e,t,i){i.d(t,{CS:function(){return y},Cw:function(){return _},Yu:function(){return w},j5:function(){return x},lm:function(){return S}});var r=i(74165),n=i(15861),a=i(37762),s=i(42265),o=i(19545),u=i(44055),l=i(76200),c=i(84652),h=i(35995),p=i(78952),f=i(41414),d=i(376),m=i(9014),v=i(49818),g={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function _(e){var t=e.folders||[],i=t.slice(),r=new Map,n=new Map,s=new Map,o=new Map,u=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:s,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=(0,c.d9)(e);t.featureSet.features=[];var i=e.featureSet.geometryType;r.set(i,t);var a=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?b(n,a,e.featureSet.features):"esriGeometryPolyline"===i?b(s,a,e.featureSet.features):"esriGeometryPolygon"===i&&b(o,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){u.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(r){var n=function(e,t,i){var r=function(e,t){var i;return t.some((function(t){return t.id===e&&(i=t,!0)})),i}(e,i);return r&&(r.parentFolderId=t,r.networkLink=r),r}(r,t.id,e.networkLinks);n&&i.push(n)}))})),i.forEach((function(e){if(e.featureInfos){e.points=(0,c.d9)(r.get("esriGeometryPoint")),e.polylines=(0,c.d9)(r.get("esriGeometryPolyline")),e.polygons=(0,c.d9)(r.get("esriGeometryPolygon")),e.mapImages=[];var t,i=(0,a.Z)(e.featureInfos);try{for(i.s();!(t=i.n()).done;){var n=t.value;switch(n.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var s=l[n.type].get(n.id);s&&e[g[n.type]].featureSet.features.push(s);break;case"GroundOverlay":var o=u.get(n.id);o&&e.mapImages.push(o)}}}catch(h){i.e(h)}finally{i.f()}e.fullExtent=S([e])}}));var h=S(i);return{folders:t,sublayers:i,extent:h}}function y(e,t,i,r){var n=o.id&&o.id.findCredential(e);e=(0,h.fl)(e,{token:n&&n.token});var a=s.Z.kmlServiceUrl;return(0,l.default)(a,{query:{url:e,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:r})}function x(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=[],a={},s=t.sublayers,o=t.folders.map((function(e){return e.id}));return s.forEach((function(t){var s=new e;if(i?s.read(t,i):s.read(t),r.length&&o.includes(s.id)&&(s.visible=r.includes(s.id)),a[t.id]=s,null!=t.parentFolderId&&-1!==t.parentFolderId){var u,l=a[t.parentFolderId];l.sublayers||(l.sublayers=[]),null===(u=l.sublayers)||void 0===u||u.unshift(s)}else n.unshift(s)})),n}function b(e,t,i){i.forEach((function(i){e.set(i.attributes[t],i)}))}function w(e){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)((0,r.Z)().mark((function e(t){var i,n,s,o,l,c,h,p,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=v.Z.fromJSON(t.featureSet).features,n=t.layerDefinition,s=(0,m.i)(n.drawingInfo.renderer),o=u.Z.fromJSON(t.popupInfo),l=[],c=(0,a.Z)(i),e.prev=2,c.s();case 4:if((h=c.n()).done){e.next=12;break}return p=h.value,e.next=8,s.getSymbolAsync(p);case 8:f=e.sent,p.symbol=f,p.popupTemplate=o,p.visible=!0,l.push(p);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),c.e(e.t0);case 17:return e.prev=17,c.f(),e.finish(17);case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function S(e){var t,i=(0,f.Ue)(f.Gv),r=(0,f.Ue)(f.Gv),n=(0,a.Z)(e);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features){var o,u=(0,a.Z)(s.polygons.featureSet.features);try{for(u.s();!(o=u.n()).done;){var l=o.value;(0,d.Yg)(i,l.geometry),(0,f.TC)(r,i)}}catch(w){u.e(w)}finally{u.f()}}if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features){var c,h=(0,a.Z)(s.polylines.featureSet.features);try{for(h.s();!(c=h.n()).done;){var m=c.value;(0,d.Yg)(i,m.geometry),(0,f.TC)(r,i)}}catch(w){h.e(w)}finally{h.f()}}if(s.points&&s.points.featureSet&&s.points.featureSet.features){var v,g=(0,a.Z)(s.points.featureSet.features);try{for(g.s();!(v=g.n()).done;){var _=v.value;(0,d.Yg)(i,_.geometry),(0,f.TC)(r,i)}}catch(w){g.e(w)}finally{g.f()}}if(s.mapImages){var y,x=(0,a.Z)(s.mapImages);try{for(x.s();!(y=x.n()).done;){var b=y.value;(0,d.Yg)(i,b.extent),(0,f.TC)(r,i)}}catch(w){x.e(w)}finally{x.f()}}}}catch(w){n.e(w)}finally{n.f()}return(0,f.fS)(r,f.Gv)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:p.Z.WGS84}}},45956:function(e,t,i){i.d(t,{JZ:function(){return k},RL:function(){return S},eY:function(){return C}});var r=i(29439),n=i(74165),a=i(15861),s=i(15671),o=i(43144),u=i(97326),l=i(11752),c=i(61120),h=i(60136),p=i(29388),f=i(92026),d=i(66978),m=i(22753),v=i(23588),g=i(15245),_=i(87422),y=i(10978),x=i(49800),b=i(8548),w=i(51378);function k(e){return e&&"render"in e}function S(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}var C=function(e){(0,h.Z)(i,e);var t=(0,p.Z)(i);function i(){var e,r,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1?arguments[1]:void 0;return(0,s.Z)(this,i),(n=t.call(this)).blendFunction="standard",n._sourceWidth=0,n._sourceHeight=0,n._textureInvalidated=!1,n._texture=null,n.stencilRef=0,n.coordScale=[1,1],n._height=void 0,n.pixelRatio=1,n.resolution=0,n.rotation=0,n._source=null,n._width=void 0,n.x=0,n.y=0,n.immutable=null!==(e=o.immutable)&&void 0!==e&&e,n.requestRenderOnSourceChangedEnabled=null===(r=o.requestRenderOnSourceChangedEnabled)||void 0===r||r,n.source=a,n.requestRender=n.requestRender.bind((0,u.Z)(n)),n}return(0,o.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null),(0,f.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}},{key:"isSourceScaled",get:function(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this._sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}},{key:"width",get:function(){return void 0!==this._width?this._width:this._sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,l.Z)((0,c.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e)}},{key:"setSourceAsync",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,f.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort(),r=new AbortController,a=(0,d.hh)(),e.abrupt("return",((0,d.$F)(i,(function(){return r.abort()})),(0,d.$F)(r,(function(e){return a.reject(e)})),this._uploadStatus={controller:r,resolver:a},this.source=t,a.promise));case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"updateTransitionProperties",value:function(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),(0,l.Z)((0,c.Z)(i.prototype),"updateTransitionProperties",this).call(this,e,t)}},{key:"setTransform",value:function(e){var t=(0,m.g)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),n=(0,r.Z)(i,2),a=n[0],s=n[1],o=this.resolution/this.pixelRatio/e.resolution,u=o*this.width,l=o*this.height,c=Math.PI*this.rotation/180;(0,m.h)(t,t,(0,g.f)(a,s)),(0,m.h)(t,t,(0,g.f)(u/2,l/2)),(0,m.r)(t,t,-c),(0,m.h)(t,t,(0,g.f)(-u/2,-l/2)),(0,m.k)(t,t,(0,g.f)(u,l)),(0,m.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var i,r,a,s,o,u,l,c,h,p,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.context,r=t.painter,this._textureInvalidated){e.next=3;break}return e.abrupt("return");case 3:if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(i)),this.source){e.next=5;break}return e.abrupt("return",void this._texture.setData(null));case 5:if(this._texture.resize(this._sourceWidth,this._sourceHeight),n=this.source,a=k(n)?n instanceof y.Z?(0,f.yw)(n.getRenderedRasterPixels(),(function(e){return e.renderedRasterPixels})):S(n):n,e.prev=7,!(0,f.pC)(this._uploadStatus)){e.next=16;break}return s=this._uploadStatus,o=s.controller,u=s.resolver,l={signal:o.signal},c=this.width,h=this.height,p=this._texture,m=r.textureUploadManager,e.next=12,m.enqueueTextureUpdate({data:a,texture:p,width:c,height:h},l);case 12:u.resolve(),this._uploadStatus=null,e.next=17;break;case 16:this._texture.setData(a);case 17:this.ready(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),(0,d.H9)(e.t0);case 23:case"end":return e.stop()}var n}),e,this,[[7,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onDetach",value:function(){this.destroy()}},{key:"_createTransforms",value:function(){return{dvs:(0,v.c)()}}},{key:"_createTexture",value:function(e){var t=this.immutable&&e.type===x.zO.WEBGL2;return new w.x(e,{target:b.No.TEXTURE_2D,pixelFormat:b.VI.RGBA,internalFormat:t?b.lP.RGBA8:b.VI.RGBA,dataType:b.Br.UNSIGNED_BYTE,wrapMode:b.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}]),i}(_.s)},90110:function(e,t,i){i.d(t,{c:function(){return p}});var r=i(93433),n=i(15671),a=i(43144),s=i(11752),o=i(61120),u=i(60136),l=i(29388),c=i(62272),h=i(80613),p=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments))._hasCrossfade=!1,e}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this._hasCrossfade}},{key:"beforeRender",value:function(e){(0,s.Z)((0,o.Z)(i.prototype),"beforeRender",this).call(this,e),this._manageFade()}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"bitmap",brushes:[c.U.bitmap],target:function(){return t.children},drawPhase:h.jx.MAP});return[].concat((0,r.Z)((0,s.Z)((0,o.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[n])}},{key:"_manageFade",value:function(){this.children.reduce((function(e,t){return e+(t.inFadeTransition?1:0)}),0)>=2?(this.children.forEach((function(e){return e.blendFunction="additive"})),this._hasCrossfade=!0):(this.children.forEach((function(e){return e.blendFunction="standard"})),this._hasCrossfade=!1)}}]),i}(i(64510).Z)},10978:function(e,t,i){i.d(t,{Z:function(){return s}});var r=i(15671),n=i(43144),a=i(92026),s=function(){function e(t,i,n){(0,r.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=n}return(0,n.Z)(e,[{key:"width",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t,i=this.pixelBlock;if(!(0,a.Wi)(i)){var r=this.filter({extent:this.extent,pixelBlock:null!==(t=this.originalPixelBlock)&&void 0!==t?t:i});if(!(0,a.Wi)(r.pixelBlock)){r.pixelBlock.maskIsAlpha&&(r.pixelBlock.premultiplyAlpha=!0);var n=r.pixelBlock.getAsRGBA(),s=e.createImageData(r.pixelBlock.width,r.pixelBlock.height);s.data.set(n),e.putImageData(s,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return(0,a.Wi)(e.pixelBlock)?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}]),e}()},6326:function(e,t,i){i.r(t),i.d(t,{default:function(){return Y}});var r=i(93433),n=i(1413),a=i(29439),s=i(37762),o=i(74165),u=i(15861),l=i(60136),c=i(29388),h=i(43144),p=i(15671),f=i(27366),d=i(19545),m=i(40281),v=i(92026),g=i(94172),_=i(35995),y=i(49861),x=(i(25243),i(63780),i(69912)),b=i(53866),w=i(79803),k=i(78952),S=i(21857),C=i(23084),Z=i(78983),V=i(45956),T=i(90110),I=i(95986),E=i(75391),R=i(34035),A=i(67581),P=i(76200),B=i(585),M=i(80394),D=i(25866),G=i(40658),U=i(8548),O=i(53634),L=i(48673),F=i(86401),N=i(51378),q=function(){function e(t){if((0,p.Z)(this,e),this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(e._instance)return e._instanceRefCount++,e._instance;e._instanceRefCount=1,e._instance=this,this._ownsRctx=!0;var i=document.createElement("canvas").getContext("webgl");i.getExtension("OES_texture_float"),this._rctx=new F.x(i,{})}var r=(0,G.s)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new D.Z(this._rctx,[0,0,1,0,0,1,1,1])}return(0,h.Z)(e,[{key:"reprojectTexture",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=(0,w.iV)(e.extent,t),n=new B.Z({x:(e.extent.xmax-e.extent.xmin)/e.texture.descriptor.width,y:(e.extent.ymax-e.extent.ymin)/e.texture.descriptor.height,spatialReference:e.extent.spatialReference}),a=(0,M.VO)(n,t,e.extent),s=(a.x+a.y)/2,o=Math.round((r.xmax-r.xmin)/s),u=Math.round((r.ymax-r.ymin)/s);s=(r.width/o+r.height/u)/2;var l=new B.Z({x:s,y:s,spatialReference:r.spatialReference}),c=(0,M.Qp)({projectedExtent:r,srcBufferExtent:e.extent,pixelSize:l,hasWrapAround:!0,spacing:[16,16]}),h=(0,L.Br)(this._rctx,c),p=new N.x(this._rctx,{width:o,height:u,pixelFormat:U.VI.RGBA,dataType:U.Br.UNSIGNED_BYTE,wrapMode:U.e8.CLAMP_TO_EDGE,samplingMode:U.cw.LINEAR,hasMipmap:!1}),f=new O.X(this._rctx,{colorTarget:U.Lm.TEXTURE,depthStencilTarget:U.OU.NONE,width:o,height:u},p);this._rctx.bindFramebuffer(f),this._rctx.setViewport(0,0,o,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(e.texture,0),this._rctx.bindTexture(h,1),this._quad.bind();var d=e.texture.descriptor,m=d.width,v=void 0===m?0:m,g=d.height,_=void 0===g?0:g;if(this._program.setUniform2f("u_srcImageSize",v,_),this._program.setUniform2fv("u_transformSpacing",c.spacing),this._program.setUniform2fv("u_transformGridSize",c.size),this._program.setUniform2f("u_targetImageSize",o,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),h.dispose(),i){var y=f.descriptor,x=y.width,b=void 0===x?0:x,k=y.height,S=void 0===k?0:k,C=new ImageData(b,S);return f.readPixels(0,0,b,S,U.VI.RGBA,U.Br.UNSIGNED_BYTE,C.data),f.detachColorTexture(U.VY.COLOR_ATTACHMENT0),f.dispose(),{texture:p,extent:r,imageData:C}}return f.detachColorTexture(U.VY.COLOR_ATTACHMENT0),f.dispose(),{texture:p,extent:r}}},{key:"reprojectBitmapData",value:function(e,t){var i=(0,V.JZ)(e.bitmapData)?(0,V.RL)(e.bitmapData):e.bitmapData,r=new N.x(this._rctx,{width:e.bitmapData.width,height:e.bitmapData.height,pixelFormat:U.VI.RGBA,dataType:U.Br.UNSIGNED_BYTE,wrapMode:U.e8.CLAMP_TO_EDGE,samplingMode:U.cw.LINEAR,hasMipmap:!1},i),n=this.reprojectTexture({texture:r,extent:e.extent},t,!0);n.texture.dispose();var a=document.createElement("canvas"),s=n.imageData;return a.width=s.width,a.height=s.height,a.getContext("2d").putImageData(s,0,0),{bitmapData:a,extent:n.extent}}},{key:"loadAndReprojectBitmapData",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,i,r){var n,a,s,u,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.default)(t,{responseType:"image"});case 2:if(n=e.sent.data,(a=document.createElement("canvas")).width=n.width,a.height=n.height,(s=a.getContext("2d")).drawImage(n,0,0),u=s.getImageData(0,0,a.width,a.height),!i.spatialReference.equals(r)){e.next=10;break}return e.abrupt("return",{bitmapData:u,extent:i});case 10:return l=this.reprojectBitmapData({bitmapData:u,extent:i},r),e.abrupt("return",{bitmapData:l.bitmapData,extent:l.extent});case 12:case"end":return e.stop()}}),e,this)})));return function(t,i,r){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this._ownsRctx?(e._instanceRefCount--,0===e._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),e._instance=null)):(this._quad.dispose(),this._program.dispose())}}]),e}();q._instanceRefCount=0;var z=(0,h.Z)((function e(){(0,p.Z)(this,e),this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]})),W=function(e){(0,l.Z)(i,e);var t=(0,c.Z)(i);function i(){var e;return(0,p.Z)(this,i),(e=t.apply(this,arguments))._bitmapIndex=new Map,e._mapImageContainer=new T.c,e._kmlVisualData=new z,e._fetchController=null,e.allVisiblePoints=new Z.J,e.allVisiblePolylines=new Z.J,e.allVisiblePolygons=new Z.J,e.allVisibleMapImages=new m.Z,e}return(0,h.Z)(i,[{key:"hitTest",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,i){var r,n,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.layer,e.abrupt("return",[null===(r=this._pointsView)||void 0===r?void 0:r.hitTest(t),null===(n=this._polylinesView)||void 0===n?void 0:n.hitTest(t),null===(a=this._polygonsView)||void 0===a?void 0:a.hitTest(t)].flat().filter(Boolean).map((function(e){return e.layer=s,e.sourceLayer=s,{type:"graphic",graphic:e,layer:s,mapPoint:t}})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"update",value:function(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}},{key:"attach",value:function(){var e=this;this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:function(){return e.requestUpdate()},container:new E.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:function(){return e.requestUpdate()},container:new E.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:function(){return e.requestUpdate()},container:new E.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(function(t){t.added.forEach((function(t){return e._addMapImage(t)})),t.removed.forEach((function(t){return e._removeMapImage(t)}))})),(0,g.YP)((function(){return e.layer.visibleSublayers}),(function(t){var i,r=(0,s.Z)(e._kmlVisualData.allSublayers);try{for(r.s();!(i=r.n()).done;){var n=(0,a.Z)(i.value,2);n[0];n[1].visibility=0}}catch(h){r.e(h)}finally{r.f()}var o,u=(0,s.Z)(t);try{for(u.s();!(o=u.n()).done;){var l=o.value,c=e._kmlVisualData.allSublayers.get(l.id);c&&(c.visibility=1)}}catch(h){u.e(h)}finally{u.f()}e._refreshCollections()}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new q}},{key:"detach",value:function(){this._fetchController=(0,v.IM)(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=(0,v.SC)(this._polygonsView),this._polylinesView=(0,v.SC)(this._polylinesView),this._pointsView=(0,v.SC)(this._pointsView),this._imageReprojector=(0,v.SC)(this._imageReprojector)}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}},{key:"moveEnd",value:function(){}},{key:"isUpdating",value:function(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}},{key:"_addMapImage",value:function(e){var t,i,r=this;((null===(t=this.view.spatialReference)||void 0===t?void 0:t.isWGS84)||(null===(i=this.view.spatialReference)||void 0===i?void 0:i.isWebMercator))&&this._imageReprojector.loadAndReprojectBitmapData(e.href,b.Z.fromJSON(e.extent),this.view.spatialReference).then((function(t){var i=new V.eY(t.bitmapData,{immutable:!1,requestRenderOnSourceChangedEnabled:!0});i.x=t.extent.xmin,i.y=t.extent.ymax,i.resolution=t.extent.width/t.bitmapData.width,i.rotation=e.rotation,r._mapImageContainer.addChild(i),r._bitmapIndex.set(e,i)}))}},{key:"_getViewDependentUrl",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,i){var r,a,s,u,l,c,h,p,f,m,g,y,x,S,Z,V,T,I;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.viewFormat,a=t.viewBoundScale,s=t.httpQuery,!(0,v.pC)(r)){e.next=20;break}if(!(0,v.Wi)(i)){e.next=4;break}throw new Error("Loading this network link requires a view state.");case 4:return e.next=6,(0,w.zD)();case 6:if(!(0,v.pC)(a)||1===a){e.next=11;break}(l=new b.Z(i.extent)).expand(a),u=l,e.next=12;break;case 11:u=i.extent;case 12:return u=(0,w.iV)(u,k.Z.WGS84),c=(0,w.iV)(u,k.Z.WebMercator),h=u.xmin,p=u.xmax,f=u.ymin,m=u.ymax,g=i.size[0]*i.pixelRatio,y=i.size[1]*i.pixelRatio,x=Math.max(c.width,c.height),S={"[bboxWest]":h.toString(),"[bboxEast]":p.toString(),"[bboxSouth]":f.toString(),"[bboxNorth]":m.toString(),"[lookatLon]":u.center.x.toString(),"[lookatLat]":u.center.y.toString(),"[lookatRange]":x.toString(),"[lookatTilt]":"0","[lookatHeading]":i.rotation.toString(),"[lookatTerrainLon]":u.center.x.toString(),"[lookatTerrainLat]":u.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":u.center.x.toString(),"[cameraLat]":u.center.y.toString(),"[cameraAlt]":x.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":g.toString(),"[vertPixels]":y.toString(),"[terrainEnabled]":"0","[clientVersion]":d.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},Z=function(e){for(var t in e)for(var i in S)e[t]=e[t].replace(i,S[i])},V=(0,_.u0)(r),Z(V),T={},(0,v.pC)(s)&&(T=(0,_.u0)(s),Z(T)),(I=(0,C.en)(t.href)).query=(0,n.Z)((0,n.Z)((0,n.Z)({},I.query),V),T),e.abrupt("return","".concat(I.path,"?").concat((0,_.B7)(V)));case 20:return e.abrupt("return",t.href);case 21:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new z,e.next=3,this._loadVisualData(this.layer.url,i,t);case 3:this._kmlVisualData=i,this._refreshCollections();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_refreshCollections",value:function(){var e=this;this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item})))}},{key:"_isSublayerVisible",value:function(e){var t=this._kmlVisualData.allSublayers.get(e);return!(null===t||void 0===t||!t.visibility)&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}},{key:"_loadVisualData",value:function(e,t,i){var n=this;return this._fetchParsedKML(e,i).then(function(){var e=(0,u.Z)((0,o.Z)().mark((function e(a){var u,l,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=(0,s.Z)(a.sublayers),e.prev=1,c=(0,o.Z)().mark((function e(){var a,s,u,c,h,p,f,d,m,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h=l.value,t.allSublayers.set(h.id,h),!h.points){e.next=8;break}return e.next=5,(0,S.Yu)(h.points);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=[];case 9:if(p=e.t0,!h.polylines){e.next=16;break}return e.next=13,(0,S.Yu)(h.polylines);case 13:e.t1=e.sent,e.next=17;break;case 16:e.t1=[];case 17:if(f=e.t1,!h.polygons){e.next=24;break}return e.next=21,(0,S.Yu)(h.polygons);case 21:e.t2=e.sent,e.next=25;break;case 24:e.t2=[];case 25:if(d=e.t2,m=h.mapImages||[],(a=t.allPoints).push.apply(a,(0,r.Z)(p.map((function(e){return{item:e,sublayerId:h.id}})))),(s=t.allPolylines).push.apply(s,(0,r.Z)(f.map((function(e){return{item:e,sublayerId:h.id}})))),(u=t.allPolygons).push.apply(u,(0,r.Z)(d.map((function(e){return{item:e,sublayerId:h.id}})))),(c=t.allMapImages).push.apply(c,(0,r.Z)(m.map((function(e){return{item:e,sublayerId:h.id}})))),!h.networkLink){e.next=33;break}return e.next=30,n._getViewDependentUrl(h.networkLink,n.view.state);case 30:return v=e.sent,e.next=33,n._loadVisualData(v,t,i);case 33:case"end":return e.stop()}}),e)})),u.s();case 4:if((l=u.n()).done){e.next=8;break}return e.delegateYield(c(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),u.e(e.t1);case 13:return e.prev=13,u.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}())}},{key:"_fetchParsedKML",value:function(e,t){return(0,S.CS)(e,this.layer.spatialReference,this.layer.refreshInterval,t).then((function(e){return(0,S.Cw)(e.data)}))}},{key:"_removeMapImage",value:function(e){var t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}}]),i}((0,I.y)(A.Z));(0,f._)([(0,y.Cb)()],W.prototype,"_pointsView",void 0),(0,f._)([(0,y.Cb)()],W.prototype,"_polylinesView",void 0),(0,f._)([(0,y.Cb)()],W.prototype,"_polygonsView",void 0),(0,f._)([(0,y.Cb)()],W.prototype,"updating",void 0);var Y=W=(0,f._)([(0,x.j)("esri.views.2d.layers.KMLLayerView2D")],W)},48673:function(e,t,i){i.d(t,{Br:function(){return c},Fm:function(){return v},N9:function(){return _},RA:function(){return y},Tc:function(){return p},Ue:function(){return f},iC:function(){return h},s9:function(){return l},v:function(){return g},xW:function(){return m},zS:function(){return d}});var r=i(29439),n=i(92026),a=i(6394),s=i(49800),o=i(8548),u=i(51378);function l(e,t){var i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nearest",n=!(arguments.length>3&&void 0!==arguments[3]&&arguments[3]&&"u8"===t.pixelType),a=n?o.Br.FLOAT:o.Br.UNSIGNED_BYTE,l=null==t.pixels||0===t.pixels.length?null:n?t.getAsRGBAFloat():t.getAsRGBA(),c=null===(i=e.capabilities.textureFloat)||void 0===i?void 0:i.textureFloatLinear,h={width:t.width,height:t.height,target:o.No.TEXTURE_2D,pixelFormat:o.VI.RGBA,internalFormat:e.type===s.zO.WEBGL2&&n?o.lP.RGBA32F:o.VI.RGBA,samplingMode:!c||"bilinear"!==r&&"cubic"!==r?o.cw.NEAREST:o.cw.LINEAR,dataType:a,wrapMode:o.e8.CLAMP_TO_EDGE,flipped:!1};return new u.x(e,h,l)}function c(e,t){var i=t.spacing,n=t.offsets,a=t.coefficients,l=(0,r.Z)(t.size,2),c=l[0],h=l[1],p=i[0]>1,f={width:p?4*c:c,height:h,target:o.No.TEXTURE_2D,pixelFormat:o.VI.RGBA,internalFormat:e.type===s.zO.WEBGL2?o.lP.RGBA32F:o.VI.RGBA,dataType:o.Br.FLOAT,samplingMode:o.cw.NEAREST,wrapMode:o.e8.CLAMP_TO_EDGE,flipped:!1},d=new Float32Array(p?c*h*16:2*n.length);if(p&&null!=a)for(var m=0,v=0;m<a.length;m++)d[v++]=a[m],m%3==2&&(d[v++]=1);else for(var g=0;g<h;g++)for(var _=0;_<c;_++){var y=4*(g*c+_),x=2*(_*h+g);d[y]=n[x],d[y+1]=n[x+1],d[y+3]=-1===n[x]?0:1}return new u.x(e,f,d)}function h(e,t){var i={width:t.length/4,height:1,target:o.No.TEXTURE_2D,pixelFormat:o.VI.RGBA,internalFormat:o.VI.RGBA,dataType:o.Br.UNSIGNED_BYTE,samplingMode:o.cw.NEAREST,wrapMode:o.e8.CLAMP_TO_EDGE,flipped:!1};return new u.x(e,i,t)}function p(e,t,i){return{u_flipY:!(arguments.length>4&&void 0!==arguments[4])||arguments[4],u_applyTransform:!!e,u_opacity:arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u_transformSpacing:e?e.spacing:a.Z,u_transformGridSize:e?e.size:a.Z,u_targetImageSize:t,u_srcImageSize:i}}function f(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function d(e,t){return{u_scale:e,u_offset:t}}function m(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function v(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function g(e,t){var i=e.gl,r=t.glName,a=new Map;if((0,n.Wi)(r))return a;for(var s,o=i.getProgramParameter(r,i.ACTIVE_UNIFORMS),u=0;u<o;u++)(s=i.getActiveUniform(r,u))&&a.set(s.name,{location:i.getUniformLocation(r,s.name),info:s});return a}function _(e,t,i){Object.keys(i).forEach((function(r){var n=t.get(r)||t.get(r+"[0]");n&&function(e,t,i,r){if(null===r||null==i)return!1;var n=r.info;switch(n.type){case o.Se.FLOAT:n.size>1?e.setUniform1fv(t,i):e.setUniform1f(t,i);break;case o.Se.FLOAT_VEC2:e.setUniform2fv(t,i);break;case o.Se.FLOAT_VEC3:e.setUniform3fv(t,i);break;case o.Se.FLOAT_VEC4:e.setUniform4fv(t,i);break;case o.Se.FLOAT_MAT3:e.setUniformMatrix3fv(t,i);break;case o.Se.FLOAT_MAT4:e.setUniformMatrix4fv(t,i);break;case o.Se.INT:n.size>1?e.setUniform1iv(t,i):e.setUniform1i(t,i);break;case o.Se.BOOL:e.setUniform1i(t,i?1:0);break;case o.Se.INT_VEC2:case o.Se.BOOL_VEC2:e.setUniform2iv(t,i);break;case o.Se.INT_VEC3:case o.Se.BOOL_VEC3:e.setUniform3iv(t,i);break;case o.Se.INT_VEC4:case o.Se.BOOL_VEC4:e.setUniform4iv(t,i);break;default:return!1}}(e,r,i[r],n)}))}function y(e,t,i,r){i.length===r.length&&(r.some((function(e){return null==e}))||i.some((function(e){return null==e}))||i.forEach((function(i,n){t.setUniform1i(i,n),e.bindTexture(r[n],n)})))}}}]);
//# sourceMappingURL=6326.e22b5b25.chunk.js.map