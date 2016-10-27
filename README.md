![shutUp.js](https://github.com/sefatunckanat/shutUp.js/raw/master/demo/shutUp.png)

#shutUp.js
----------
Minimized html text [jQuery](https://github.com/jquery/jquery) subtractive

shutUp.js is crops in the specified text characters for required length.

	substr is not good
**Usage**

    <script>
	$(function(){
		$('selector').shutUp(length,{options});
	});
	</script>

**Options**

	var default ={
		'dotChar':'.',
		'dotCount':3
	}
	var exampleOptions = {
		'dotChar':'_',
		'dotCount':1
	}
	$("selector").shutUp(100,exampleOptions);

There are better, but this is me
