<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>mikromalmakro - Kontakt</title>
        <link href="main.css" rel="stylesheet" type="text/css">
        <link rel="icon" href="mikromalmakro_c_rgb.ico" type="image/vnd.microsoft.icon">       
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
		<script src="Kontakt-Animation.js?1456169239822"></script>
        <script>
        var canvas, stage, exportRoot;
        function init() {
            // --- write your JS code here ---
            
            canvas = document.getElementById("canvas");
            exportRoot = new lib.KontaktAnimation();
        
            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();
        
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }
        
        </script>
    </head>
    <body onload="init();">
    <div><img id="gototop" src="http://www.hummelbienchen.de/gfx/pfeil-01.png" alt="Menu" /></div>
    <?php include("header.php"); ?>
    <div id="big_wrapper">
    	<div id="top"></div>        
        <section>
        <div style="margin:0px;">
			<canvas id="canvas" width="1000" height="100" style="background-color:#5e99f7"></canvas>
    	</div>
        <p>
        	Zur Preisanfrage und allgemeinen Fragen: <br />
            <a href="mailto:info@mikromalmakro.de?Subject=Preisanfrage" target="_top">
            info@mikromalmakro.de
            </a><br /><br />
            Gerne können Sie mich auch unter der 01777303300 anrufen.   
        </p>
        </section>
        <script language="javascript" type="text/javascript" src="lib/p5.js"></script>
		<script language="javascript" type="text/javascript" src="lib/p5.dom.js"></script>
		<script language="javascript" type="text/javascript" src="lib/p5.sound.js"></script>
		<script language="javascript" type="text/javascript" src="p5-animations.js"></script>
  		<script language="javascript" type="text/javascript" src="jquery-main.js"></script>
    </div>
    </body>
</html>