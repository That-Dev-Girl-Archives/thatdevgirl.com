---
layout: home
title: That Dev Girl, LLC | Website and tool design and development
---

<section class="about" id="top" aria-label="About my business">
  <div class="about-inner">

    <header class="about__header" aria-label="About my business section header">
      <img src="/assets/images/thatdevgirl-logo-sm.png" alt="That Dev Girl Logo">
      <h1>Better Code. <br> Better Websites.</h1>
    </header>

    <p class="about__p">
      My name is Joni Halabi and I am a web developer in Washington DC.
      I create websites and applications for large and small organizations,
      specializing WordPress, Drupal, and Javascript frameworks.
    </p>

    <p>
      <a href="mailto:her@thatdevgirl.com" class="btn primary">E-mail me for more info</a>
    </p>

  </div>
</section>

<section id="websites" aria-label="Websites">
	<div class="container">
		<h1>Websites.</h1>

		<div class="flex-container">
			<article class="flex-card" aria-label="McCourt School">
				<a href="http://mccourt.georgetown.edu" target="_blank" class="websites__a--screenshot">
					<img src="/assets/images/project-mccourt.jpg" alt="McCourt School home page" />
				</a>

				<h2><a href="http://mccourt.georgetown.edu" target="_blank">McCourt School of Public Policy @ Georgetown</a></h2>

				<p>
					Drupal 7, Bootstrap 4, jQuery, Sass, CSS3, HTML5
				</p>

				<p class="hidden-sm">
					<strong>Involvement</strong> <br />
					I currently work full-time for Georgetown University as a Senior Javascript front-end developer in
					our University Information Services department.  I worked with a small team of developers, designers,
					and product managers to create a new, flexible Drupal 7 theme for the University's school websites.
				</p>

				<p class="hidden-sm">
					The site is part of a Drupal 7 multi-site implementation that includes 300+ other university
					sites, many of which use an older theme (for now).  Our biggest challenge was creating
					this theme using best practices while not affecting sites on the older theme, knowing that both themes
					share many back-end modules and features.
				</p>

				<a href="http://mccourt.georgetown.edu" target="_blank" class="btn primary">View Site</a>
			</article>

			<article class="flex-card" aria-label="SemanticClarity">
				<a href="http://www.semanticclarity.com" target="_blank" class="websites__a--screenshot">
					<img src="/assets/images/project-semanticclarity.jpg" alt="SemanticClarity home page" />
				</a>

				<h2><a href="http://www.semanticclarity.com" target="_blank">SemanticClarity</a></h2>

				<p>
					Drupal, Sass, CSS3, HTML5
				</p>

				<p class="hidden-sm">
					<strong>Involvement</strong> <br />
					SemanticClarity reached out to me in late 2015 about relaunching their website in parallel with
					an initiative to refocus their business strategy.
				</p>

				<p class="hidden-sm">
					I worked with them to create a new design based on their current branding and develop a flexible,
					responsive Drupal theme based on that design. The new site was launched in February 2016 on the
					Acquia platform.
				</p>

				<a href="http://www.semanticclarity.com" target="_blank" class="btn primary">View Site</a>
			</article>

			<article class="flex-card" aria-label="Chicago Community Trust">
				<a href="http://www.cct.org" target="_blank" class="websites__a--screenshot">
					<img src="/assets/images/project-cct.jpg" alt="Chicago Community Trust home page" />
				</a>

				<h2><a href="http://www.cct.org" target="_blank">Chicago Community Trust</a></h2>

				<p>
					Wordpress, Javascript, SASS, CSS3, HTML5
				</p>

				<p class="hidden-sm">
					<strong>Involvement</strong> <br />
					I led the development of this project while working at AMS. Our team of developers collaborated
					with the designer and managers to release this site in in May 2015.  The site won the 2015
					<a href="http://www.mediapost.com/ommaawards/winners/" target="_blank">OMMA award for
					website excellence</a> in the charity/non-profit space.
				</p>

				<a href="http://www.cct.org" target="_blank" class="btn primary">View Site</a>
			</article>

			<article class="flex-card" aria-label="Macys">
				<div class="websites__a--screenshot">
					<img src="/assets/images/project-macys.jpg" alt="Macy's" />
				</div>

				<h2>Macy's Internal Application</h2>

				<p>
					Backbone.js, Marionette, jQuery, Jasmine
				</p>

				<p class="hidden-sm">
					<strong>Involvement</strong> <br />
					At Optaros, I was the lead front-end developer on a team that re-platformed the UI of Macy's
					internal product management application as a Backbone app.  This  also incorporated Marionette,
					Require, Jasmine, and a custom light-weight CSS grid framework.
				</p>
			</article>
		</div> <!-- /.flex-container -->

	</div> <!-- /.container -->
