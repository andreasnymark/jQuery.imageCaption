# jQuery.imageCaption.js

## What does it do

For some CMS, there's no good way of adding caption on images. This is used on a EPiServer project, using the alt-attribute as the way to add caption.

## How to use 

Simply add the plugin and then:

`$('.editor > img').imageCaption();`

### Options

You can change elements in the output simply by defining `figure` and `figcaption` when initiating:

`$('.editor > img').imageCaption({figure:'<div>', figcaption:'<span>'});`

### HTML output

By default this:

	<img src="url" alt="This is the caption." class="class1 class2" />

will render:

	<figure class="class1 class2">
		<img src="url" alt="This is the caption.">
		<figcaption>This is the caption.</figcaption>
	</figure>

