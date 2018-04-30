---
layout: post
published: false
title: ICAT Day MovieViz 4/30/2018
---
The goal of this project was the create interactive visualizations of the films avaialable for streaming from Virginia Tech [here](https://digitalcampus-swankmp-net.ezproxy.lib.vt.edu/vtc299211/admin/Login?returnUrl=/vtc299211/Admin).   In order to build the visualizations the data collected and process through the usage of python [scripts](https://github.com/mritzing/movieVizFinal) and then
the visualizations were created in Tableau and Gephi.  All files used for this project can be found [here](https://github.com/mritzing/movieVizFinal).

## Utilizing Basic Programming to Improve Workflow
Words, small scripts (less scary), can be used to greatly improve workflow for repetative tasks, demys

## Visualizations 
The visualizations for this project were created in Tableau (the interactive dashboard) and Gephi (the network graph) both these programs are free to download and additional training can be found in the library's [Data Visualization Studio](https://datavizstudio.lib.vt.edu/)

## Swank Database
Virginia Tech offers **900+** movies available to stream [here](https://digitalcampus-swankmp-net.ezproxy.lib.vt.edu/vtc299211/admin/Login?returnUrl=/vtc299211/Admin).  The first step of this project was to get a list of all the films available and since there was no easy access to the backend of the database basic HTML parsing was utilized to extract the titles and poster images. The files for that can be found [here](!TODO GET LINK)

![alt text](https://github.com/mritzing/movieVizFinal/blob/master/RepoImages/movieDB.PNG?raw=true)

## Data Collection
There are a few data sources that can be used here to collect additional information about the films, [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page), [TMDB](https://www.themoviedb.org/), and Google search results just to name a few.  For this project this project a combination of the data from the TMDB api and results from Google searches were combined to form the [final dataset](here).  Some manual data cleaning was done, primarily involving fixing instances of films with the same title.



## Boxes
You can add notification, warning and error boxes like this:

### Notification

{: .box-note}
**Note:** This is a notification box.

### Warning

{: .box-warning}
**Warning:** This is a warning box.

### Error

{: .box-error}
**Error:** This is an error box.