</section>

<section id="tools" aria-label="Tools and Projects">
	<div class="container">
		<h1>Tools and Projects.</h1>

		<div class="selector">
			<ul class="selector__ul">
				<li><a href="#" id="all" class="selected">All Projects</a></li>
				<li><a href="#" id="css">CSS</a></li>
				<li><a href="#" id="javascript">Javascript</a></li>
				<li><a href="#" id="utility">Utilities</a></li>
				<li><a href="#" id="wordpress">WordPress</a></li>
			</ul>
		</div>

		<div class="tools-container">
			<article class="wordpress" aria-label="AJAX Pagination">
				<h2>AJAX "Load More" Pagination</h2>
				<p>Add a "load more" button to your archive and search results pages to dynamically load additional posts without pagination or page loads.</p>
        <a href="/projects/load-more" class="btn tool">Documentation</a> <br>
				<p><a href="https://github.com/thatdevgirl/wordpress-load-more" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="javascript" aria-label="Backbone Recursive Navigation">
				<h2>Backbone Recursive Navigation</h2>
				<p>This component is a Backbone.js model and view that can be used to construct an infinitely deep navigation or nested list.</p>
				<p><a href="https://github.com/thatdevgirl/backbone-navigation" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="javascript" aria-label="Backgrid Cell Extensions">
				<h2>Backgrid Cell Extensions</h2>
				<p>This library contains a series of Backgrid cell extensions.</p>
				<p><a href="https://github.com/thatdevgirl/backgrid-cell-extensions" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="javascript" aria-label="Character Counter">
				<h2>Character Counter</h2>
				<p>Character counter written in jQuery.</p>
				<p><a href="https://github.com/thatdevgirl/character-count" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="wordpress" aria-label="Color Palette Plugin">
				<h2>Color Palette Plugin</h2>
				<p>Color palette creation plugin for WordPress.</p>
				<p>
					<a href="/projects/color-palette" class="btn tool">Documentation</a> <br>
					<a href="https://github.com/thatdevgirl/wordpress-color-palette" target="_blank" class="btn tool">GitHub</a>
				</p>
			</article>

			<article class="javascript" aria-label="Color Sequencing Dialog">
				<h2>Color Sequencing Dialog</h2>
				<p>This color sequencing widget was developed as a proof of concept to reorder large numbers of content blocks inside a YUI dialog box.</p>
				<p><a href="https://github.com/thatdevgirl/color-sequencing" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="css" aria-label="CSS Mega Menu">
				<h2>CSS Mega Menu</h2>
				<p>This simple mega navigation menu is inspired by the many mega menus on retail and other websites.</p>
				<p><a href="https://github.com/thatdevgirl/css-mega-menu" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="css" aria-label="CSS Menu">
				<h2>CSS Menu</h2>
				<p>This simple navigation menu demonstrates how to create a main navigation menu with drop down sub-menus using just CSS.</p>
				<p><a href="https://github.com/thatdevgirl/css-menu" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="javascript" aria-label="CSV to JSON Converter">
				<h2>CSV to JSON Converter</h2>
				<p>This script will convert a CSV file to JSON. That's it!</p>
				<p><a href="https://github.com/thatdevgirl/csv-to-json" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="utility" aria-label="Flickr Place Image">
				<h2>Flickr Place Image</h2>
				<p>Script that uses the Flickr API to provide placeholder images for web developers and designers.</p>
				<p><a href="https://github.com/thatdevgirl/flickr-place-image" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="utility" aria-label="GitHub to Trello Migration">
				<h2>GitHub to Trello Migration</h2>
				<p>This page/script allows you to migrate GitHub tickets into Trello.</p>
				<p>
					<a href="https://rawgithub.com/thatdevgirl/github-to-trello/master/index.html" target="_blank" class="btn tool">Live Preview</a> <br>
					<a href="https://github.com/thatdevgirl/github-to-trello" target="_blank" class="btn tool">GitHub</a>
				</p>
			</article>

			<article class="utility" aria-label="Peace">
				<h2>Peace</h2>
				<p>Facebook profile picture generator app that adds an image of the Earth over your existing profile picture.</p>
				<p>
					<!-- <a href="/peace" class="btn tool">Application</a> <br> -->
					<a href="https://github.com/thatdevgirl/peace" target="_blank" class="btn tool">GitHub</a>
				</p>
			</article>

			<article class="javascript" aria-label="Text Area Limit">
				<h2>Text Area Limit</h2>
				<p>This text area limit widget was developed as a proof of concept for implementing a character limit inside a text area.</p>
				<p><a href="https://github.com/thatdevgirl/textarea-limit" target="_blank" class="btn tool">GitHub</a></p>
			</article>

      <article class="javascript" aria-label="Pie Frame">
				<h2>Pie Frame</h2>
				<p>A Javascript library that auto-generates responsive D3 charts from Google Sheets. <i>(In progress.)</i></p>
				<p><a href="https://github.com/thatdevgirl/pie-frame" target="_blank" class="btn tool">GitHub</a></p>
			</article>

      <article class="utility" aria-label="Static Website Base">
				<h2>Static Website Base</h2>
				<p>My personal standard base code for static websites.</p>
				<p><a href="https://github.com/thatdevgirl/static-website-base" target="_blank" class="btn tool">GitHub</a></p>
			</article>

			<article class="wordpress" aria-label="WooCommerce Tiered Shipping Plugin">
				<h2>WooCommerce Tiered Shipping Plugin</h2>
				<p>This WordPress plugin adds a tiered flat rate shipping option for the WooCommerce plugin.</p>
				<p>
					<a href="/projects/wc-tiered-shipping" class="btn tool">Documentation</a> <br>
					<a href="https://github.com/thatdevgirl/wc-tiered-shipping" target="_blank" class="btn tool">GitHub</a>
				</p>
			</article>

			<article class="javascript" aria-label="Word Counter">
				<h2>Word Counter</h2>
				<p>Simple word counter in jQuery.</p>
				<p><a href="https://github.com/thatdevgirl/word-counter" target="_blank" class="btn tool">GitHub</a></p>
			</article>
		</div> <!-- /.flex-container -->

	</div> <!-- /.container -->
