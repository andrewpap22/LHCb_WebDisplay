# 🖥️ LHCb Web Event && Geometry Display Project

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

<div align="center">

[![License][license-img]][license-url]
 ![Repository Size](https://img.shields.io/github/repo-size/andrewpap22/LHCb_WebDisplay)
 ![Last Commit](https://img.shields.io/github/last-commit/andrewpap22/LHCb_WebDisplay)
 ![Open Issues](https://img.shields.io/github/issues/andrewpap22/LHCb_WebDisplay?color=important)
 ![Open Pull Requests](https://img.shields.io/github/issues-pr/andrewpap22/LHCb_WebDisplay?color=yellowgreen)
 [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

[license-img]: https://img.shields.io/github/license/hsf/phoenix.svg
[license-url]: https://github.com/hsf/phoenix/blob/master/LICENSE

</div>

<div align="center">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fandrewpap22%2FLHCb_WebDisplay&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://lhcb-web-display.app.cern.ch/)

</div>

## 🚀 Up on

* 🌐 [CERN](https://lhcb-web-display.app.cern.ch/)

## 📂 Project Structure

```bash
.
├── angular.json
├── Dockerfile
├── karma.conf.js
├── LICENSE
├── nginx.conf
├── package.json
├── projectStructure.txt
├── README.md
├── src
│  ├── app
│  │  ├── app.component.html
│  │  ├── app.component.scss
│  │  ├── app.component.spec.ts
│  │  ├── app.component.ts
│  │  ├── app.module.ts
│  │  ├── gltf-exporter
│  │  │  ├── gltf-exporter.component.html
│  │  │  ├── gltf-exporter.component.scss
│  │  │  ├── gltf-exporter.component.spec.ts
│  │  │  └── gltf-exporter.component.ts
│  │  ├── home
│  │  │  ├── home.component.html
│  │  │  ├── home.component.scss
│  │  │  ├── home.component.spec.ts
│  │  │  └── home.component.ts
│  │  └── lhcb-experiment
│  │     ├── lhcb-experiment.component.html
│  │     ├── lhcb-experiment.component.scss
│  │     ├── lhcb-experiment.component.spec.ts
│  │     └── lhcb-experiment.component.ts
│  ├── assets
│  │  ├── event-data
│  │  │  └── LHCbEventDataV2.json
│  │  ├── favicon
│  │  │  └── favicon.ico
│  │  ├── geometry
│  │  │  ├── lhcb.gltf
│  │  │  ├── LHCb_run2_ECAL.gltf
│  │  │  ├── LHCb_run2_HCAL.gltf
│  │  │  ├── LHCb_run2_MUON.gltf
│  │  │  ├── LHCb_run3.root
│  │  │  ├── LHCb_run3_ECAL.gltf
│  │  │  ├── LHCb_run3_FT.gltf
│  │  │  ├── LHCb_run3_HCAL.gltf
│  │  │  ├── LHCb_run3_MAGNET.gltf
│  │  │  ├── LHCb_run3_MagnetCover.gltf
│  │  │  ├── LHCb_run3_MUON.gltf
│  │  │  ├── LHCb_run3_PIPE.gltf
│  │  │  ├── LHCb_run3_Rich_AfterMagnet.gltf
│  │  │  ├── LHCb_run3_Rich_BeforeMagnet.gltf
│  │  │  ├── LHCb_run3_UT.gltf
│  │  │  ├── LHCb_run3_VP.gltf
│  │  │  ├── LHCb_run3_VP_better_Performance.gltf
│  │  │  └── lhcbfull.root
│  │  ├── icons
│  │  │  ├── add-icon.svg
│  │  │  └── zoom-out.svg
│  │  └── images
│  │     ├── geometry.svg
│  │     ├── LHCb.svg
│  │     ├── lhcb_logo.png
│  │     └── playground.svg
│  ├── environments
│  │  ├── environment.prod.ts
│  │  ├── environment.single.ts
│  │  └── environment.ts
│  ├── index.html
│  ├── main.ts
│  ├── polyfills.ts
│  ├── styles.scss
│  └── test.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── yarn.lock

## I've removed lot's of stuff from assets as this was getting huge.
```

## 💬 Summary

The following project consists of an **important** part of my work @[CERN](https://home.cern/) 
as a [Software Engineer](https://gitlab.cern.ch/anpappas) (TECH) for the years of 2021-2022 on the [LHCb](http://lhcb-public.web.cern.ch/) the Large Hadron Collider beauty experiment.

In Particular it consists of two parts.

1. *The LHCb Web Event and Geometry display* itself
2. *The .root to .gltf Exporter*

Details: 

## 🖥️ LHCb Web Event and Geometry Display

> The project is mainly using the [Phoenix Framework](https://github.com/HSF/phoenix) for it's UI which was selected for the years of 2019 and 2020 as a Google Summer of Code [GSoC](https://summerofcode.withgoogle.com/) Project, to which **I'm a contributor**! 

### ⌨️ Local Development

For running the project locally on your machine you will need **Node.js**, **npm** and **yarn**.

#### ⬇️ Get Node.js and npm 

> /// Note that npm comes alongside Node.js 

The recommended way to get the latest versions is to use the `Node Version Manager` a.k.a [nvm](https://github.com/nvm-sh/nvm)

Please do follow the instructions on the following 👉 [README.md](https://github.com/nvm-sh/nvm/blob/master/README.md) to get latest stable versions of Node.js and npm for the family of UNIX operating systems. (MacOS and Linux)
For Windows you can follow the same instructions by using [gitBash](https://gitforwindows.org/) or
by downloading Node.js from their [website](https://nodejs.org/en/).

#### ⬇️ Get yarn, install dependencies and run the project locally

Once you have Node.js and npm, install yarn by issuing the following command: 

```bash
$ npm install --global yarn
```

Then, do `git clone` the project locally and be sure you're into the `./LHCb_WebDisplay` directory and then:

```bash
### Install the required dependencies 

$ yarn install

### Run the project in development / watch mode

$ yarn start
```

Now, `LHCb_WebDisplay` will start in development / watch mode. Any change made to the source code while the local server is running, will rebuild and hot reload the project itself. 

You can access and view the `LHCb_WebDisplay` as well as the *GUI* for the `gltf_exporter` (which we'll analyse later on) by heading into the browser of your choice and typing into the address bar: `http://localhost:4200/`

<hr>

For detailed documentation and demos about the usage of the Phoenix UI you can head over to this 👉 [URL](https://github.com/HSF/phoenix) or have a look on my 🖼️ [final presentation](./AndreasPappas_03-12-2021_LHCb-week.pdf) given at the 102th LHCb week 2021 at CERN.

As of 2022 you will be able as well to read the published paper and poster of the project at [ACAT2021](https://indico.cern.ch/event/855454/contributions/4598428/)

<hr>

## 🖼️ ROOT to Gltf Exporter

### Introduction

It seems that a need has arose to convert GDML geometry files to a particular file format that describes a geometry,
that can be supported and visualized properly by Phoenix. 
Hopefully by following the steps bellow you will be able to achieve it. 
Please do open an [issue](https://github.com/HSF/phoenix/issues) in case of problems, where friendly folks can try and help. 

#### Convert GDML to ROOT 

Root will serve as a middleman for our purpose. 
Root is a C++ Data Analysis Framework. One needs to install it first locally by heading into Root's 👉 [Documentation](https://root.cern/install/) and following the steps listed over there. 

Once that is done, one can write a simple C++ function that will loop over the contents of the GDML file and with the help of some of the ROOT's Framework methods it will output a proper .root file with the name specified, which we will later on use to convert it into GLTF format and visualize it into Phoenix. 

The following C++ code works and serves for the above mentioned purpose. In case of problems please do open an issue and someone will try and help! 

```c++
void gdml_to_root_export() 
{
    // Loading the library and geometry
    gSystem->Load("libGeom");
    TGeoManager::Import("./path_of_your_gdml_file.gdml");
    gGeoManager->SetVisLevel(4); /// the number here can be changed based on the depth of the visibility level of your gdml file and the detail that you want to visualize it. 

    // Export the geometry
    gGeoManager->Export("filename.root");
}
```

> Keep in mind that in order for the above function to work, you should have installed the C++ ROOT Framework on your machine. 

Compiling and running the above code should result in outputting the .root file from your .gdml input. 

##### Verify that the .root file is extracted properly. 

One can visualize the .root file itself to be sure that it was extracted properly. 
We'll provide 2 tools one can use here and one of them is Phoenix itself.

> But why convert to .gltf since Phoenix supports .root visualization? 

.root visualization will result into kinda a poor visualization image and also not that great of performance. Also another good reason to not stick with .root is that one can not split the .root file itself into multiple sub-parts / sub-geometries thus eliminating one of the core functionalities of Phoenix into geometry visualization. And thus a new tool was created for this very purpose. 

#### 📐 ROOT to GLTF [web-based tool](https://lhcb-web-display.app.cern.ch/#/gltf-exporter) 

On the following 👉 [website](https://lhcb-web-display.app.cern.ch/#/gltf-exporter) you will find the new web-based tool that was created so you can first verify that your .root file was extracted properly and then translate it into `.gltf` so you can visualize it properly inside Phoenix. 

There is enough information in the website itself, so you won't get lost but some quick steps to follow in order, would be: 

1. Import your local .root file.
2. Do type the particular root object string in the empty box and click the button `Import root`.
3. Do wait a couple of seconds and it should load automatically and you'll be able to see it visualized properly. 
4. `If you don't know where to find the root object name just scroll a bit down on the page and you'll find relevant info.` 
5. Go at the bottom of the page and press the button `export to gltf` (only if you import your root file via a URL. Importing it from your local machine will translate it automatically to gltf)
6. It might take a couple of seconds or minutes (depending on the file size) and then your .gltf file will get downloaded locally automatically. 
7. Upload your .gltf file to the GLTF viewer at the bottom of the page and verify that it was extracted properly. 
8. Go and visualize your file inside Phoenix and play with it! 

> Below you can find useful gifs demonstrating the above steps!

##### Convert the geometry while importing the file locally from your machine

![export-from-local-file](./src/assets/gifs/export-from-local-file.gif)

##### Convert the geometry while importing the file via a web browser URL

![export-from-url](./src/assets/gifs/export-from-url.gif)

##### How to find the ROOT object name

![find-root-object-name](./src/assets/gifs/find-root-object-name.gif)

#### Split your GLTF geometry into multiple parts

After extracting our geometry and visualizing into Phoenix we might want to split it into multiple subparts to visualize and play with each part of our geometry seperately. 

To do that one might need to modify some code for his .gltf file but extensive documentation is written for the ease of that purpose over 👉 [here](https://github.com/andrewpap22/root_cern-To_gltf-Exporter) and 👉 [here](https://gitlab.cern.ch/bcouturi/gltfexporter)!

Just follow the documentation in ether of the above links and you should be good to split your whole geometry into multiple subparts and be able to visualize into Phoenix each one of them seperately or all together with the option to enable and disable each part from the UI!

Again feel free to open an [issue](https://github.com/HSF/phoenix/issues) if stuck and some friendly folk will try and help!

## 🚀 Deployment

The project is deployed under `paas.cern.ch` which is the open source version of OpenShift 4 (namely okd4)

Detailed **documentation** on how to solve any problem that might occur with the deployment of this project can be found on the following 👉 [URL](https://paas.docs.cern.ch/).

What we mostly care for at this point is on to `how to push new changes made inside the application to the deployment.` 

Since the deployment of this application is linked to my [CERN GitLab profile](https://gitlab.cern.ch/anpappas) but no GitLab CI is used, you'll have to manually update the changes to the deployment after `committing` and `pushing` your new changes to the project. To do that: 

#### Push new changes to the deployment

1. Docker Login

```bash
docker login gitlab-registry.cern.ch
```

2. Build the docker image

```bash
docker build -t gitlab-registry.cern.ch/anpappas/lhcb_webdisplay .
```

3. Push the image

```bash
docker push gitlab-registry.cern.ch/anpappas/lhcb_webdisplay
```

After the above 3 steps, your new changes should get updated on the deployment side as well! 

To verify that the changes have been applied you can of course visit the application's 👉 [webiste](https://lhcb-web-display.app.cern.ch/) or head over to the repository in GitLab and under, `Packages & Registries/Container Registry` you should be able to diagnose if the root image has been built successfully or not and check the errors in case it's not.

<hr>

&copy; [CERN](https://home.cern/) 2021 by [\<Andreas\> \<\\A. Pappas\>](https://twitter.com/AndreasPappas22) @[LHCb](https://lhcb.web.cern.ch/)