<div class="callbacks_container">
        <ul class="rslides" id="anzeigen">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/anzeigen";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="spiel">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/spiel";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="lh">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/lh";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="banner">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/banner";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="mailings">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/mailings";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="bewerberleitfaden">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/bewerberleitfaden";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="hochzeit">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/hochzeit";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="infografik">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/infografik";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="montagen">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/montagen";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="locka">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/locka";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="jasmin">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/jasmin";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="fussball">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/fussball";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>
<div class="callbacks_container">
        <ul class="rslides" id="stephie">
        <?php 
		// Ordnername 
		$ordner = "pics/arbeitsproben/stephie";
		$allebilder = scandir($ordner); // Sortierung A-Z
		
        foreach ($allebilder as $bild) {
 
	// Zusammentragen der Dateiinfo
	$bildinfo = pathinfo($ordner."/".$bild); 
	
	if ($bild != "." && $bild != ".."  && $bild != "_notes" && $bildinfo['basename'] != "Thumbs.db" && $bildinfo['basename'] != ".DS_Store") { 
	?>
    
        <li>
        <img src="<?php echo $bildinfo['dirname']."/".$bildinfo['basename'];?>" alt="<?php echo $bildinfo['basename']; ?>" />
    	</li>
    
    
<?php
	};
 };
?>
</ul>
</div>