<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>mikromalmakro - Portfolio</title>
        <link href="main.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="slider/responsiveslides.css">
        <link rel="stylesheet" href="slider/demo.css">
        <link rel="icon" href="mikromalmakro_c_rgb.ico" type="image/vnd.microsoft.icon">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="slider/responsiveslides.js"></script>
    </head>
    <body>
    <div><img id="gototop" src="http://www.hummelbienchen.de/gfx/pfeil-01.png" alt="Menu" /></div>
    <?php include("header.php"); ?>
    <div id="big_wrapper">
    	<div id="top"></div>        
        <section>
        <h1>Portfolio</h1>
        <?php  
			include("pics/php/images.php");
		?>
    
    	<article>
        <!--<a href="downloads/Patrick-D-Brockmann_Arbeitsproben.pdf">Portfolio Download als PDF</a>--><br /> 
        </article>
        </section>
        <script language="javascript" type="text/javascript" src="lib/p5.js"></script>
		<script language="javascript" type="text/javascript" src="lib/p5.dom.js"></script>
		<script language="javascript" type="text/javascript" src="lib/p5.sound.js"></script>
		<script language="javascript" type="text/javascript" src="p5-animations.js"></script>
  		<script language="javascript" type="text/javascript" src="jquery-main.js"></script>
    </div>
    </body>
</html>