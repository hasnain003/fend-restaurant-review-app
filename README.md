#FEND Restaurant Review App(Stage 1)
---

Description
=================
For the Restaurant Reviews projects, I have incrementally convert a static webpage to a mobile-ready web application. This project was a static design that lacks accessibility and I have convert the design to be responsive on different sized displays and accessible for screen reader use. I have also converted this to a Progressive Web Application by caching some assets for offline use.All of the page elements is usable and visible in any viewport, including desktop, tablet, and mobile displays.Using Cache API and a ServiceWorker,I have cache the data for the website so that any page (including images) that has been visited is accessible offline.

Run the Application
====================
![](https://github.com/hasnain003/fend-restaurant-review-app/blob/master/img/Restaurant%20Reviews.gif?raw=true)

In order to run the application you have two options:

1. Open it [here](https://hasnain003.github.io/fend-restaurant-review-app/)
2. Run it localy
	* Download as .zip file or clone this project:
	  `https://github.com/hasnain003/fend-restaurant-review-app.git`
	* In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.
	* In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's website to download and install the software.
	* With your server running, visit the site: `http://localhost:8000`.

Browser Support
==============================
Edge  | Chrome | Firefox | Opera | Safari
----- | ------ | ------- | ----- | ------
Latest:white_check_mark: | Latest:white_check_mark: | Latest:white_check_mark: | Latest:white_check_mark: | Latest:white_check_mark:

Contribute
==============
1. Fork it
2. Create your feature branch: `git checkout -b my_new_feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin my_new_feature`
5. Submit a Pull Request :sunglasses:

License
===========
MIT License 
Copyright (c) 2018 MD Hasnain