</section>

<section id="talks" aria-label="Public speaking">
	<div class="container">
		<h1>Talks.</h1>

		<div class="flex-container">
      <article class="flex-card" aria-label="Accessible Web Development">
        <h2>Accessible Web Development</h2>

        <p>
          We develop websites for everyone to use, so why not make sure that everyone is able to
          use our sites? We as developers need to plan for accessibility before we write our
          first line of code.
        </p>

        <p>
          This talk was given at NoVA CodeCamp in April 2017.
        </p>

        <a href="http://www.thatdevgirl.com/talks/accessibility" class="btn primary" target="_blank">See presentation slides</a>
      </article>

      <article class="flex-card" aria-label="Introduction to SVG">
				<h2>Introduction to SVG</h2>

				<p>
					Notes and example code for my introductory lecture about creating and using SVGs.
				</p>

				<a href="https://github.com/thatdevgirl/svg-intro" class="btn primary" target="_blank">See notes on GitHub</a>
			</article>

			<article class="flex-card" aria-label="Introduction to Ember">
				<h2>Introduction to Ember</h2>

				<p>
					Notes and example code for my introductory lecture about using Ember.js.
				</p>

				<p>
					<a href="https://github.com/thatdevgirl/ember-intro" class="btn primary" target="_blank">See notes on GitHub</a>
				</p>
			</article>

			<article class="flex-card" aria-label="CSS Navigation">
				<h2>CSS Navigation</h2>

				<p>
					Video lecture tutorial on how to create a multi-level website navigation with only HTMl and CSS.
				</p>

				<p>
					<a href="https://www.youtube.com/watch?v=3COhgSiF45c" class="btn primary" target="_blank">View on YouTube</a>
				</p>
			</article>
		</div> <!-- /.flex-container -->

	</div> <!-- /.container -->
</section>
