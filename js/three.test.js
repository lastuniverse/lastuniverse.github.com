function showMan(){

	var blendMesh, camera, scene, renderer;
	var isFrameStepping = false;
	var timeToStep = 1;
	var clock = new THREE.Clock();


	var sx = (parseInt(geometry.elements.gcanvas.style.width)>>1) + parseInt(geometry.elements.gcanvas.style.left) - 96;  
	var sy = (parseInt(geometry.elements.gcanvas.style.height)>>1) + parseInt(geometry.elements.gcanvas.style.top) - 96;	
	
		var div =	cellCreate();
    //div.style.border='2px solid green';
    div.style.width = '192px';
    div.style.height = '192px';
    div.style.left = sx+'px';
    div.style.top = sy+'px';
    div.style.zindex = 99;
		document.body.appendChild(div);
		
		
	renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(192, 192);
    div.appendChild(renderer.domElement);
    //renderer.domElement.style.border='2px solid red';
    renderer.domElement.style.left = sx+'px';
    renderer.domElement.style.top = sy+'px';
    
    //renderer.setClearColorHex(0xEEEEEE, 1);
	renderer.clear();
	
	clock = new THREE.Clock();
	
	scene = new THREE.Scene();
	
	var fov = 30;
	var width = renderer.domElement.width;
	var height = renderer.domElement.height;
	var aspect = width / height;
	var near = 1;
	var far = 1000;
	camera = new THREE.PerspectiveCamera (fov, aspect, near, far);
	camera.position.x =	250;
	camera.position.z = 220;
	camera.position.y = 220;
	camera.lookAt(new THREE.Vector3(0,90,0));
	
	light = new THREE.DirectionalLight();
	light.position.set( 400, 400, 400 );
	light.intensity = 0.5;
	light.castShadow = true;
	scene.add(light);

	
	/*var loaderAnimation = new THREE.JSONLoader();


		loaderAnimation.load("models/animation/run.js", function(anim){
			THREE.AnimationHandler.add( anim.animation );
		///////////////////////////////////////////////////////////////////////
			var loaderModel = new THREE.JSONLoader();
			loaderModel.load("models/man.js", function(geometry,materials){
			//loaderModel.load("models/latnik.js", function(geometry,materials){
				
			materials[0].skinning = true;
			user = new THREE.SkinnedMesh( geometry, materials[0] );
			user.animation = new THREE.Animation( user, "run" );
			user.animation.play()
			user.rotation.y = 0;//0.85; //3.14;
			scene.add(user);
			});
		})*/



		blendMesh = new THREE.BlendCharacter();
		blendMesh.load( "models/skinned/marine/marine_anims.js", start);
		

/*		var data = event.detail;
		blendMesh.stopAll();
		// the blend mesh will combine 1 or more animations
		for ( var i = 0; i < data.anims.length; ++i ) {
		blendMesh.play(data.anims[i], data.weights[i]);
		}
		isFrameStepping = false;*/		
		//scene.add(blendMesh);


		function start() {
			blendMesh.showModel( true );

			//blendMesh.rotation.y = Math.PI * -135 / 180;
			scene.add( blendMesh );

/*			var aspect = window.innerWidth / window.innerHeight;
			var radius = blendMesh.geometry.boundingSphere.radius;

			camera = new THREE.PerspectiveCamera( 45, aspect, 1, 10000 );
			camera.position.set( 0.0, radius, radius * 3.5 );

			// Set default weights

			blendMesh.animations[ 'idle' ].weight = 1 / 3;
			blendMesh.animations[ 'walk' ].weight = 1 / 3;
			blendMesh.animations[ 'run' ].weight = 1 / 3;

			animate();*/
		}



/*		function animate() {

			requestAnimationFrame( animate, renderer.domElement );

			// step forward in time based on whether we're stepping and scale

			var scale = 1;
			var delta = clock.getDelta();
			var stepSize = (!isFrameStepping) ? delta * scale: timeToStep;

			// modify blend weights

			blendMesh.update( stepSize );

			THREE.AnimationHandler.update( stepSize );

			renderer.render( scene, camera );

			timeToStep = 0;

		}*/

}
