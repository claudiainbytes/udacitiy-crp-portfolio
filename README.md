Website Performance Optimization Dua Lipa's Portfolio Project
=============================================================

The goal of this project is optimize it for speed. The portfolio must be rendered as quicky as possible by applying CRP (Critical Rendering Path) techniques.

## The process

1. Optimize PageSpeed Insights score for index.html
2. Profile, optimize, measure... and then lather, rinse, and repeat.

### Getting started

To get started, check out the repository and inspect the code.

Clone this repo in your local machine, go into the folder and you can see two folders(src and dist):
```bash
  git clone https://github.com/claudiainbytes/udacity-crp-portfolio.git

```

#### Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

For src folder (no-optimized site/in process to be optimized):

  ```bash
  $> cd /path/to/udacity-crp-portfolio/src
  $> python -m SimpleHTTPServer 8080
  ```

For dist folder( optimized site):

  ```bash
  $> cd /path/to/udacity-crp-portfolio/dist
  $> python -m SimpleHTTPServer 3000
  ```

1. Open a browser and visit localhost:8080
2. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

For src folder (no-optimized site/in process to be optimized):
  ```bash
  $> cd /path/to/udacity-crp-portfolio/src
  $> ./ngrok http 8080
  ```

For dist folder( optimized site):

  ```bash
  $> cd /path/to/udacity-crp-portfolio/dist
  $> ./ngrok http 3000
  ```

3. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Customization

I used [Gulp Task Runner](https://github.com/gulpjs/gulp) to optimize the whole portfolio. Gulp is base on pipe streams. Gulp works with two files: the package.json and the gulpfile.js. The last one
has defined the task that I want to do.

## Step 1. Before start, you have to install

- Python (v2.7)
- node (v8.9.1)
- npm  (v5.5.1)

## Step 2. Installing GULP

```bash
sudo npm install gulp-cli -g
sudo npm install gulp -D
```
## Step 3. Installing this dependencies

```bash
sudo npm install pump -g
sudo npm install sharp -g
```
If you have some problems with some graphics dependencies, please install:

```bash
sudo npm install imagemin  imagemin-jpegtran imagemin-svgo imagemin-gifsicle imagemin-optipng jpegtran-bin optipng-bin --save --unsafe-perm=true --allow-root
```

## Step4. IMPORTANT! Install GraphicsMagick

For OSX systems you can use [More info here](http://macappstore.org/graphicsmagick/):

```bash
brew install graphicsmagick
```

For Ubuntu:

```bash
sudo apt-get install python-software-properties
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:rwky/graphicsmagick
sudo apt-get update
sudo apt-get install graphicsmagick
```

## Step 5. Execute the package.json to create node_modules folder

```bash
sudo npm install
```

## Step 5. Running task

If you write some of this comands in console, on the project root folder

```bash
gulp
```
Executes the follow tasks in this order:
- minify-fonts
- minify-css
- inline-css-js
- minify-js
- pizza-minify-js
- minify-html
- cache-bust

To optimize portfolio images, you should execute this commands in this order:

```bash
gulp clean-srcset
gulp responsive-images
gulp imagemin
```

To optimize pizza view images, you should execute this commands in this order:

```bash
gulp pizza-clean-srcset
gulp pizza-responsive-images
gulp pizza-imagemin
```

If you need optimize html pages

```bash
gulp inline-css-js
gulp minify-html
```

## Problems with Gulp or any NPM dependency

You can execute

```bash
sudo npm rebuild
```

## Initial state

No optimized CRP analysis [Click Here!](https://docs.google.com/document/d/1DvGxhN3kCA5f8K88sdbSXMN1HK8UhtkRkeOE-zvwmlY/edit?usp=sharing)

PageSpeed Insights

- Mobile: Poor 51/100
- Desktop: Poor 58/100

## Final state

PageSpeed Insights

![alt PageSpeed Insight Final State Mobile](https://github.com/claudiainbytes/udacity-crp-portfolio/blob/master/crp_analysis/insights_mobile.png)

![alt PageSpeed Insight Final State Desktop](https://github.com/claudiainbytes/udacity-crp-portfolio/blob/master/crp_analysis/insights_desktop.png)

![alt PageSpeed Insight Final State Pizza.html Mobile](https://github.com/claudiainbytes/udacity-crp-portfolio/blob/master/crp_analysis/insights_pizza_mobile.png)

![alt PageSpeed Insight Final State Pizza.html Desktop](https://github.com/claudiainbytes/udacity-crp-portfolio/blob/master/crp_analysis/insights_pizza_desktop.png)

## Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

