# Milk Æ Wey SDV (Space Debris Visualizer)

<img align="right" width="150" height="150"
     alt="Logo"
     src="https://user-images.githubusercontent.com/18373185/135788011-ccd0d816-943e-4dde-bd9e-76f50abdfa40.png">

Do you enjoy looking at the sky and seeing all the stars? That may not be possible in the future, as the amount of space debris is constantly growing and creating a layer of trash that may block us from seeing outside our planet and even leaving it.
Space debris travels at a median speed of 16,000 mph, and if it collides with an active satellite it could have catastrophic consequences. 

Our project allows anyone to visualize the amount of debris that orbits the earth, and aims to raise awareness of the problem it represents and to serve as a tool for future initiatives. 

## Demo

https://www.youtube.com/watch?v=ftqKBi-OW68

## Live project

[https://milkywey.rocks](https://milkywey.rocks)


## Description

Our app renders a 3D model of the earth with all the known space debris in real time, and it allows you to get information on that specific object when you click on it like the apoapsis, periapsis, and the eccentricity of its orbit, along with its name and its NORAD id.

![image](https://user-images.githubusercontent.com/18373185/135787252-d4873699-bc5f-4f78-8f49-0e9af52db283.png)

![image](https://user-images.githubusercontent.com/18373185/135787265-b9dcb0d5-8901-4887-81f7-eb2970fe5018.png)

We used JavaScript with the React web framework, along with multiple open source libraries like Satellite.js to calculate the objects trajectories, and CesiumJS and Resium to visualize the 3D model of the earth and all the points

## Data

We retrieved data from space-track.org and created a Python script to extract the data fields that would be used for our project.

We used the TLE format to calculate the orbits and also extracted the apoapsis, periapsis, and the eccentricity of the orbits.

## Used Resources

Data extracted from https://www.space-track.org/documentation#/api

3D rendering https://cesium.com/

Orbits calculations https://github.com/shashwatak/satellite-js

Investigation https://www.nasa.gov/mission_pages/station/news/orbital_debris.html

Web Framework https://es.reactjs.org/

Cesium components for React https://resium.reearth.io/
